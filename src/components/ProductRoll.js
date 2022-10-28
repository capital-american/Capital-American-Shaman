import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import grid from '../img/products/grid.svg';
import list from '../img/products/list.svg';

class ProductRoll extends React.Component {

  constructor() {
    super()
    this.state = {
      listType: 'product-grid' //list
    }
  }
  render() {
    const { data, category } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline" style={{ marginTop: 0 }}>
        <div className='product-container'>
          <div className='flex'>
            <div className={'imageheight ' + (this.state.listType === 'product-grid' ? 'bdr' : '')}>
              <button className='product-list-button' onClick={() => this.setState({ listType: 'product-grid' })} >
                <img src={grid} alt="Show Grid" />
              </button>
            </div>
            <div className={'imageheight ' + (this.state.listType === 'product-list' ? 'bdr' : '')}>
              <button className='product-list-button' onClick={() => this.setState({ listType: 'product-list' })} >
                <img src={list} alt="Show List" />
              </button>
            </div>
            {/* <div className='float'>
        SHOWING 13–24 OF 57 RESULTS
        </div>
          <form class="ordering" method="get">
          <select name="orderby" class="orderby" aria-label="Shop order">
            <option value="menu_order">Default sorting</option>
            <option value="popularity" selected="selected">Sort by popularity</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
          <input type="hidden" name="paged" value="1"></input>
        </form> */}
          </div>
          <div className={this.state.listType}>
            {posts &&
              posts.filter(p => !category || p.node.frontmatter.category.indexOf(category) !== -1).map(({ node: post }) => (
                <div className="is-parent column product-roll" key={post.id}>
                  <Link to={post.fields.slug}>
                    <article
                      className={`tile is-child`}
                    >
                      <div className='flex-p-data'>
                        {post.frontmatter.image ? (
                          <div className="featured-thumbnail product-image">
                            <div
                              className="title is-size-5"
                            >
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.image,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                          </div>
                        ) : null}
                        <div>
                          <div className='name'>{post.frontmatter.category}</div>
                          <div className='align'>
                            <div
                              className="title is-size-5"
                            >
                              {post.frontmatter.title}
                            </div>
                          </div>
                          <div className='number-flex'>
                            <div className='number' >${Number(post.frontmatter.amount).toFixed(2)}</div>
                          </div>
                          <div className='excerpt'>{post.excerpt}</div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        {/* <div className='alignm'>
          <div className="nav-links">
            <a class="prev page-numbers" href="#">Previous</a>
            <a className="page-numbers current">1</a>
            <a className="page-numbers" href="#">2</a>
            <a className="page-numbers" href="#">3</a>
            <a className="page-numbers" href="#">4</a>
            <a className="page-numbers" href="#">5</a>
            <a className="next page-numbers" href="#">Next</a>
          </div>
        </div> */}
      </div >
    )
  }
}

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ category }) => (
  <StaticQuery
    query={graphql`
      query ProductRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                amount
                category
                image {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
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
    render={(data, count) => <ProductRoll data={data} count={count} category={category} />}
  />
)
