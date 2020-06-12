import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

describe(`welcome-screen`, ()=>{
  it(`sh`, () => {
    const tree = renderer.create(
        <WelcomeScreen time={5} errorCount={1} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


