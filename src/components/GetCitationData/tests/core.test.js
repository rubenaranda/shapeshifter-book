import axios from 'axios'
import { render, screen } from '@testing-library/react'
import Button from '../../GenericButton'

jest.mock('axios')

describe('API', () => {
  test('should fetch data', async () => {
    const response = {
      data: {
        text: 'Perhaps they were looking for passion; perhaps they delved into this book as into a mysterious parcel - a gift box at the bottom of which, hidden in layers of rustling tissue paper, lay something theyd always longed for but couldnt ever grasp.',
        author_img: 'https://images.gr-assets.com/authors/1282859073p2/3472.jpg',
        id: "b'ae298f5277513ffbde1c0feca9ed8e91'",
        book: 'The Blind Assassin',
        author: 'Margaret Atwood'
      },
      status: 200
    }
    axios.get.mockResolvedValue(response)

    const result = await axios.get('https://api.hamatim.com/quote')
    expect(result.status).toBe(200)
    expect(result.data).toEqual({
      text: 'Perhaps they were looking for passion; perhaps they delved into this book as into a mysterious parcel - a gift box at the bottom of which, hidden in layers of rustling tissue paper, lay something theyd always longed for but couldnt ever grasp.',
      author_img: 'https://images.gr-assets.com/authors/1282859073p2/3472.jpg',
      id: "b'ae298f5277513ffbde1c0feca9ed8e91'",
      book: 'The Blind Assassin',
      author: 'Margaret Atwood'
    })
    render(<Button text={result.data.text} />)
    screen.debug()
  })
})
