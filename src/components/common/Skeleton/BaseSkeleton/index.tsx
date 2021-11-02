import React from "react";
import "./BaseSkeleton.scss";

interface baseSkeletonProps {
  item: string;
}

const BaseSkeleton = ({ item }: baseSkeletonProps) => {
  const classes = `skeleton ${item}`;

  return (
    <div className={"skeleton-wrapper"}>
      <div className={classes}></div>
      <div className={"animation-wrapper"}>
        <div className={"animation-block"}></div>
      </div>
    </div>
  );
};

export default BaseSkeleton;
