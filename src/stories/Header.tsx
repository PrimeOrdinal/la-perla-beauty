import React from "react"
import styled from "styled-components"

export interface HeaderProps {}

const StyledHeader = styled.header`
  background-color: #8a8ae4;
`

export const Header: React.FC<HeaderProps> = () => (
  <StyledHeader>
    <div className="wrapper">
      <p>HELLO</p>
      <div>
        <h1>Acme</h1>
      </div>
      <div>
        <h2>TO</h2>
      </div>
    </div>
  </StyledHeader>
)
