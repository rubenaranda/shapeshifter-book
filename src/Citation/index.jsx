import React, { useState } from 'react'
import GetCitationData from '../GetCitationData'
import { Citation } from './style'

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.hamatim.com/quote'

const CitationData = ({ setBookData }) => {
  const [isLoading, setIsLoading] = useState(true)
  const apiData = GetCitationData(baseURL, setIsLoading)

  if (isLoading === false) {
    return (
      <div>
        <Citation onClick={() => { getBookData(apiData, setBookData) }}>{apiData.text}</Citation>
      </div>
    )
  }
}

const getBookData = (apiData, setBookData) => {
  const author = apiData.author
  const book = apiData.book
  setBookData([author, book])
}

export default CitationData
