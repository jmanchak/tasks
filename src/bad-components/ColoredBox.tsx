import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    changeColor: () => void;
}

function ChangeColor({ changeColor }: ChangeColorProps): JSX.Element {
    /* const updateColor = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    }; */

    return <Button onClick={changeColor}>Next Color</Button>;
}

function ColorPreview({ newColor }: { newColor: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[newColor],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const updateColor = () => setColorIndex((1 + colorIndex) % COLORS.length);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor changeColor={updateColor}></ChangeColor>
                <ColorPreview newColor={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
