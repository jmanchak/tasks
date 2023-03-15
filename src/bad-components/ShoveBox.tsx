import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    //position,
    setPosition
}: {
    //position: number;
    setPosition: () => void;
}): JSX.Element {
    return (
        <div>
            <Button onClick={setPosition}>Shove the Box</Button>
        </div>
    );
}

function MoveableBox({ newPosition }: { newPosition: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: newPosition + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    const shove = () => setPosition(4 + position);

    return (
        <div>
            <h3>Shove Box</h3>
            <div>
                <span>The box is at: {position}</span>
                <ShoveBoxButton setPosition={shove}></ShoveBoxButton>
                <MoveableBox newPosition={position}></MoveableBox>
            </div>
        </div>
    );
}
