import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
// import App from "./App.js";

const Question = ({
  number,
  question,
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions
}) => {
  const [ selected, setSelected ] = useState();

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (currQues == number) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="quest">

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >Quit
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > {number} ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
