import React, { useState, useEffect } from "react";

import { RouteComponentProps, useHistory } from "react-router-dom";
import ProgramSkeleton from "../../components/common/Skeleton/ProgramSkeleton";

import "./programPage.scss";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
interface RouterProps {
  // type for `match.params`
  programId: string;
}

interface singleProgramProps extends RouteComponentProps<RouterProps> {}

const ProgramPage = ({ match }: singleProgramProps) => {
  useFetch("../data.json");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      history.goBack();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const history = useHistory();
  const isloading = useSelector((state: RootState) => state.loading.isLoading);
  const errorMsg = useSelector((state: RootState) => state.error.message);
  const programData = useSelector((state: RootState) => state.program.value);
  const { programId } = match.params;

  const singleProgram = programData?.filter(
    (item) => item.id === +programId
  )[0];

  return (
    <>
      <div className="program-page-wrapper" data-testid={"test-program"}>
        {singleProgram && (
          <>
            <div className="program-page-image-wrapper">
              <img src={singleProgram.image} alt="image lost" />
            </div>
            <div className="program-page-description-wrapper">
              <h1>{singleProgram.title}</h1>
              <p className="program-page-subtitle">
                <span>{singleProgram.rating}</span>
                <span>{singleProgram.year}</span>
                <span>{singleProgram.genre}</span>
                <span>{singleProgram.language}</span>
              </p>
              <p className="program-page-description">
                {singleProgram.description}
              </p>
            </div>
          </>
        )}

        {isloading && <ProgramSkeleton />}
      </div>
      <div>
        {errorMsg && errorMsg !== "" && programData.length === 0 && (
          <h1 style={{ color: "#888" }}>{errorMsg}</h1>
        )}
      </div>
    </>
  );
};

export default ProgramPage;
