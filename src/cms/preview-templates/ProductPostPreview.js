import React from 'react'
import PropTypes from 'prop-types'
import { ProductPostTemplate } from '../../templates/product-post'

const ProductPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <ProductPostTemplate
      content={widgetFor('body')}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      price={entry.getIn(['data', 'amount'])}
    />
  )
}

ProductPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPostPreview
