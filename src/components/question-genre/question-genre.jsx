import React from "react";
import PropTypes from 'prop-types';

const QuestionGenre = (props) => {

  const {genre, question, answers} = props.questionData;

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
          return <div className="track"  key={item.src}>
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio src={item.src} />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" defaultValue={`answer-${i}`} id={`answer-${i}`} />
              <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
            </div>
          </div>
        })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

export default QuestionGenre;

QuestionGenre.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequred,
    genre: PropTypes.string.isRequred,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        genre: PropTypes.string.isRequred,
        src: PropTypes.string.isRequred
      })
    )
  }),
};
