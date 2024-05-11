function ScorePanel(props) {
    return (
        <div class="card d-flex flex-row justify-content-center align-items-center">
            <div class="user-name card-body p2">{props.user}</div>
            <div class="country card-body p2">{props.country}</div>
            <div class="score card-body p2">{props.score}</div>
        </div>
    );
}

export default ScorePanel;
