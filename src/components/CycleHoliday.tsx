import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🍀" | "👜" | "☀️" | "🎄";

const ALPHABETIZE_HOLIDAYS: Record<Holiday, Holiday> = {
    "👜": "🎄",
    "🎄": "🎃",
    "🎃": "🍀",
    "🍀": "☀️",
    "☀️": "👜"
};

const CHRONOLOGICAL_HOLIDAYS: Record<Holiday, Holiday> = {
    "🍀": "☀️",
    "☀️": "🎃",
    "🎃": "👜",
    "👜": "🎄",
    "🎄": "🍀"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🍀");

    function changeByAlphabet(): void {
        const nextHolidayA = ALPHABETIZE_HOLIDAYS[holiday];
        setHoliday(nextHolidayA);
    }

    function changeByYear(): void {
        const nextHolidayY = CHRONOLOGICAL_HOLIDAYS[holiday];
        setHoliday(nextHolidayY);
    }

    return (
        <div>
            Cycle Holiday
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={changeByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
