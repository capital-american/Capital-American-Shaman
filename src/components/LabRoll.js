import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class LabRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const groups = posts.map(p => p.node.frontmatter.category).reduce((a, b) => a.concat(b)).filter(onlyUnique);
    return (
      <div>
        {groups &&
          groups.map((cat, index) =>
            <div key={`group_${index}`}>
              <div className='title is-size-3'>{cat}</div>
              <div className='product-grid'>
                {posts &&
                  posts.filter(x => x.node.frontmatter.category.indexOf(cat) !== -1).map(({ node: post }) => (
                    <div className="product-roll" key={post.id}>
                      <article>
                        <header>
                          <p className="post-meta">
                            <a
                              target='_blank'
                              rel="nofollow noopener noreferrer"
                              className="title is-size-5"
                              href={`/img/${post.frontmatter.pdf.relativePath}`}
                            >
                              {post.frontmatter.title}
                            </a>
                          </p>
                          {post.frontmatter.image ? (
                            <div className="featured-thumbnail">
                              <a
                                target='_blank'
                                rel="nofollow noopener noreferrer"
                                href={`/img/${post.frontmatter.pdf.relativePath}`}
                              >
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.image,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  }}
                                />
                              </a>
                            </div>
                          ) : null}

                        </header>
                        <p>
                          {post.excerpt}
                        </p>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          )}
        <div className="blogs-all-tags-link-container">
          <a href="/tags/">Browse all tags</a>
        </div>
      </div>
    )
  }
}

LabRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LabRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "lab-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                category
                pdf {
                  publicURL
                  relativePath
                  absolutePath
                }
                image {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LabRoll data={data} count={count} />}
  />
)
