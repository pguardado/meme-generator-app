import React from "react";

const MemeForm = ({
  topText,
  bottomText,
  onTextChange,
  onSave,
  onRefreshImage,
}) => (
  <div className="form">
    <input
      type="text"
      name="topText"
      placeholder="Top Text"
      value={topText}
      onChange={onTextChange} // Handle text changes
      className="form--input"
    />
    <input
      type="text"
      name="bottomText"
      placeholder="Bottom Text"
      value={bottomText}
      onChange={onTextChange} // Handle text changes
      className="form--input"
    />
    <button onClick={onSave} className="form--button">
      Save Meme
    </button>
    <button onClick={onRefreshImage} className="form--button">
      Refresh Meme Image
    </button>
  </div>
);

export default MemeForm;
