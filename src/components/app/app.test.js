import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

let handlerStart = ()=>{};

describe(`App component`, ()=>{
  it(`should render App component markup`, () => {
    const tree = renderer.create(
        <App gameTime={5} errorCount={1} handlerStart={handlerStart} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
