import ShapeshifterBookApp from '../CitationDisplayer'
import { useState } from 'react'

const App = () => {
  const [bookData, setBookData] = useState([])
  console.log(bookData.length)
  return (
    <div>
      {bookData.length > 0 ? <p>{bookData[0]}</p> : <ShapeshifterBookApp setBookData={setBookData} />}
    </div>
  )
}

export default App
