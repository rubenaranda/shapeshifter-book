import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Title, Author, Info, Description, BookImage, LeftPage, NoResult, ReturnButton, BackgroundBody } from './style'

const API_URL = 'https://www.googleapis.com/books/v1/volumes'

function Books ({ BookData, setBookData }) {
  const [isLoading, setIsLoading] = useState(true)
  const [books, setBooks] = useState(null)
  const [author, setAuthor] = useState(null)
  const [query, setQuery] = useState(null)

  useEffect(() => {
    setAuthor(BookData.author)
    setQuery(BookData.book)
    const data = async () => {
      if (query != null) {
        const result = await axios.get(`${API_URL}?q=${query}+inauthor:${author}`)
        console.log(result.data.items[0])
        setBooks(result.data.items[0])
        setIsLoading(false)
      }
    }
    data()
  }, [query])

  return (
    isLoading
      ?<div>
        <BackgroundBody>
      <NoResult>No carga, selecciona otra citacion</NoResult>
      <ReturnButton><button onClick={() => setBookData(null)}>Volver</button></ReturnButton>
      </BackgroundBody>
      </div>
      : <BackgroundBody>
        <ul>
          {books.volumeInfo
            ? (
              <div>
                <Title>{books.volumeInfo.title}</Title>
                <BookImage><img src={books.volumeInfo.imageLinks.thumbnail} alt={books.volumeInfo.title} /></BookImage>
                <LeftPage>
                  <Author>Written by {books.volumeInfo.authors} and published in {books.volumeInfo.publishedDate}</Author>
                  <Info>This book has {books.volumeInfo.pageCount} pages and its categorie is {books.volumeInfo.categories}</Info>
                </LeftPage>
                <Description>{books.volumeInfo.description}</Description>
                <ReturnButton><button onClick={() => setBookData(null)}>Volver</button></ReturnButton>
              </div>
              )
            : (
              <div>
                <NoResult>No results found</NoResult>
                <ReturnButton><button onClick={() => setBookData(null)}>Volver</button></ReturnButton>
              </div>
              )}
        </ul>
      </BackgroundBody>
  )
}

export default Books

// <Title>{book.volumeInfo.title}</Title>
// <Frame>{book.volumeInfo.authors}</Frame>
// <p>This book has {book.volumeInfo.pageCount} pages and its categorie is {book.volumeInfo.categories}</p>
// <p>This book was published in {book.volumeInfo.publishedDate}</p>
// <p>{book.volumeInfo.description}</p>
