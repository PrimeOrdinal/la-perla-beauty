import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

const CarouselCardStyled = styled.div`
  background-color: #98825a;
  border-radius: ${themeGet("radii.4")}px;
  display: inline-grid;
  grid-auto-flow: row;
  margin: 4rem;

  figure {
    margin: 0;

    img {
      border-radius: ${themeGet("radii.4")}px ${themeGet("radii.4")}px 0 0;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
  div {
    display: grid;
    gap: 16px;
    grid-auto-flow: row;
    padding-block-end: 32px;
    padding-block-start: 32px;
    padding: 20px;
    text-align: center;

    time {
      font-size: 13px;
    }

    h2 {
      margin: 0;
    }

    p {
      margin: 0;
    }
  }
`

export type CarouselCardProps = {
  image: {
    src: string
    alt: string
  }
  date: string
  title: string
  body: string
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  image,
  date,
  title,
  body,
}) => {
  return (
    <CarouselCardStyled>
      <figure>
        <img className="img-bl" src={image.src} alt={image.alt} />
      </figure>
      <div>
        <time>{date}</time>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </CarouselCardStyled>
  )
}