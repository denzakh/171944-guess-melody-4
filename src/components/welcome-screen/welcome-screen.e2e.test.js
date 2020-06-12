import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter
})

it(`push-start-btn`, ()=>{
  const onStartBtnClick = jest.fn();

  const welcomeScreen = shallow(
    <WelcomeScreen time={1} errorCount={5} handlerStart={onStartBtnClick}  />
  );

  const startBtn = welcomeScreen.find(`.welcome__button`);
  startBtn.simulate(`click`);

  expect(onStartBtnClick).toHaveBeenCalledTimes(1);
});
