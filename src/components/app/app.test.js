import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

let testData = {
  handlerStart: () => {
    console.log("start");
  },
  gameTime: 5,
  errorCount: 1
}

describe(`app`, ()=>{
  it(`sh`, () => {
    const tree = renderer.create(
        <App gameTime={testData.gameTime} errorCount={testData.errorCount} handlerStart={testData.handlerStart} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
