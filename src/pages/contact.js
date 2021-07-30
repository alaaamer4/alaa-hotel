import React from "react"
import Layout from "../components/Layout"
import { FaHotel, FaPhoneAlt, FaDumbbell } from "react-icons/fa"
const contact = () => {
  return (
    <Layout>
      <section className="contact-form py-3">
        <div className="container">
          <h1 className="l-heading">
            <span className="text-primary">Contact </span> Us
          </h1>
          <form action="#" className="form">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea type="text" id="message" name="message"></textarea>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="contact-info bg-dark">
        <div className="box">
          <FaHotel style={{ fontSize: "3rem" }} />
          <h3>Location</h3>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div className="box">
          <FaPhoneAlt style={{ fontSize: "3rem" }} />
          <h3>Phone Number</h3>
          <p>012-871-699-50</p>
        </div>
        <div className="box">
          <FaDumbbell style={{ fontSize: "3rem" }} />
          <h3>Fitness room</h3>
          <p>alaaeldine1996@gmail.com</p>
        </div>
      </section>
    </Layout>
  )
}

export default contact
