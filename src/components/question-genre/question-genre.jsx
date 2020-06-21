import React from "react";
import PropTypes from 'prop-types';

class QuestionGenre extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userAnswer: [false, false, false, false]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {question} = this.props.questionData;

    this.props.onAnswer(question, this.state.userAnswer);
  }

  render() {
    const {question, answers} = this.props.questionData;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>
          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>
        <section className="game__screen">
          <h2 className="game__title">{question}</h2>
          <form className="game__tracks" onSubmit={this.onSubmit}>
            {answers.map((item, i)=>{
              return <div className="track" key={`${item.genre}-${i}`}>
                <button className="track__button track__button--play" type="button" />
                <div className="track__status">
                  <audio src={item.src} />
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" id={`answer-${i}`} checked={this.state.userAnswer[i]}
                    onChange={(e)=>{
                      const value = e.target.checked;
                      const userAnswer = this.state.userAnswer;

                      this.setState({
                        userAnswer: [...userAnswer.slice(0, i), value, ...userAnswer.slice(i + 1)],
                      });
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>;
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

export default QuestionGenre;

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          genre: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired
        })
    )
  }),
};
