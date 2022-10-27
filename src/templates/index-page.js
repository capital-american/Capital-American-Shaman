import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
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
import GoogleMapReact from 'google-map-react';
import MapMarker from '../components/MapMarker'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  slideSettings,
  whyCBDContent
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
    <div className="slider-container">
      <Slider {...slideSettings}>
        <div>
          <img src={image1} alt="Capital American CBD store front" />
        </div>
        <div>
          <img src={image2} alt="Capital American CBD store products preview" />
        </div>
        <div>
          <img src={image3} alt="Capital American CBD store view" />
        </div>
        <div>
          <img src={image4} alt="Capital American CBD store  front view" />
        </div>
        <div>
          <img src={image5} alt="Capital American CBD store products " />
        </div>
      </Slider>
    </div>
    <section className="section section--gradient">
      {/* <div className="container"> */}
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column ">
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
                <div className="cbd-products-section app-section">
                  <div className="has-text-centered section-headline">
                    <h2 className="is-size-2 bold-900">OUR
                      <span className="color"> CBD PRODUCTS </span></h2>
                  </div>
                  <div className="has-text-centered section">
                    Capital American Shaman CBD products in Austin, TX are not cookie cutter, one-size-fits-all.
                    There are many different ways you can use CBD.
                  </div>

                  <div className="columns ">
                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer" >
                          <img src={product1} alt="Beauty products"></img>
                        </a>
                      </div>
                    </div>
                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">
                          <img src={product2} alt="Pet products"></img>
                        </a>
                      </div>
                    </div>

                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">
                          <img src={product3} alt="Relief products"></img>
                        </a>
                      </div>
                    </div>

                    <div className="column">
                      <div className="product-box">
                        <a className="service" target="_blank"
                          href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">
                          <img src={product4} alt="Wellness products"></img>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="section">We offer a wide range of products,
                    including…</div>

                  <div className="columns">
                    <div className="column">
                      <ul className="product-list">
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Water
                          Soluble
                          Products</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Tinctures</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Edibles</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Lotions,
                          Creams and
                          Topicals</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Soaps
                          and Bath Bombs</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Dog, Cat
                          and Equine
                          Products</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">CBD
                          Skin
                          Care</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">Hemp
                          Flower</a>
                        </li>
                        <li><a target="_blank" href="https://cbdamericanshaman.com/msterling-leach" rel="nofollow noreferrer">Delta 8
                        </a>
                        </li>
                      </ul>
                    </div>
                    <div className="column">
                      <img src={productsImage} alt="Some American Shaman products "></img>
                    </div>
                  </div>
                  <p>
                    What type of CBD oil products are you looking for? Ask about our current options now by
                    calling <a href="tel:512-386-1873">512-386-1873</a> or coming down to the “Austin Shaman” on
                    Burnet Rd.
                  </p>
                </div>

                {/* <!--corportate--> */}
                <div className="columns corporate-banner">
                  <div className="column">
                    <div className="corporate-box">
                      <div className="image-container">
                        <img src={quality} alt="Quality"></img>
                      </div>
                      <div className="corporate-title">Quality</div>
                      <div className="corporate-desc">We select only top-grade hemp plants grown on sustainable small farms right here in the USA</div>

                    </div>
                  </div>
                  <div className="column">
                    <div className="corporate-box">
                      <div className="image-container">
                        <img src={hemp} alt="Safety" ></img>
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
                        <img src={rocket} alt="Mission"></img>
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
                        <img src={love} alt="Charity"></img>
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
                        <img src={idea} alt="Innovation"></img>
                      </div>
                      <div className="corporate-title">Innovation</div>
                      <div className="corporate-desc">
                        Our products are absorbed faster thanks to our nanotechnology that shrinks CBD particle size
                      </div>
                    </div>
                  </div>


                </div>

                {/* WHY CBD */}

                <div className="why-cbd-section app-section" id="why-cbd">
                  <div className="has-text-centered section-headline">
                    <h2 className="is-size-2 bold-900">WHY
                      <span className="color"> CBD  </span></h2>
                  </div>
                  <div className=" why-cbd-boxes-container">
                    <div className="columns is-multiline is-centered">
                      {whyCBDContent && whyCBDContent.map((item, index) => (
                        <div key={item.title} className="column" >
                          <div className="why-cbd-box">
                            <div className="title">
                              {item.title}
                            </div>
                            <div className="text">
                              {item.text}
                            </div>

                          </div>
                        </div>

                      ))}
                    </div>
                  </div >
                </div>

                <div className="contact-us-section app-section" id="contact-us">
                  <div className="has-text-centered section-headline">
                    <h2 className="is-size-2 bold-900">CONTACT
                      <span className="color"> US  </span></h2>
                  </div>

                  <div style={{ height: '600px', width: '100%', marginTop: '100px' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyDflqHM3xI7LEAerp4Fbyat8GNjpsuSX5s' }}
                      defaultCenter={{
                        lat: 30.363920,
                        lng: -97.728370
                      }}
                      defaultZoom={14}
                    >
                      <MapMarker />
                    </GoogleMapReact>
                  </div>
                </div>

                {/* <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                    </Link>
                    </div>
                  </div> */}
                <div className="column is-12">
                  <div className="has-text-centered section-headline ">
                    <h2 className="is-size-2 bold-900">LATEST
                      <span className="color"> BLOGS  </span></h2>
                  </div>
                  <div style={{ margin: '100px 0 50px 0' }}>
                    <BlogRoll />
                  </div>
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* <div className="column is-12">
                  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1v6uMBLY7gH_RK69iA_jPqhIPVeDVZaro" width="640" height="480"></iframe>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div >
)

const whyCBDContent = [{
  title: "PAIN MANAGEMENT",
  text: "Evidence suggests CBD can be used to manage chronic pain, and this is especially promising information due to its lack of intoxicating effects on the body. Many people looking for natural alternative pain relief are starting to evaluate the benefits of cbd as viable option."
},
{
  title: "MAINTAIN BALANCE AND MANAGE PHYSICAL AND EMOTIONAL STRESS",
  text: "CBD interacts with our body through the endocannabinoid system, which is the system that regulates the bodies normal homeostasis. Maintaining balance promotes a healthy immune system which in turns increases wellness."
},
{ title: "MAINTAIN FOCUS AND REGULATE MOOD", text: "CBD directly associates with the brain’s dopamine, the chemical neurotransmitter in charge of memory, focus and mental awareness. By facilitating the correct levels of dopamine released into the body, CBD helps the body perform at a higher level of efficiency." },
{ title: "SLEEP AID", text: "CBD activates serotonin receptors in the brain and this release has soothing, anti-anxiety effects that can help people sleep. We also carry CBNight, A new revolutionary blend of cannabinoids that focuses purely on one thing, better sleep. With CBNight Water Soluble CBN Oil, you will not experience any side effects as you’re using nature’s cannabinoids and terpenes to softly encourage exactly what you’ve been looking for, better sleep." },
{ title: "RELIEF FROM MULTIPLE CONDITIONS", text: "Studies have shown CBD provides anecdotal relief from various common health issues, such as anxiety, depression, acne, fibromyalgia and others. Those suffering from nausea and vomiting have also seen relief, and studies have shown promising results with epilepsy, multiple sclerosis and heart related issues. Research is still ongoing." },
{ title: "PET CARE", text: "Cats and your Dogs have an endocannabinoid system as well, they can also experience many of the same benefits CBD provides to humans. This can include an increase in mobility and an ease of stress and anxiety. CBD can also improve heart and immune systems in some pets." },

]


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
  slideSettings: PropTypes.object,
  whyCBDContent: PropTypes.array
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
        whyCBDContent={whyCBDContent}
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
