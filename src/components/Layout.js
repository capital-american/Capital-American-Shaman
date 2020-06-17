import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  console.log(title, description)
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="CBD Near Me, CBD Store, CBD American Shaman, CBD North Austin, CBD Austin,
        American Shaman Austin, American Shaman Burnet, CBD American Shaman Near Me,
        hemp cbd oil, cbd gummies austin, best cbd gummies, cbd gummies near me, cbd
        flower austin, hemp flower austin, best cbd flower, cbd bud, cbd oil austin,
        cbd gummies for pain, cbd oil for pain, pain relief, Arthritis relief"></meta>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />
        <script src="https://kit.fontawesome.com/729aead759.js" crossorigin="anonymous"></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.ico`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/capital-logo.png`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://capitalamericanshaman.com/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/capital-logo.png`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
