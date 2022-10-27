import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

class ProductCategoryLinks extends React.Component {
  render() {
    const { data } = this.props
    const { group } = data.allMarkdownRemark

    return (
      <div className='category-links'>
        {group &&
          group.map((category, i) => (
            <Link to={`/product-category/${kebabCase(category.fieldValue)}/`} key={i}>
              {category.fieldValue} ({category.totalCount})
            </Link>    
          ))}
      </div>
    )
  }
}

ProductCategoryLinks.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductCategoryGroupQuery {
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data, count) => <ProductCategoryLinks data={data} count={count} />}
  />
)
