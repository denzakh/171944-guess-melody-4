import React from "react";
import renderer from "react-test-renderer";
import QuestionArtist from "./question-artist.jsx";

const question = {
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
};

describe(`QuestionArtist component`, ()=>{
  it(`should render QuestionArtist component markup`, () => {
    const tree = renderer.create(
        <QuestionArtist questionData={question} onAnswer={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
