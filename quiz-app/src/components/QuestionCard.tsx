// must declare the type of the props now
type Props = {
  question: string;
  answers: string[]; // array of strings
  callback: any;
  userAnswer: any;
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
  <div>
    <p className="number">
      Question {questionNumber}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    {answers.map((answer) => (
      <div key={answer}>
        <button disabled={userAnswer} value={answer} onClick={callback}>
          {/* <span dangerouslySetInnerHTML={{ __html: answer }}></span>
           */}
           {answer}
        </button>
      </div>
    ))}
  </div>
);
export default QuestionCard;
