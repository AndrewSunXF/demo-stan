import React from "react";
import BaseSkeleton from "../BaseSkeleton";
import "./programSkeleton.scss";

const ProgramSkeleton = () => {
  return (
    <div className={"program-skeleton-wrapper"}>
      <div className={"program-skeleton-image"}>
        <BaseSkeleton item={"card"} />
      </div>
      <div className={"program-skeleton-text"}>
        <BaseSkeleton item={"title"} />
        <BaseSkeleton item={"subtitle"} />
        <BaseSkeleton item={"description"} />
      </div>
    </div>
  );
};

export default ProgramSkeleton;
