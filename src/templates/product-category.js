import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductCategoryLinks from '../components/ProductCategoryLinks'
import ProductRoll from '../components/ProductRoll'

class ProductCategoryRoute extends React.Component {
  render() {
    // const posts = this.props.data.allMarkdownRemark.edges
    // const postLinks = posts.map((post) => (
    //   <li key={post.node.fields.slug}>
    //     <Link to={post.node.fields.slug}>
    //       <div className="is-size-5">{post.node.frontmatter.title}</div>
    //     </Link>
    //   </li>
    // ))
    // console.log(this.props);
    const cat = this.props.pageContext.category;
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} Post${totalCount === 1 ? '' : 's'
      } tagged with “${cat}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${cat} | ${title}`} >
            <meta name="description" content={tagHeader} />
          </Helmet>
          <div className="container content">
            <div className="columns">
              <div
                className="column"
              >
                {/* <h1 className="title is-size-5 is-bold-light">{tagHeader}</h1> */}
                {/* <ul className="taglist">{postLinks}</ul> */}
                <div className="product-section">
                  <div className='p-links'>
                    <ProductCategoryLinks />
                  </div>
                  <div className='p-roll'>
                    <ProductRoll category={cat} />
                  </div>
                </div>
                {/* <p>
                  <Link className="standard-link" to="/product_category/">Browse all Product Category</Link>
                </p> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ProductCategoryRoute

export const productCategoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
