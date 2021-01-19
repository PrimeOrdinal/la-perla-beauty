import styled from "styled-components"
import { space, layout, color, compose } from "styled-system"

const ButtonBase = styled.button`
  background-color: ${props => props.theme.buttons.primary.bg};
  padding: ${props => props.theme.space[4]};
`

const Button = styled(ButtonBase)(compose(space, layout, color))

export default Button
