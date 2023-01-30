import ShapeshifterBookApp from '../ShapeshifterBook'
import Books from '../BookDetails/Book'
import { useState } from 'react'
import { BackgroundBody } from '../BookDetails/style'
const App = () => {
  const [bookData, setBookData] = useState(null)
  console.log(bookData)
  return (
    <div>
      <BackgroundBody />
      {/* {bookData != null ? <Books BookData={bookData} setBookData={setBookData} /> : <ShapeshifterBookApp setBookData={setBookData} />} */}
    </div>
  )
}

export default App
