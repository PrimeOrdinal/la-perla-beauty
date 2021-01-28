import React from "react"
import styled from "styled-components"
import { Button } from "./Button"

const StyledNewsletter = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: end;
    label {
      margin-right: 30px;
      text-transform: uppercase;
      font-weight: bold;
    }
    input {
      width: 27.230769231rem;
      padding: 0.7rem;
      border-radius: 6px;
      border: 0.5px solid #858585;
      margin-right: 15px;
      font-size: 14px;
      &:focus {
        background: none;
        outline: none;
      }
      &::selection {
        outline: none;
        background: none;
      }
    }
    Button {
      width: 9.461538462rem;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`

export const NewsletterSignup: React.FC = () => {
  return (
    <StyledNewsletter>
      <form>
        <label htmlFor="email-address">Sign up to our newsletter</label>
        <input
          id="email-address"
          name="email-address"
          placeholder="Enter your email address"
          type="email"
        />
        <Button variant="primary">Sign up</Button>
      </form>
    </StyledNewsletter>
  )
}
