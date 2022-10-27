import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const LabPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
  pdf,
  category,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">

          <div className="product-section">
            <div className=''>
              <div className="column product-info-section">
                <div className='p-image'>
                  {image ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: image,
                        alt: `featured image thumbnail for post ${title}`,
                      }}
                    />) : null}
                </div>
                <div className='p-details'>

                  <h1 className="title has-text-weight-bold is-bold-light">
                    {title}
                  </h1>
                  <div>{pdf}</div>
                  {category ? (
                    <div>{category.join(' ')}</div>
                  ) : null}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

LabPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  amount: PropTypes.number,
}

const LabPost = ({ data, location }) => {
  const { markdownRemark: post } = data
  const imageUrl = post.frontmatter.image ? post.frontmatter.image.childImageSharp.fluid.src : "";

  return (
    <Layout>
      <LabPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Capital American Shaman CBD - Buy CBD products in Austin">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            {imageUrl !== "" &&
              <meta
                property="og:image"
                content={`https://capitalamericanshaman.com${imageUrl}`}
              />
            }
            {location !== 'undefined' &&
              <meta
                property="og:url"
                content={`${typeof location !== 'undefined' ? location.href : ''}`}
              />
            }
            <meta
              property="og:title"
              content={`${post.frontmatter.title} | Capital American Shaman CBD - Buy CBD products in Austin`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        file={post.frontmatter.file}
        image={post.frontmatter.image}
        category={post.frontmatter.category}
      />
    </Layout>
  )
}

LabPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default LabPost

export const pageQuery = graphql`
  query LabPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        pdf {
          publicURL
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
