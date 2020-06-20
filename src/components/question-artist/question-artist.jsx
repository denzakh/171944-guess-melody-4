import React from "react";
import PropTypes from 'prop-types';

const QuestionArtist = (props) => {

  const {question, answers, song} = props.questionData;
  const onAnswer = props.onAnswer;
  const step = props.step;

  return (
    <section className="game game--artist">
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
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio src={song.src} />
            }
            </div>
          </div>
        </div>
        <form className="game__artist">
          {answers.map((answer, i)=>{
            return <div className="artist" key={answer.artist}>
              <input className="artist__input visually-hidden"
                type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                onChange={(e)=>{
                  e.preventDefault();
                  onAnswer(question, answer);
                }} />
              <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>;
          })}
        </form>
      </section>
    </section>
  );
};

export default QuestionArtist;

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    song: PropTypes.objectOf(PropTypes.string),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired
        })
    )
  })
};
