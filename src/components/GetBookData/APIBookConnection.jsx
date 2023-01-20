import axios from 'axios'
// import { useState, useEffect } from 'react'

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = (query) => {
  return axios.get(`${API_URL}?q=${query}`)
}

searchBooks('harry')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })

export default searchBooks
