import React from "react";
import Poetrybook from "./PoetryItem";
import { useSelector } from "react-redux";

const Poetry = () => {
  const poetrys = useSelector((store) => store.poetry);
  return (
    <main>
      <div className="books-container">
        {poetrys.map((poetry) => (
          <Poetrybook key={poetry.id} poetry={poetry} />
        ))}
      </div>
    </main>
  );
};

export default Poetry;
