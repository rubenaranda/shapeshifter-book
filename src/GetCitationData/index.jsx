import axios from 'axios'
import { useState, useEffect } from 'react'

const GetCitationData = (baseURL) => {
  const [citation, setCitation] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCitation(response.data)
    })
  }, [baseURL])

  return citation
}

export default GetCitationData
