import React from 'react'
import { Button as StyledButton } from './styles'
export default function Button({ title, icon, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {icon} {title}
    </StyledButton>
  )
}