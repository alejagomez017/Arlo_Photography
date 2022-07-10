import "./styles.css";
import React, { useState } from "react";
import arlo from "./assets/arlo1.jpeg";
import bubba from "./assets/arlo2.jpeg";
import barlow from "./assets/arlo3.jpeg";

const images = [arlo, bubba, barlow];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      if (currentImage < length) {
        return currentImage + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1> Arlo </h1>
        <h2>
          A Photography Project <br /> by Alejandra Gomez
        </h2>
      </div>

      <div className="image-container">
        <img alt="" src={images[currentImage]} onClick={handleClick} />
      </div>
      <h1>
        {currentImage + 1}/ {images.length}
      </h1>
    </div>
  );
};

export default App;
