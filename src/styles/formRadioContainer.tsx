import { theme } from "../theme"

export const formRadioContainer = `
    .form-radio-container {
        position: relative;
        input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
        .radio-button {
            position: absolute;
            height: 20px;
            width: 20px;
            border: 0.7px solid ${theme.colors.primary};
            cursor: pointer;
            border-radius: 50%;
            top: 0;
            right: 0;
          }
    }
    .form-radio-container input:checked ~ .radio-button {
        background-color: ${theme.colors.background};
        &::after {
          content: "";
          position: absolute;
          height: 15px;
          width: 15px;
          background: ${theme.colors.primary};
          display: block;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)
        }
    }
`
