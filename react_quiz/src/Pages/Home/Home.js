import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [ number, setNumber] = useState('5');
  const [category, setCategory] = useState('Sports');
  const [difficulty, setDifficulty] = useState("Easy");

  const history = useHistory();

  const handleSubmit = () => {
    fetchQuestions(number, category, difficulty);
    history.push("/quiz");

  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Setup Quiz</span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Number Of Questions"
            value={number}
            variant="outlined"
            onChange={(e) => setNumber(e.target.value)}
          />
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
           > 
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
