import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Title, Author, Info, Description, BookImage, LeftPage } from '../style'

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

function Books() {
  const [books, setBooks] = useState([]);
  const [author,setAuthor] = useState(['jk rowling'])
  const [query, setQuery] = useState('harry potter y la camara secreta');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_URL}?q=${query}+inauthor:${author}`);
      console.log(result.data.items[0]);
      setBooks(result.data.items[0]);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <ul>
      {books.volumeInfo ? (
        <div>
          <Title>{books.volumeInfo.title}</Title>
          <BookImage><img src={books.volumeInfo.imageLinks.thumbnail} alt={books.volumeInfo.title} /></BookImage>
          <LeftPage>
          <Author>Written by {books.volumeInfo.authors} and published in {books.volumeInfo.publishedDate}</Author>
          <Info>This book has {books.volumeInfo.pageCount} pages and its categorie is {books.volumeInfo.categories}</Info>
          </LeftPage>
          <Description>{books.volumeInfo.description}</Description>
        </div>
      ) : (
        <p>No results found</p>
      )}
      </ul>
    </div>
  );
}

export default Books;

//<Title>{book.volumeInfo.title}</Title>
//<Frame>{book.volumeInfo.authors}</Frame>
//<p>This book has {book.volumeInfo.pageCount} pages and its categorie is {book.volumeInfo.categories}</p>
//<p>This book was published in {book.volumeInfo.publishedDate}</p>
//<p>{book.volumeInfo.description}</p>