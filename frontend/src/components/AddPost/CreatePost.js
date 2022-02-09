import React, { useState } from "react";

const CreatePost = ({ createPost }) => {
  let [textOfThePost, setTextOfThePost] = useState("");

  const onChange = (e) => setTextOfThePost(e.target.value);

  const submitData = () => {
    if (textOfThePost !== "" && textOfThePost !== null) {
      createPost(textOfThePost);
    } else {
      alert("Text is empty!");
    }
    setTextOfThePost("");
  };
  return (
    <div className="tips-wrapper">
      <p className="font__p p__size font__bold app_color_font">Napisite post</p>
      <br />

      <form>
        <textarea
          type="text"
          value={textOfThePost}
          onChange={(e) => onChange(e)}
        />
        <div
          onClick={() => submitData()}
          className="app_color_background add-post-button font__p font__bold"
        >
          Dodaj post
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
