import React from "react";
import Storiesbook from "./StoriesItem";
import { useSelector } from "react-redux";

const Stories = () => {
  const storiess = useSelector((store) => store.stories);
  return (
    <main>
      <div className="books-container">
        {storiess.map((stories) => (
          <Storiesbook key={stories.id} stories={stories} />
        ))}
      </div>
    </main>
  );
};

export default Stories;
