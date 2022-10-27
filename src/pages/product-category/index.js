import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const ProductCategoryPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <section className="section">
        <Helmet title={`Product Category | ${title}`} >
          <meta name="description" content={Array.from(group, item => item.fieldValue).filter(Boolean).join()} />
        </Helmet>
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Product Categories</h1>
              <ul className="taglist">
                {group.map((tag) => (
                  <li key={tag.fieldValue}>
                    <Link to={`/product-category/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

export default ProductCategoryPage

export const tagPageQuery = graphql`
  query ProductCategoryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
