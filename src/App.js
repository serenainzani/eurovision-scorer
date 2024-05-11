import "./App.css";
import SubmitScore from "./SubmitScore";
import ScoreDisplay from "./ScoreDisplay";
import Login from "./Login";

function App() {
    return (
        <div className="App">
            {!localStorage.getItem("user") ? (
                <Login />
            ) : (
                <>
                    <h1>Shinzani Eurovision</h1>
                    <SubmitScore />
                    <ScoreDisplay />
                </>
            )}
        </div>
    );
}

export default App;
