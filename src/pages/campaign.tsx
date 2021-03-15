import clsx from "clsx"
import React, { useRef } from "react"
import { useIntersection } from "../hooks/useIntersection"

import styled from "styled-components"

import { ArticleCardGrid } from "../components/ArticleCardGrid"
import { Leaf } from "../components/Leaf"
import { Link } from "../components/Button"
import { Layout } from "../components/Layout"
import { Banner } from "../components/Banner"
import { SEO } from "../components/SEO"
import { VideoPlayer } from "../components/VideoPlayer"

import hero from "../videos/hero.mp4"
import bottle from "../images/bottle.png"
import flower from "../images/flowerPattern.svg"

const SectionOne = styled.section`
  padding-block-start: 40px;
  padding-block-end: 40px;
  .contents {
    text-align: center;
    h2 {
      font-size: var(--font-size-xl, 24px);
      margin-block-start: 10px;
      margin-block-end: 10px;
    }
    p {
      max-width: 85ch;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }
    a {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .bottleSection {
    margin-block-start: 3rem;
    display: flex;
    justify-content: center;
    img {
      max-width: 40%;
    }
  }
`
const SectionTwo = styled.section`
  text-align: center;
  h2 {
    font-size: var(--font-size-xl, 24px);
  }
  p {
    max-width: 85ch;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
`

const SectionThree = styled.section`
  aside {
    border-radius: 0;
    div {
      margin-inline-start: 0;
      margin-inline-end: 0;
      text-align: center;
      h1 {
        width: 100%;
      }
    }
  }
`
const SectionFour = styled.section`
  .sectionTitle {
    text-align: center;
    font-size: var(--font-size-xl, 24px);
  }
  .sectionPara {
    text-align: center;
  }
`

const CampaignPage: React.FC = () => {
  const ref = useRef()
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  var tumble = [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  ]

  var timing = {
    duration: 3000,
    iterations: Infinity,
  }

  const animation = element => element.animate(tumble, timing)

  intersection && intersection.intersectionRatio < 0.2
    ? animation(".animate")
    : animation(".animate")

  return (
    <Layout opaque={intersection}>
      <SEO title="Campaign Landing Page" />
      <VideoPlayer
        style={{
          width: "100%",
          height: "90vh",
          objectFit: "cover",
          marginTop: "calc(var(--header-min-height) * -1.12)",
        }}
        alt="something"
        className="img-bl"
        url={hero}
        paddingRemove={true}
        muted={true}
      />
      <main>
        <SectionOne className={clsx("container")} ref={ref}>
          <div className={clsx("contents")}>
            <span className={clsx("animate")} ref={ref}>
              EAU DE PARFUM
            </span>
            <h2 className={clsx("animate")}>The Signature Fragrance</h2>
            <p className={clsx("animate")}>
              The other day the grass was brown, now it’s green because I ain’t
              give up. Never surrender. In life there will be road blocks.
            </p>
            <Link>Discover More</Link>
            <div className={clsx("bottleSection")}>
              <img src={bottle} alt="bottle" />
            </div>
          </div>
        </SectionOne>
        <SectionTwo className={clsx("container")}>
          <h2>What's behind the scent?</h2>
          <p>
            As it floats around us in an eternity of bliss; and then, my friend,
            when darkness overspreads my eyes, and heaven and earth seem to
            dwell in my soul and absorb its power.
          </p>
        </SectionTwo>
        <SectionThree>
          <Banner
            color="lightgrey"
            layout="overlay"
            showImage={true}
            title="What's behind the woman we see?"
            className="img-bl"
            image={{
              src: `https://picsum.photos/405/712?${
                Math.floor(Math.random() * 10) + 1
              }`,
            }}
          />
        </SectionThree>
        <SectionFour className={clsx("container")}>
          <h2 className={clsx("sectionTitle")}>The making of...</h2>
          <p className={clsx("sectionPara")}>
            As it floats around us in an eternity of bliss; and then, my friend,
            when darkness overspreads my eyes, and heaven and earth seem to
            dwell in my soul and absorb its power.
          </p>
          <ArticleCardGrid />
        </SectionFour>
        <section>
          <Leaf
            colour="lightgrey"
            image={{
              alt: "leaf image",
              src: `https://picsum.photos/405/712?${
                Math.floor(Math.random() * 10) + 1
              }`,
            }}
            layout="image-and-text-inside"
            text="The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. In life there will be road blocks."
            title="What's behind responsible beauty?"
          />
        </section>
      </main>
    </Layout>
  )
}
export default CampaignPage
