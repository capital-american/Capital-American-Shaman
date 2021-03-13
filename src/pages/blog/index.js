import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Helmet } from 'react-helmet'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | Capital American Shaman - Buy CBD prouducts in Austin,TX">
          <title>Blogs</title>
          <meta name="description" content="Facts, latest news, deals about CBD and American Shaman CBD products." />
        </Helmet>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-home.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #8b2e6b, -0.5rem 0 0 #8b2e6b',
              backgroundColor: '#8b2e6b',
              color: 'white',
              padding: '1rem',
            }}
          >
            Blogs
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
