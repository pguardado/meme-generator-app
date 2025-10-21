import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import MemeForm from "./components/MemeForm";
import MemePreview from "./components/MemePreview";
import MemeList from "./components/MemeList";

const App = () => {
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [savedMemes, setSavedMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
        setMeme(getRandomMeme(data.data.memes));
      });
  }, []);

  const getRandomMeme = (memes) => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
  };

  const refreshMemeImage = () => {
    setMeme(getRandomMeme(memes));
  };

  const saveMeme = () => {
    const newMeme = {
      id: uuidv4(),
      image: meme.url,
      topText,
      bottomText,
    };

    setSavedMemes([...savedMemes, newMeme]);
    refreshMemeImage();
    setTopText("");
    setBottomText("");
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    if (name === "topText") {
      setTopText(value);
    } else {
      setBottomText(value);
    }
  };

  const deleteMeme = (id) => {
    setSavedMemes(savedMemes.filter((meme) => meme.id !== id));
  };

  const editMeme = (id, newTopText, newBottomText) => {
    const updatedMemes = savedMemes.map((meme) => {
      if (meme.id === id) {
        return {
          ...meme,
          topText: newTopText,
          bottomText: newBottomText,
        };
      }
      return meme;
    });

    setSavedMemes(updatedMemes);
  };

  return (
    <div>
      <Header />
      <MemeForm
        topText={topText}
        bottomText={bottomText}
        onTextChange={handleTextChange}
        onSave={saveMeme}
        onRefreshImage={refreshMemeImage}
      />
      <MemePreview meme={meme} topText={topText} bottomText={bottomText} />
      <MemeList
        savedMemes={savedMemes}
        onDelete={deleteMeme}
        onEdit={editMeme}
      />
    </div>
  );
};

export default App;
