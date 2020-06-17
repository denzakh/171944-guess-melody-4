import React from "react";
import PropTypes from 'prop-types';

const QuestionArtist = (props) => {

  const {question, song, answers} = props.questionData;

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
              <audio />
            </div>
          </div>
        </div>
        <form className="game__artist">
          {answers.map((item, i)=>{
            return <div className="artist" key={item.artist}>
              <input className="artist__input visually-hidden" type="radio" name="answer" defaultValue={`artist-${i}`} id={`answer-artist-${i}`} />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={item.picture} alt={item.artist} />
                {item.artist}
              </label>
            </div>
          })}
        </form>
      </section>
    </section>
  );
};

export default QuestionArtist;

QuestionArtist.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequred,
    song: PropTypes.string.isRequred,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        genre: PropTypes.string.isRequred,
        src: PropTypes.string.isRequred
      })
    )
  }),
};
