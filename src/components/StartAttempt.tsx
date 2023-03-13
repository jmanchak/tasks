import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizProgress, setQuizProgress] = useState<boolean>(false);
    const [numAttempt, setNumAttempts] = useState<number>(4);

    function changeNumAttempts(): void {
        setNumAttempts(
            !quizProgress && numAttempt > 0 ? numAttempt - 1 : numAttempt + 1
        );
    }

    function changeQuizProgress(): void {
        setQuizProgress(!quizProgress);
        changeNumAttempts();
    }

    return (
        <div>
            Start Attempt
            <div>
                <Button
                    onClick={changeQuizProgress}
                    disabled={quizProgress || numAttempt === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setQuizProgress(false)}
                    disabled={!quizProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setNumAttempts(numAttempt + 1)}
                    disabled={quizProgress}
                >
                    Mulligan
                </Button>
            </div>
            <div> Number of Attempts = {numAttempt}</div>
        </div>
    );
}
