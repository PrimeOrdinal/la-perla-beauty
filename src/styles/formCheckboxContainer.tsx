export const formCheckboxContainer = `
  .fancy-checkbox {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
  }
  
  .fancy-checkbox-label {
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: normal;
    position: relative;
    text-transform: capitalize;
    width: 100%;
  }
  
  label.fancy-checkbox-label:before {
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
  
  label.fancy-checkbox-label:after {
    border-bottom: 1px solid #363139;
    border-left: 1px solid #363139;
    content: " ";
    height: 7px;
    opacity: 0;
    position: absolute;
    right: 2px;
    top: 3px;
    transform: rotate(-53deg);
    width: 13px;
  }
  
  input:checked + label.fancy-checkbox-label:after {
    opacity:1;
  }

  input:checked + label.fancy-checkbox-label {
    font-weight: 600;
  }
`
