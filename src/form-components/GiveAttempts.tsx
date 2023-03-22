import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>(" ");

    function updateReq(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(event.target.value);
    }
    function updateGain(req: string) {
        if (!isNaN(parseInt(req))) {
            const add = parseInt(req);
            setNumAttempts(numAttempts + add);
        } else {
            setNumAttempts(numAttempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {numAttempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Requested Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={updateReq}
                />
            </Form.Group>
            <Button
                onClick={() => setNumAttempts(numAttempts - 1)}
                disabled={numAttempts < 1}
            >
                Use
            </Button>
            <Button onClick={() => updateGain(requests)}>Gain</Button>
        </div>
    );
}
