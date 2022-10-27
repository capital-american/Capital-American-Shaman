import React from 'react'
import PropTypes from 'prop-types'
import { ArticlePostTemplate } from '../../templates/article-post'

const ArticlePostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <ArticlePostTemplate
      content={widgetFor('body')}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ArticlePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePostPreview
