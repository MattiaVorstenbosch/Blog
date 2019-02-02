import React from 'react';
import Link from 'gatsby-link';
import { StaticQuery, graphql } from 'gatsby';

const BlogPreview = ({ data }) => {
	return (
			<StaticQuery
				query={graphql`
					query BlogIndexQuery {
						allMarkdownRemark {
							edges {
								node {
									frontmatter {
										path
										title
										date
										author
									}
									excerpt
								}
							}
						}
					}
				`}
				render={data => (
					<div>
						<h1>Latest Posts</h1>
						{data.allMarkdownRemark.edges.map(post => (
							<div key={post.node.id}>
								{console.log(post.node.id)}
								<h3>{post.node.frontmatter.title}</h3>
								<small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
								<Link to={post.node.frontmatter.path}>Read more ></Link>
								<hr />
							</div>
						))}
					</div>
				)}
			/>
	);
}

export default BlogPreview;