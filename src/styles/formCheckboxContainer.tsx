import { themeGet } from "@styled-system/theme-get"

import { theme } from "../theme"

export const formCheckboxContainer = `

  .field {

  } 
  
  .fancy-checkbox {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
  }
  
  .fancy-checkbox-label {
    display: block;
    cursor: pointer;
    position: relative;
    width: 100%;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: normal;
  
  }
  
  label.fancy-checkbox-label:before {
      position: absolute;
      display: block;
      width: 18px;
      height: 18px;
      border: 1px solid #363139;
      border-radius: 3px;
      background: #FFF;
      content: " ";
      right: 0px;
      top: 50%;
      transform: translateY(-50%);

  
    }
  
  label.fancy-checkbox-label:after {
    position: absolute;
    top: 3px;
    right: 2px;
    width: 13px;
    height: 7px;
    content: " ";
    transform: rotate(-53deg);
    border-bottom: 1px solid #363139;
    border-left: 1px solid #363139;
    opacity: 0;
    }
  
  input:checked + label.fancy-checkbox-label:after {
    opacity:1;
  }
  input:checked + label.fancy-checkbox-label {
    font-weight: 600;
  }
`
