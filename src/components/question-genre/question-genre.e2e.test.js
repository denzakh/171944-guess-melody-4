import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenre from "./question-genre.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    question: `Выберите инди-рок треки`,
    answers: [
      {
        genre: `rock`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_04_-_Upbeat_Party.mp3`
      },
      {
        genre: `blues`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Checkie_Brown/hey/Checkie_Brown_-_09_-_Mary_Roose_CB_36.mp3`
      },
      {
        genre: `jazz`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Unheard_Music_Concepts/The_Lasso_of_Time/Unheard_Music_Concepts_-_24_-_Cosmic_Relevance.mp3`
      },
      {
        genre: `rock`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/West_Cortez_Records/David_Hilowitz/Gradual_Sunrise/David_Hilowitz_-_Gradual_Sunrise.mp3`
      }
    ]
  }
};

describe(`App e2e`, ()=>{
  it(`Submitting a form without selecting a genre, count run`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const questionGenre = shallow(<QuestionGenre
      onAnswer={onAnswer}
      questionData={question}
    />);

    const form = questionGenre.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`Submitting a form without selecting a genre, check arguments`, () => {
    const {question} = mock;
    // Использование фиктивной функции onAnswer
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, false, false, false];

    // оборачиваем компонет в shallow
    const questionGenre = shallow(<QuestionGenre
      onAnswer={onAnswer}
      questionData={question}
    />);

    // находим элемент формы и сумулирум отправку
    const form = questionGenre.find(`form`);
    form.simulate(`submit`, {preventDefault() {}});

    // Теперь мы проверим работу функции onAnswer в компонените
    // для этого мы передадим в компонент тестовыю фунцию onAnswer,
    // а затем проверим, какие аргументы в нее передадутся
    // ожидается, что первым будет вопрос "Выберите инди-рок треки", т.е. mock.question.question,
    // а вторым состояние стейта userAnswer, который мы эмулирум в переменной userAnswer

    // expect возвращает специальный объект, у которого уже можно вызывать различные матчеры для проверки
    // onAnswer.mock.calls[0][0] должен возвратить первый аргумент, преданный функции onAnswer в компоненте,
    // а onAnswer.mock.calls[0][1] - второй аргумент
    // т.е. первая цифра в скобке номер запуска функции (в данном случае первый [0]), а вторая - номер аргумента.

    // первым аргументом должен быть вопрос question.question
    expect(onAnswer.mock.calls[0][0]).toEqual(question.question);

    // вторым аргументом должен быть массив с ответами
    expect(onAnswer.mock.calls[0][1]).toEqual(userAnswer);
  });

  it(`Submitting a form with selecting a genre, check arguments`, () => {
    const {question} = mock;
    const onAnswer = jest.fn((...args) => [...args]);
    // эмуляция стейта с выбранным 2 пунктом
    const userAnswer = [false, true, false, false];

    const questionGenre = shallow(<QuestionGenre
      onAnswer={onAnswer}
      questionData={question}
    />);

    // найдем в форме второй инпут и симулируем его изменение
    const form = questionGenre.find(`form`);

    // теоретически инпут inputTwo = questionGenre.find(`input`).at(1);
    // должен обновляться, если сделать
    // inputTwo.simulate(`change`, {target: {checked: true}});
    // однако у меня это не сработало (и не только у меня)
    // поэтому добавим функцию
    let inputTwo = () => {
      return questionGenre.find(`input`).at(1);
    };
    inputTwo().simulate(`change`, {target: {checked: true}});

    // теперь в стейте должно быть userAnswer: [false, true, false, false].
    // сравним его с тестовыми даными userAnswer
    // симуляция отправки формы вызовет onAnswer с 2мя агрументами,
    form.simulate(`submit`, {preventDefault() {}});
    // второй из которых будет содержать стейт userAnswer
    expect(onAnswer.mock.calls[0][1]).toEqual(expect.arrayContaining(userAnswer));

  });
});
