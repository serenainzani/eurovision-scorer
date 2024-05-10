import "./App.css";
import SubmitScore from "./SubmitScore";
import ScoreDisplay from "./ScoreDisplay";

function App() {
    return (
        <div className="App">
            <h1>Shinzani Eurovision</h1>
            <SubmitScore />
            <ScoreDisplay />
        </div>
    );
}

export default App;
