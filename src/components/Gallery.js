import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Content = {
  height: "700px",
  display: "inline-flex",
  float: "left",
  width: "auto",
  overflowX: "scroll",
  img: {
    borderRadius: "10px"
  }
};

const Image = {
    minWidth: '400px',
    margin: '10px'
}

const Gallery = () => {
    return (
      <div style={Content}>
        <StaticImage style={Image} src="../images/Daily.webp" alt="Daily" ></StaticImage>
        <StaticImage style={Image} src="../images/Sport.webp" alt="Sport" ></StaticImage>
        <StaticImage style={Image} src="../images/Walk.webp" alt="Walk" ></StaticImage>
        <StaticImage style={Image} src="../images/Travel.webp" alt="Travel" ></StaticImage>
        <StaticImage style={Image} src="../images/Recover.webp" alt="Recover" ></StaticImage>
        <StaticImage style={Image} src="../images/Medical.webp" alt="Medical" ></StaticImage>
        <StaticImage style={Image} src="../images/Ski.webp" alt="Ski" ></StaticImage>
      </div>
    );
  }

export default Gallery;
