import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import ProductCategoryLinks from '../components/ProductCategoryLinks'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  amount,
  image,
  category,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">

          <div className="product-section">
            {/* <div className='p-links'>
              <ProductCategoryLinks />
            </div> */}
            <div className='p-roll'>
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
                  <h3 className="is-size-5">
                    Price: ${Number(amount).toFixed(2)}
                  </h3>

                  <PostContent content={content} />
                  {category ? (
                    <div style={{ marginTop: `1rem`, height: `10vh` }}>
                      <h4>Categories</h4>
                      <ul className="taglist" >
                        {category.map((cat) => (
                          <li key={cat + `cat`}>
                            <Link to={`/product-category/${kebabCase(cat)}/`}>{cat}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {tags && tags.length ? (
                    <div style={{ marginTop: `0rem` }}>
                      <h4>Tags</h4>
                      <ul className="taglist">
                        {tags.map((tag) => (
                          <li key={tag + `tag`}>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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

ProductPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  amount: PropTypes.number,
}

const ProductPost = ({ data, location }) => {
  const { markdownRemark: post } = data
  const imageUrl = post.frontmatter.image ? post.frontmatter.image.childImageSharp.fluid.src : "";

  return (
    <Layout>
      <ProductPostTemplate
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
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        amount={post.frontmatter.amount}
        image={post.frontmatter.image}
        category={post.frontmatter.category}
      />
    </Layout>
  )
}

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPost

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        amount
        category
        tags,
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
