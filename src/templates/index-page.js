import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../img/slider/1.jpg';
import image2 from '../img/slider/2.jpg';
import image3 from '../img/slider/3.jpg';
import image4 from '../img/slider/4.jpg';
import image5 from '../img/slider/5.jpg';
import product1 from '../img/products/CBD-Beauty.jpg';
import product2 from '../img/products/CBD-PETS.jpg';
import product3 from '../img/products/CBD-Relief.jpg';
import product4 from '../img/products/CBD-Wellness.jpg';
import productsImage from '../img/capital_american_shaman_of-_midlothian_product_group-600x448.jpg';
import quality from '../img/corporate/quality.png';
import hemp from '../img/corporate/hemp.png';
import idea from '../img/corporate/idea.png';
import love from '../img/corporate/love.png';
import rocket from '../img/corporate/rocket.png';


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  slideSettings
}) => (
    <div>
      {/* <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
      </div> */}

      <Slider {...slideSettings}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image1} />
        </div>
      </Slider>
      <section className="section section--gradient">
        {/* <div className="container"> */}
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content section-headline main-headline">
                    <div className="tile ">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <div className="main-caption-description">{mainpitch.description}</div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h2 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: description }} />

                    </div>
                  </div>
                  <div className="has-text-centered section-headline">
                    <h2 className="is-size-2 bold-900">OUR
                  <span className="color"> CBD PRODUCTS </span></h2> </div>
                  <div className="has-text-centered section">
                    Capital American Shaman CBD products are not cookie cutter, one-size-fits-all.
                    There are many different ways you can use CBD.
                  </div>

                  <div className="columns ">
                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach">
                          <img src={product1}></img>
                        </a>
                      </div>
                    </div>
                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach">
                          <img src={product2}></img>
                        </a>
                      </div>
                    </div>

                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach">
                          <img src={product3}></img>
                        </a>
                      </div>
                    </div>

                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach">
                          <img src={product4}></img>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="section">We offer a wide range of products,
                  including…</div>

                  <div className="columns">
                    <div className="column">
                      <ul className="product-list">
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                        Water
                        Soluble
                                                Products</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                                                Tinctures</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                                                Edibles</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                        Lotions,
                        Creams and
                                                Topicals</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                        Soaps
                                                and Bath Bombs</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                        Dog, Cat
                        and Equine
                                                Products</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">CBD
                        Skin
                                                Care</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach">Hemp
                                                Flower</a>
                        </li>
                      </ul>
                    </div>
                    <div className="column">
                      <img src={productsImage}></img>
                    </div>
                  </div>
                  <p>
                    What type of CBD oil products are you looking for? Ask about our current options now by
                            calling <a href="tel:512-386-1873">512-386-1873</a> or coming down to the “Austin Shaman” on
                            Burnet Rd.
                  </p>
                  {/* <!--corportate--> */}
                  <div className="columns corporate-banner">
                    <div className="column">
                      <div className="corporate-box">
                        <div className="image-container">
                          <img src={quality} ></img>
                        </div>
                        <div className="corporate-title">Quality</div>
                        <div className="corporate-desc">We select only top-grade hemp plants grown on sustainable small farms right here in the USA</div>

                      </div>
                    </div>
                    <div className="column">
                      <div className="corporate-box">
                        <div className="image-container">
                          <img src={hemp} ></img>
                        </div>
                        <div className="corporate-title">Safety</div>
                        <div className="corporate-desc">
                          The US Hemp Authority certifies our industry-leading standards in product safety and quality
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="corporate-box">
                        <div className="image-container">
                          <img src={rocket} ></img>
                        </div>
                        <div className="corporate-title">Mission</div>
                        <div className="corporate-desc">
                          We bring wellness to humans and the Earth by producing the highest quality CBD on the market
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="corporate-box">
                        <div className="image-container">
                          <img src={love} ></img>
                        </div>
                        <div className="corporate-title">Charity</div>
                        <div className="corporate-desc">
                          We partner with veterans, artists and more to help them bring wellness to their communities
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="corporate-box">
                        <div className="image-container">
                          <img src={idea} ></img>
                        </div>
                        <div className="corporate-title">Innovation</div>
                        <div className="corporate-desc">
                          Our products are absorbed faster thanks to our nanotechnology that shrinks CBD particle size
                        </div>
                      </div>
                    </div>


                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                    </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  slideSettings: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        slideSettings={settings}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
