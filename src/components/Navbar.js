import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  const Links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/contact", name: "Contact Us" },
  ]
  return (
    <nav id="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/"> HBT</Link>
        </h1>
        <ul>
          {Links &&
            Links.map(link => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  activeStyle={{
                    color: " #f7c08a",
                    backgroundColor: "#444",
                  }}
                >
                  {link.name}
                </Link>{" "}
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
