import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '..'

test('The component Button should render with mocked text', () => {
  const text = 'Hola'

  render(<Button text={text} />)
  screen.debug()
})

test('The component Button should have a text', () => {
  const text = 'Hola'

  render(<Button text={text} />)

  expect(screen.getByTestId('shapeshifter-buton').textContent).toBe(text)
})
