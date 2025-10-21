import React from "react";
import Meme from "./Meme"; // Import the Meme component

const MemeList = ({ savedMemes, onDelete, onEdit }) => {
  return (
    <div>
      {savedMemes.map((meme) => (
        <Meme
          key={meme.id}
          meme={meme}
          onDelete={onDelete} // Ensure correct `onDelete`
          onEdit={onEdit} // Ensure correct `onEdit`
        />
      ))}
    </div>
  );
};

export default MemeList;
