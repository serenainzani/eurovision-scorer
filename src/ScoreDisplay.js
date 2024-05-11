import ScorePanel from "./ScorePanel";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, onSnapshot } from "firebase/firestore";

function ScoreDisplay() {
    const [allScores, setAllScores] = useState([]);

    useEffect(() => {
        // async function getScores() {
        const scoresRef = collection(db, "scores");
        // const snapshot = await getDocs(scoresRef);

        const observer = onSnapshot(scoresRef, (snapshot) => {
            let scoresData = [];
            const allDocs = snapshot.forEach((document) => {
                scoresData.unshift({ id: document.id, ...document.data() });
            });
            setAllScores(scoresData);
            console.log("getScores", scoresData);
        });
        return () => observer();
        // }

        // Correctly handle the promise returned by getScores
        // getScores().then((scores) => {
        //     setAllScores(scores); // Update state with actual data
        // });
    }, []);

    console.log("allScores", allScores);

    return (
        <>
            {allScores.map((score) => (
                <ScorePanel
                    user={score.user}
                    country={score.country}
                    score={score.score}
                />
            ))}
        </>
    );
}

export default ScoreDisplay;
