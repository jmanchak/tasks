import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("blue");
    const colorsList = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black",
        "brown"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colorsList.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        onChange={updateColor}
                        label={color}
                        value={color}
                        checked={false}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        width: "50px"
                    }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
