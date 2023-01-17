import React, { useState } from 'react'
import GetCitationData from '../GetCitationData'
import { Citation } from './style'

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.hamatim.com/quote'

const CitationData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const apiData = GetCitationData(baseURL, setIsLoading)

  if (isLoading === false) {
    return (
      <div>
        <Citation>{apiData.text}</Citation>
      </div>
    )
  }
}

export default CitationData
