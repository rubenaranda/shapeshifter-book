import ShapeshifterBookApp from '../ShapeshifterBook'
import Books from '../BookDetails/Book'
import { useState } from 'react'

const App = () => {
  const [bookData, setBookData] = useState(null)
  console.log(bookData)
  return (
    <div>
      {bookData != null ? <Books BookData={bookData} /> : <ShapeshifterBookApp setBookData={setBookData} />}
    </div>
  )
}

export default App
