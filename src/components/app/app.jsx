import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount, handlerStart} = props;

  return <WelcomeScreen time={gameTime} errorCount={errorCount} handlerStart={handlerStart} />;
};

export default App;

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  handlerStart: PropTypes.func.isRequired
};
