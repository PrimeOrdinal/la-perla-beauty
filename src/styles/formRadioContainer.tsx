import { mediaQueries } from "../theme"

export const formRadioContainer = `
.field {

} 

.fancy-radio {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
}

.fancy-radio-label {
  display: block;
  cursor: pointer;
  position: relative;
  width: 100%;
  font-size: 13px;
  ${mediaQueries.md}{
  font-size: 14px;
  }
  text-transform: uppercase;
  font-weight: normal;

}

label.fancy-radio-label:before {
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

label.fancy-radio-label:after {
  position: absolute;
  top: 50%;
  right: 3px;
  width: 12px;
  height: 12px;
  content: " ";
  opacity: 0;
  background: #363139;
  border-radius: 2px;
  border: 1px solid white;
  transform: translateY(-50%);
  }

input:checked + label.fancy-radio-label:after {
  opacity:1;
}
input:checked + label.fancy-radio-label {
  font-weight: 600;
}





.fancy-product {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

label.product-radio-label {
display: inline-block;
cursor: pointer;
position: relative;
font-size: 13px;
${mediaQueries.md}{
  font-size: 14px;
}
text-transform: unset;
padding-block-end: 0.5rem;
font-weight: normal;
}


label.product-radio-label:after {
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: inline-block;
  width: 100%;
  height: 1px;
  background: #363139;
  content: " ";
  opacity: 0;
}



input:checked + label.product-radio-label:after  {
  opacity:1;
}
input:checked + label.product-radio-label  {
  font-weight: 600;
}
`
