import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import "./card.scss";

interface CarouselCard {
  id: number;
  image: string;
  active: boolean | undefined;
  setLink: Dispatch<SetStateAction<string>>;
}

const Card = ({ id, image, active, setLink }: CarouselCard) => {
  useEffect(() => {
    active && setLink(String(id));
  }, [active]);

  return (
    <div
      className={`card-container ${active ? "card-active" : "card-inactive"}`}
    >
      <Link to={`/program/${id}`}>
        <img src={image} alt="image lost" />
      </Link>
    </div>
  );
};

export default Card;
