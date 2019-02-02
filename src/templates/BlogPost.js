import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default function BlogPostTemplate({data}) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/"></Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </div>
  )
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        date
        author
      }
    }
	}
`
