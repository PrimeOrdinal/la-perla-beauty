export const aspectRatio = `
    [aspect-ratio] {
        display: block;
        margin: 0;
        position: relative;

        &::before {
            content: "";
            display: block;
            width: 100%;
        }

        img {
            bottom: 0;
            height: 100%;
            left: 0;
            object-fit: cover;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
        }
    }

    [aspect-ratio="1/1"]{
        &::before {
            aspect-ratio: 1/1;
            padding-block-start: calc(100% /(1/1));
        }
    }

    [aspect-ratio="3/2"] {
        &::before {
            aspect-ratio: 3/2;
            padding-block-start: calc(100% / (3/2));
        }
    }

    [aspect-ratio="3/4"] {
        &::before {
            aspect-ratio: 3/4
            padding-block-start: calc(100% / (3/4));
        }
    }

    [aspect-ratio="16/9"] {
        &::before {
            aspect-ratio: 16/9;
            padding-block-start: calc(100% / (16/9));
        }
    }
`
