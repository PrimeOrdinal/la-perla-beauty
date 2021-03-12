import clsx from "clsx"
import React, { useRef } from "react"
import { useOnScreen } from "../hooks/useOnScreen"

import styled from "styled-components"

import { ArticleGrid } from "../components/ArticleGrid"
import { Leaf } from "../components/Leaf"
import { Link } from "../components/Button"
import { Layout } from "../components/Layout"
import { Banner } from "../components/Banner"
import { SEO } from "../components/SEO"
import { VideoPlayer } from "../components/VideoPlayer"

import hero from "../videos/hero.mp4"
import bottle from "../images/bottle.png"
import flower from "../images/flowerPattern.svg"

const PatternSection = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 65%;
    width: 100%;
    background-image: url(${flower});
    background-position: left;
    background-repeat: no-repeat;
    z-index: -1;
    -webkit-transform: rotate(31deg);
    -ms-transform: rotate(31deg);
    transform: rotate(-8deg);
    left: -177px;
    bottom: 0px;
    transform-origin: top left;
    overflow: hidden;
  }
  &:after {
    content: "";
    position: absolute;
    height: 65%;
    width: 100%;
    background-image: url(${flower});
    background-position: right;
    background-repeat: no-repeat;
    z-index: -1;
    -webkit-transform: rotate(31deg);
    -ms-transform: rotate(31deg);
    transform: rotate(13deg);
    right: 0;
    bottom: 0px;
    transform-origin: top right;
    overflow: hidden;
  }
`

const CampaignPage: React.FC = () => {
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, "-300px")

  return (
    <Layout opaque={onScreen}>
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

      <main className={clsx("container")} ref={ref} style={{ height: "100%" }}>
        {onScreen ? (
          <React.Fragment>
            <section>
              <div style={{ textAlign: "center" }}>
                <span>EAU DE PARFUM</span>
                <h1>The Signature Fragrance</h1>
                <p>
                  The other day the grass was brown, now it’s green because I
                  ain’t give up. Never surrender. In life there will be road
                  blocks.
                </p>
                <Link>Discover More</Link>
                <PatternSection
                  className={clsx("bottleSection")}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={bottle}
                    alt="bottle"
                    style={{
                      height: "700px",
                      width: "auto",
                    }}
                  />
                </PatternSection>
              </div>
            </section>
            <section>
              <h2>What's behind the scent?</h2>
              <p>
                As it floats around us in an eternity of bliss; and then, my
                friend, when darkness overspreads my eyes, and heaven and earth
                seem to dwell in my soul and absorb its power.
              </p>
            </section>
            <section>
              <Banner
                color="beige"
                layout="overlay"
                showImage={true}
                title="Overlay prop"
                image={{
                  url: `https://picsum.photos/405/712?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                }}
              />
            </section>
            <section>
              <h2>The making of...</h2>
              <p>
                As it floats around us in an eternity of bliss; and then, my
                friend, when darkness overspreads my eyes, and heaven and earth
                seem to dwell in my soul and absorb its power.
              </p>
              <ArticleGrid />
            </section>
            <section>
              <Leaf
                colour="lilac"
                image={{
                  alt: "leaf image",
                  src: `https://picsum.photos/405/712?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                }}
                layout="image-and-text-outside"
                text="The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. In life there will be road blocks."
                title="What's behind responsible beauty?"
              />
            </section>
          </React.Fragment>
        ) : (
          <h1>Hey K, look I'm not on screeeeen!</h1>
        )}
      </main>
    </Layout>
  )
}
export default CampaignPage
