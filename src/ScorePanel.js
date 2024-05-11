function ScorePanel(props) {
    return (
        <div className="card d-flex flex-row justify-content-center align-items-center">
            <div className="user-name card-body p2">{props.user}</div>
            <div className="country card-body p2">{props.country}</div>
            <div className="score card-body p2">{props.score}</div>
        </div>
    );
}

export default ScorePanel;
