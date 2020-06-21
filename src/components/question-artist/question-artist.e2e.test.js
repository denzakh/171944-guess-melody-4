import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionArtist from "./question-artist.jsx";

configure({adapter: new Adapter()});

const mock = {
  artistData: {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    song: {
      artist: `Roxette`,
      src: `https://upload.wikimedia.org/wikipedia/ru/7/70/Roxette%27_The_Look.ogg`
    },
    answers: [
      {
        picture: `https://api.adorable.io/avatars/134/pelagea.png`,
        artist: `Пелагея`
      },
      {
        picture: `https://api.adorable.io/avatars/134/babushka.png`,
        artist: `Краснознаменная дивизия имени моей бабушки`
      },
      {
        picture: `https://api.adorable.io/avatars/134/roxette.png`,
        artist: `Roxette`
      }
    ]
  }
};


const mockEvent = {
  preventDefault() {}
};

describe(`QuestionArtist component`, ()=>{
  it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
    const {artistData} = mock;
    const onAnswer = jest.fn();
    const userAnswer = {
      picture: `https://api.adorable.io/avatars/134/pelagea.png`,
      artist: `Пелагея`
    };

    const screen = shallow(<QuestionArtist
      onAnswer={onAnswer}
      questionData={artistData}
    />);

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, mockEvent);

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toEqual(artistData.question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
