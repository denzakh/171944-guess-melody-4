import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../question-artist/question-artist";
import GenreQuestionScreen from "../question-genre/question-genre";

const App = (props) => {
  const {questions, settings} = props;

  const handlerStart = () => {};

  const artistData = questions.filter((item)=>{return item.type === `artist`});
  const genreData = questions.filter((item)=>{return item.type === `genre`});

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen time={settings.gameTime} errorCount={settings.errorCount} handlerStart={handlerStart} />;
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen questionData={artistData[0]} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen questionData={genreData[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// App.propTypes = {
//   gameTime: PropTypes.number.isRequired,
//   errorCount: PropTypes.number.isRequired,
//   handlerStart: PropTypes.func.isRequired
// };
