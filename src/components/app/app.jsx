import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../question-artist/question-artist";
import GenreQuestionScreen from "../question-genre/question-genre";

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      step: -1
    };

    this.onAnswer = this.onAnswer.bind(this);
    this.onStart = this.onStart.bind(this);
  }

  onAnswer() {
    this.setState((prevState) => ({
      step: prevState.step + 1
    }));
  }

  onStart() {
    this.setState({
      step: 0
    });
  }

  getStartScreen() {
    const {questions, settings} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step < 0 || step >= questions.length) {
      return (
        <WelcomeScreen
          time={settings.gameTime}
          errorsCount={settings.errorsCount}
          onStart={this.onStart}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case `genre`:
          return (
            <GenreQuestionScreen questionData={question} onAnswer={this.onAnswer} />
          );
        case `artist`:
          return (
            <ArtistQuestionScreen questionData={question} onAnswer={this.onAnswer} />
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    const artistData = questions.filter((item)=>{
      return item.type === `artist`;
    });
    const genreData = questions.filter((item)=>{
      return item.type === `genre`;
    });

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.getStartScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen questionData={artistData[0]} onAnswer={this.onAnswer} />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen questionData={genreData[0]} onAnswer={this.onAnswer} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

App.propTypes = {
  questions: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
};
