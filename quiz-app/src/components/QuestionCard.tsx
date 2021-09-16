import React from "react";
import { AnswerObject } from "../App";

import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

// must declare the type of the props now
type Props = {
  question: string;
  answers: string[]; // array of strings
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

// React.FC types a functional component
// specific props inside angled brackets of React.FC -> telling it that you want to use these props
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question {questionNumber}/{totalQuestions}
    </p>
    <p>{question}</p>
    {answers.map((answer) => (
      <ButtonWrapper
        key={answer}
        correct={userAnswer?.correctAnswer === answer}
        userClicked={userAnswer?.answer === answer}
      >
        <button
          disabled={userAnswer ? true : false}
          value={answer}
          onClick={callback}
        >
          {answer}
        </button>
      </ButtonWrapper>
    ))}
  </Wrapper>
);
export default QuestionCard;
