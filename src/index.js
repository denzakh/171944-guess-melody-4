import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questionsMock from "./mocks/questions";
import settings from "./mocks/settings";

const init = () => {

  ReactDOM.render(<App
    questionsMock={questionsMock}
    gameTime={settings.gameTime}
    errorCount={settings.errorCount} />, document.querySelector(`#root`)
  );
};

init();
