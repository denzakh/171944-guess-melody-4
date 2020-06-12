import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

let testData = {
  handlerStart: () => {
    console.log("start");
  },
  time: 5,
  errorCount: 1
}

describe(`welcome-screen`, ()=>{
  it(`sh`, () => {
    const tree = renderer.create(
        <WelcomeScreen  time={testData.time} errorCount={testData.errorCount} handlerStart={testData.handlerStart}  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


