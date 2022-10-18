import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./Gallery.css"

const Gallery = () => {
  return (
    <div className="content">
      <a href="#">
        <StaticImage className="image" src="../images/Daily.webp" alt="Daily" ></StaticImage>
        <p className="img-text">Daily</p>
      </a>
      <a href="#">
        <StaticImage className="image" src="../images/Sport.webp" alt="Sport" ></StaticImage>
        <p className="img-text">Sport</p>
      </a>
      <a href="#">
        <StaticImage className="image" src="../images/Walk.webp" alt="Walk" ></StaticImage>
        <p className="img-text">Walk</p>
      </a>
      <a href="#">
        <StaticImage className="image" src="../images/Travel.webp" alt="Travel" ></StaticImage>
        <p className="img-text">Travel</p>
      </a>
      <a href="#">
        <StaticImage className="image" src="../images/Recover.webp" alt="Recover" ></StaticImage>
        <p className="img-text">Recover</p>
      </a>
      <a href="#">
        <StaticImage className="image" src="../images/Medical.webp" alt="Medical" ></StaticImage>
        <p className="img-text">Medical</p>
      </a>
      <a href="#">
        <StaticImage className="image" src="../images/Ski.webp" alt="Ski" ></StaticImage>
        <p className="img-text">Ski</p>
      </a>
    </div>
  );
}

export default Gallery;
