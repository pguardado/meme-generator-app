import React, { useState } from "react";

const Meme = ({ meme, onEdit, onDelete }) => {
  const [isEditing, setEditing] = useState(false); // Track if the meme is being edited
  const [editedTopText, setEditedTopText] = useState(meme.topText); // State for edited top text
  const [editedBottomText, setEditedBottomText] = useState(meme.bottomText); // State for edited bottom text

  const toggleEditing = () => {
    setEditing(!isEditing); // Toggle between display and edit modes
  };

  const handleEdit = () => {
    onEdit(meme.id, editedTopText, editedBottomText); // Save the edited text
    setEditing(false); // Exit editing mode
  };

  return (
    <div className="single-saved-meme">
      {" "}
      {/* Container for the meme */}
      {isEditing ? (
        <div className="edit-meme-container">
          {" "}
          {/* Edit container */}
          <img
            src={meme.image}
            alt="Editing Meme"
            className="edit-meme-image"
          />{" "}
          {/* Display the image */}
          <input
            type="text"
            value={editedTopText}
            onChange={(e) => setEditedTopText(e.target.value)} // Handle top text change
            placeholder="Edit top text"
            className="edit-meme-input"
          />
          <input
            type="text"
            value={editedBottomText}
            onChange={(e) => setEditedBottomText(e.target.value)} // Handle bottom text change
            placeholder="Edit bottom text"
            className="edit-meme-input"
          />
          <button onClick={handleEdit} className="edit-meme-save-button">
            {" "}
            {/* Save button */}
            Save
          </button>
          <button onClick={toggleEditing} className="edit-meme-cancel-button">
            {" "}
            {/* Cancel button */}
            Cancel
          </button>
        </div>
      ) : (
        <>
          <img
            src={meme.image}
            alt="Saved Meme"
            className="meme--image"
            style={{ maxHeight: "250px", maxWidth: "250px" }}
          />{" "}
          {/* Display the image */}
          <div className="saved-meme--text top">{meme.topText}</div>{" "}
          {/* Display top text */}
          <div className="saved-meme--text bottom">{meme.bottomText}</div>{" "}
          {/* Display bottom text */}
          <div className="saved-meme-button-container">
            {" "}
            {/* Button container */}
            <button
              onClick={toggleEditing} // Enter editing mode
              className="saved-meme-button"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(meme.id)} // Delete the meme
              className="saved-meme-button"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Meme;
