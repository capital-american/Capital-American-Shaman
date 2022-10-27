import React from 'react'

import Layout from '../../components/Layout'
import LabRoll from '../../components/LabRoll'
import { Helmet } from 'react-helmet'

export default class LabIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | Capital American Shaman - Buy CBD products in Austin">
          <title>Labs</title>
          <meta name="description" content="Facts, latest news, deals about CBD and American Shaman CBD products." />
        </Helmet>

        <section className="section">
          <div className="container">
            <div className="content">
              <LabRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
