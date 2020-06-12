import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "welcome-screen";


it('отображается корректно', () => {
  const tree = renderer.create(
    <WelcomeScreen time={5} errorCount={1} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
