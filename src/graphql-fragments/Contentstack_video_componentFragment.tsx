import { graphql } from "gatsby"
export const Contentstack_video_componentFragment = graphql`
  fragment Contentstack_video_componentFragment on Contentstack_video_component {
    image {
      alt: description
      title
      src: url
    }
    tag
    text
    text_justification
    title
    video {
        url
    }
  }
`
