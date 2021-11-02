import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const errorMsg = useSelector((state: RootState) => state.error.message);
  const programData = useSelector((state: RootState) => state.program.value);

  return (
    <div className="home-page-wrapper">
      <Carousel />
      {errorMsg && errorMsg !== "" && programData.length === 0 && (
        <h1 style={{ color: "#888" }}>{errorMsg}</h1>
      )}
    </div>
  );
};

export default HomePage;
