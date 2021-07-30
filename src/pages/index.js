import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../components/Background"
import Img from "gatsby-image"
import { FaHotel, FaUtensils, FaDumbbell } from "react-icons/fa"
const data = graphql`
  query background {
    background: file(relativePath: { eq: "showcase.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image: file(relativePath: { eq: "photo-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default function Home() {
  const result = useStaticQuery(data)
  return (
    <Layout>
      <Background src={result.background.childImageSharp.fluid}>
        <div className="container">
          <div className="showcase-content">
            <h1>
              <span className="text-primary"> Enjoy </span> Your Stay
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis, reiciendis officiis! Fugiat molestias sunt asperiores!
            </p>
            <Link to="/about" className="btn">
              {" "}
              About Our Hotel{" "}
            </Link>
          </div>
        </div>
      </Background>
      <section className="home-info bg-dark">
        <div className="info-img">
          <Img
            fluid={result.image.childImageSharp.fluid}
            style={{ height: "400px" }}
          />
        </div>
        <div className="info-content">
          <h2>
            <span className="text-primary">The History</span> of our hotel
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem
            modi inventore, exercitationem veniam at ea, delectus deleniti
            iusto, dolor et? Incidunt, in! Repudiandae itaque tempore vel amet
            est aut.
          </p>
          <Link to="/about" className="btn btn-light">
            Read More
          </Link>
        </div>
      </section>
      <section className="feature bg-light">
        <div className="box bg-light">
          <FaHotel style={{ fontSize: "3rem" }} />

          <h3>Great Location</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laudantium magni perferendis incidunt laboriosam officia veritatis
            ab voluptas, consectetur nam, quia corporis rerum! Quisquam,
            numquam? Maiores unde illo accusantium excepturi?
          </p>
        </div>
        <div className="box bg-primary">
          <FaUtensils style={{ fontSize: "3rem" }} />
          <h3>Free meals</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laudantium magni perferendis incidunt laboriosam officia veritatis
            ab voluptas, consectetur nam, quia corporis rerum! Quisquam,
            numquam? Maiores unde illo accusantium excepturi?
          </p>
        </div>
        <div className="box bg-light">
          <FaDumbbell style={{ fontSize: "3rem" }} />
          <h3>Fitness room</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laudantium magni perferendis incidunt laboriosam officia veritatis
            ab voluptas, consectetur nam, quia corporis rerum! Quisquam,
            numquam? Maiores unde illo accusantium excepturi?
          </p>
        </div>
      </section>
      <div className="clr"></div>
    </Layout>
  )
}
