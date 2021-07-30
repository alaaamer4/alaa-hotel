import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../components/Background"
import Img from "gatsby-image"
const data = graphql`
  query image {
    image: file(relativePath: { eq: "photo-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    test1: file(relativePath: { eq: "person-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    test2: file(relativePath: { eq: "person-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    background: file(relativePath: { eq: "test-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default function About() {
  const result = useStaticQuery(data)
  return (
    <Layout>
      <div className="container">
        <section className="about-info py-3">
          <div className="info-lift">
            <h1 className="l-heading">
              <span className="text-primary">About</span> Hotel BT
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              maxime distinctio nulla odio quam quis, voluptas reprehenderit
              commodi! Id labore deserunt molestiae, quam ducimus eum explicabo
              quasi natus tempora non.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              maxime distinctio nulla odio quam quis, voluptas reprehenderit
              commodi! Id labore deserunt molestiae, quam ducimus eum explicabo
              quasi natus tempora non.
            </p>
          </div>
          <div class="info-right">
            <Img
              fluid={result.image.childImageSharp.fluid}
              style={{ width: "350px", height: "300px", margin: "1rem 4rem" }}
            />
          </div>
        </section>
      </div>
      <div className="clr  "></div>
      <Background src={result.background.childImageSharp.fluid}>
        <section id="testimonial" className="py-3">
          <div className="container py-3">
            <h2 className="l-heading">What Our Guests Say</h2>
            <div className="testimonial bg-primary ">
              <Img fluid={result.test1.childImageSharp.fluid} className="img" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                numquam quibusdam quis. Assumenda aspernatur explicabo earum
                maxime ipsum veniam qui quia natus, commodi ea praesentium?
                Voluptatum, quam tempore? Ea commodi officia adipisci ex? Et
                ipsa odit, perferendis quo ullam incidunt.
              </p>
            </div>

            <div className="testimonial bg-primary ">
              <Img fluid={result.test2.childImageSharp.fluid} className="img" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                numquam quibusdam quis. Assumenda aspernatur explicabo earum
                maxime ipsum veniam qui quia natus, commodi ea praesentium?
                Voluptatum, quam tempore? Ea commodi officia adipisci ex? Et
                ipsa odit, perferendis quo ullam incidunt.
              </p>
            </div>
          </div>
        </section>
      </Background>
    </Layout>
  )
}
