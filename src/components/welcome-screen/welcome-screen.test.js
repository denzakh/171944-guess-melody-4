import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

let testData = {
  handlerStart: () => {
  },
  time: 5,
  errorCount: 1
}

describe(`WelcomeScreen component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <WelcomeScreen  time={testData.time} errorCount={testData.errorCount} handlerStart={testData.handlerStart}  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


