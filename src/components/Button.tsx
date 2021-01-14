// import { useTheme } from "@emotion/react"
// import styled from "@emotion/styled"
import React, { ReactElement } from "react"
import { Button as RButton } from "@rebass/preset"

// const StyledButton = styled.div`
//   background-color: #efeee9;
//   display: grid;
//   text-align: center;
//   grid-auto-flow: column;
// `

export const Button = ({}: { someProp?: string }): ReactElement => {
  // const theme = useTheme()

  return (
    <RButton variant="primary" mr={2}>
      Button
    </RButton>
  )
}

export default Button
