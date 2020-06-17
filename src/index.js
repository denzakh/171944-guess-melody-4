import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from "./mocks/questions";
import settings from "./mocks/settings";

const init = () => {

  ReactDOM.render(<App
    questions={questions}
    settings={settings} />, document.querySelector(`#root`)
  );
};

init();
