import React from "react";
import Motivationbook from "./MotivationItem";
import { useSelector } from "react-redux";

const Motivation = () => {
  const motivations = useSelector((store) => store.motivation);
  return (
    <main>
      <div className="books-container">
        {motivations.map((motivation) => (
          <Motivationbook key={motivation.id} motivation={motivation} />
        ))}
      </div>
    </main>
  );
};

export default Motivation;
