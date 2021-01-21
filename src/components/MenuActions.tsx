import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import React from "react"

import styled from "styled-components"

import { ListPlain } from "../styles/ListPlain"

export const MenuActionsStyle = styled(ListPlain)`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;

  justify-content: end;

  padding: ${props => props.theme.space[2]}px;
`

export const MenuActions: React.FC = () => (
  <MenuActionsStyle>
    <li>
      <a href="/">
        <FaSearch />
      </a>
    </li>
    <li>
      <a href="/">
        <FaUser />
      </a>
    </li>
    <li>
      <a href="/">
        <FaBriefcase />
      </a>
    </li>
  </MenuActionsStyle>
)
