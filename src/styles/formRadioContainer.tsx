import { mediaQueries, theme } from "../theme"

export const formRadioContainer = `
  .fancy-radio {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
  }

  .fancy-radio-label {
    cursor: pointer;
    display: block;
    font-size: 13px;
    font-weight: normal;
    position: relative;
    text-transform: uppercase;
    width: 100%;

    ${mediaQueries.md}{
      font-size: 14px;
    }
  }

  label.fancy-radio-label:before {
    background: #FFF;
    border-radius: 3px;
    border: 1px solid #363139;
    content: " ";
    display: block;
    height: 18px;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    }

  label.fancy-radio-label:after {
    background: #363139;
    border-radius: 3px;
    border: 1px solid white;
    content: " ";
    height: 12px;
    opacity: 0;
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
  }

  input:checked + label.fancy-radio-label:after {
    opacity:1;
  }

  input:checked + label.fancy-radio-label {
    font-weight: 600;
  }

  .fancy-product {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
  }

  label.product-radio-label {
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
    padding-block-end: 0.5rem;
    position: relative;
    text-transform: unset;

    ${mediaQueries.md}{
      font-size: 14px;
    }
  }

  label.product-radio-label:after {
    background: #363139;
    bottom: 0px;
    content: " ";
    display: inline-block;
    height: 1px;
    opacity: 0;
    position: absolute;
    right: 0px;
    width: 100%;
  }

  input:checked + label.product-radio-label:after  {
    opacity:1;
  }

  input:checked + label.product-radio-label  {
    font-weight: 600;
  }
`
