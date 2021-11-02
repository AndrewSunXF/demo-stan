import React from "react";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/common/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/program/:programId" component={ProgramPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
