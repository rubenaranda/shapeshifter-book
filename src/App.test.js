import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/count is/i).textContent
  console.log(linkElement)
  expect(linkElement).toBe('count is 0')
})
