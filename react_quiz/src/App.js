import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [ questions, setQuestions ] = useState();
  const [ number, setNumber ] = useState();
  const [ score, setScore ] = useState(0);

  const fetchQuestions = async (number="10", category = "23", difficulty = "easy") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?${number && `&amount=${number}`}${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home
            
              setNumber={setNumber}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              number={number} 
              questions={questions}
              score={score}
              setScore={setScore}
            />
          </Route>
          <Route path="/result" exact>
            <Result  score={score} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
