import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = "https://www.googleapis.com/books/v1/volumes?q=harry";

const getBook = (baseURL) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBook(response.data)
    })
  }, [])

  return book
}

export default getBook