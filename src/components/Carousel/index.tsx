import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./carousel.scss";
import CardSkeleton from "../common/Skeleton/CardSkeleton";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [link, setLink] = useState("");

  useFetch("./data.json");

  const handleArrowKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setCurrent((preCurrent) => preCurrent + 1);
    } else if (e.key === "ArrowLeft") {
      setCurrent((preCurrent) => preCurrent - 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleArrowKeyDown);
    return () => {
      document.removeEventListener("keydown", handleArrowKeyDown);
    };
  }, []);

  const handleEnterKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      history.push(`/program/${link}`);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKeyDown);
    return () => {
      document.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [link]);

  const programData = useSelector((state: RootState) => state.program.value);
  const isloading = useSelector((state: RootState) => state.loading.isLoading);

  const history = useHistory();

  const programDataLength = programData.length;

  if (programDataLength !== 0) {
    if (current == programDataLength) {
      setCurrent(0);
    } else if (current == -1) {
      setCurrent(programDataLength - 1);
    }
  }

  const groups = Math.ceil(programDataLength / cardsPerPage);

  const calculateDisplayedData = (current: number) => {
    for (let i = 0; i < groups; i++) {
      if (current >= i * cardsPerPage && current < (i + 1) * cardsPerPage) {
        return programData?.slice(i * cardsPerPage, (i + 1) * cardsPerPage);
      }
    }
  };

  let displayedData = calculateDisplayedData(current);

  const isActive = (current: number, index: number) => {
    for (let i = 0; i < groups; i++) {
      if (current >= i * cardsPerPage && current < (i + 1) * cardsPerPage) {
        return index === current - i * cardsPerPage;
      }
    }
  };

  return (
    <div className="carousel-container" data-testid="test-carousel">
      {displayedData &&
        displayedData.map((card, index) => (
          <Card
            id={card.id}
            image={card.image}
            key={index}
            active={isActive(current, index)}
            setLink={setLink}
          />
        ))}
      {isloading &&
        [1, 2, 3, 4, 5, 6].map((x, index) => <CardSkeleton key={index} />)}
    </div>
  );
};

export default Carousel;
