import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

let testData = {
  onStart: () => {
  },
  time: 5,
  errorsCount: 1
};

describe(`WelcomeScreen component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <WelcomeScreen time={testData.time} errorsCount={testData.errorsCount} onStart={testData.onStart} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
