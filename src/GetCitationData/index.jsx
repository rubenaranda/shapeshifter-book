import axios from 'axios'
import { useState, useEffect } from 'react'

const GetCitationData = (baseURL, setIsLoading) => {
  const [citation, setCitation] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCitation(response.data)
      setIsLoading(false)
    })
  }, [baseURL])

  return citation
}

export default GetCitationData
