import { theme } from "../theme"

export const formCheckboxContainer = `
    .form-checkbox-container {
        display: block;
        position: relative;
        padding: 1rem;
        input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        }
        .checkbox {
          position: absolute;
          height: 20px;
          width: 20px;
          border: 1px solid black;
          cursor: pointer;
          border-radius: 1px;
          top: 0;
          right: 0;
        }
    }
    
    .container input:checked ~ .checkbox {
        background-color: ${theme.colors.primary};
        &::after {
        content: '';
        position: absolute;
        left: 7px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid ${theme.colors.primary};
        border-width: 0 1.75px 1.75px 0;
        transform: rotate(45deg);
        }
    }
`
