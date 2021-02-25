import React from "react"
import { BlogPostPreview } from "../../components/BlogPostPreview"

const BlogLandingPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <BlogPostPreview headingAbove />
      <BlogPostPreview headingBelow />
      <BlogPostPreview headingAbove />
    </div>
  )
}

export default BlogLandingPage
