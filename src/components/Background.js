import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ src, children }) => {
  return (
    <BackgroundImage fluid={src} className="showcase">
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
