import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`app`, ()=>{
  it(`sh`, () => {
    const tree = renderer.create(
        <App gameTime={5} errorCount={1} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
