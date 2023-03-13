import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeftDie] = useState<number>(3);
    const [right, setRightDie] = useState<number>(4);

    function rollLeftDie(): void {
        setLeftDie(d6);
    }

    function rollRightDie(): void {
        setRightDie(d6);
    }

    return (
        <div>
            Two Dice
            <div>
                Left Die: <span data-testid="left-die">{left}</span>.
            </div>
            <div>
                Right Die: <span data-testid="right-die">{right}</span>.
            </div>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <div>
                {left === 1 && right === 1 ? (
                    <span>Lose</span>
                ) : left === right ? (
                    <span>Win</span>
                ) : (
                    <span>Roll again</span>
                )}
            </div>
        </div>
    );
}
