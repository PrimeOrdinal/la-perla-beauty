import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme"
import { Button } from "./Button"

const StyledNewsletter = styled.div`
  ${mediaQueries.md} {
    justify-content: end;
  }
  label {
    display: none;
    ${mediaQueries.md} {
      display: block;
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
        <Button variant="secondary" py={4} px={9}>
          Sign up
        </Button>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
            minima blanditiis reprehenderit mollitia doloribus, voluptates omnis
            ex dolorem veritatis!
          </p>
        </div>
      </form>
    </StyledNewsletter>
  )
}
