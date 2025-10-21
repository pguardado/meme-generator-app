import React from "react";

const MemePreview = ({ meme, topText, bottomText }) => (
  <div className="meme-container">
    <img className="meme--image" src={meme.url} alt="Meme Preview" />
    <div className="meme--text top">{topText}</div> {/* Display top text */}
    <div className="meme--text bottom">{bottomText}</div>{" "}
    {/* Display bottom text */}
  </div>
);

export default MemePreview;
