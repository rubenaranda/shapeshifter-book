
import React from 'react'
import { ButtonPosition } from './style'

const Button = ({ text, onClick }) => (
  <ButtonPosition data-testid='shapeshifter-buton' onClick={onClick}>
    {text}
  </ButtonPosition>
)

export default Button
