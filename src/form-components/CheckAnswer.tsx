import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="givenShortAnswer">
                <Form.Label>
                    Your answer is:{" "}
                    {expectedAnswer === givenAnswer ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer} />
            </Form.Group>
        </div>
    );
}
