import React from "react"
import styled from "styled-components"

// import {Button} from "../components/Button"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import Logo from "../images/logo.svg"

const StyledArticle = styled.article`
  background: red;
  height: 50vw;
  position: relative;

  div,
  img {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  div {
    display: grid;
    place-content: center;
    z-index: 2;
  }

  img {
    object-fit: cover;
    width: 100%;
    z-index: 1;
  }

  h1 {
    font-size: 1rem;
  }
`

const StyledGrid = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
`

export const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
    <section>
      <h1>Section 1</h1>
      <StyledGrid>
        <StyledArticle>
          <div>
            <h1>Article 1</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 2</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 3</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 4</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
      </StyledGrid>
    </section>
    <section>
      <h1>Section 2</h1>
      <StyledGrid>
        <StyledArticle>
          <div>
            <h1>Article 1</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 2</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 3</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 4</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
      </StyledGrid>
    </section>
    <section>
      <h1>Section 3</h1>
      <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
      <StyledGrid>
        <StyledArticle>
          <div>
            <h1>Article 1</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 2</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 3</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
        <StyledArticle>
          <div>
            <h1>Article 4</h1>
          </div>
          <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
        </StyledArticle>
      </StyledGrid>
    </section>
  </Layout>
)

export default IndexPage
