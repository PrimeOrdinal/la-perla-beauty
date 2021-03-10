export const aspectRatio = `
[aspect-ratio] {
    position: relative;
    display: block;
    margin: 0;
    &::before {
      content: "";
      display: block;
      width: 100%;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  [aspect-ratio="3/2"] {
      &::before {
        padding-block-start: calc(100% / (3/2));
        aspect-ratio: 3 / 2;
      }    
  }

  [aspect-ratio="16/9"] {
      &::before {
          padding-block-start: calc(100% / (16/9));
          aspect-ratio: 16 / 9;
      }
  }
  [aspect-ratio="1/1"]{
      &::before {
          padding-block-start: calc(100% /(1/1));
          aspect-ratio: 1 / 1;
      }
  }
  [aspect-ratio="3/4"] {
      &::before {
          padding-block-start: calc(100% / (3/4));
          aspect-ratio: 3 / 4
      }
  }
  [aspect-ratio="615/413"] {
    &::before {
        padding-block-start: calc(100% / (615/413));
        aspect-ratio: 615 / 413;
    }
}
`
