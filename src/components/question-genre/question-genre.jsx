import React from "react";
import PropTypes from 'prop-types';

class QuestionGenre extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      answerCheckList: [false,false,false,false]
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const {question} = this.props.questionData;

    this.props.onAnswer(question, this.state.answerCheckList);
  }

  onChange(e) {
    let id = +e.target.dataset.id;
    let answerCheckList = this.state.answerCheckList;
    answerCheckList[id] = !answerCheckList[id];

    this.setState({
      answerCheckList: answerCheckList
    })
  }

  render() {
    const {question, answers} = this.props.questionData;
    const onAnswer = this.props.onAnswer;

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
          <form className="game__tracks">
            {answers.map((item, i)=>{
              return <div className="track" key={`${item.genre}-${i}`}>
                <button className="track__button track__button--play" type="button" />
                <div className="track__status">
                  <audio src={item.src} />
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" id={`answer-${i}`} onChange={this.onChange} checked={this.state.answerCheckList[i]} value={`answer-${i}`} data-id={i} />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>;
            })}
            <button className="game__submit button" type="submit" onClick={this.onSubmit} >Ответить</button>
          </form>
        </section>
      </section>
    );
  }


};

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
