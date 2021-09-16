import { shuffleArray } from "./utils";

// need to create an enum type cos the difficulty can only be these 3
// so that difficulty wont be anything else
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  type: string;
  question: string;
};

// take the original Question type
// add a new property answers
// answers is an array of strings that contains tall the correct and incorrect answers
export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=${difficulty}&type=multiple`;

  // 2 awaits
  // 1. await fetch itself
  // 2. then aawit when converting to json
  const data = await (await fetch(endpoint)).json();
  console.log(data)
  // return an array of QuestionState objects
  return data.results.map((question: Question): QuestionState => {
    // add correct and incorrect answers into an array and shuffle
    return {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    };
  });
};
