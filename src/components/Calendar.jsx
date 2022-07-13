import { useState } from "react";
import MonthSelector from "./MonthSelector";
import MonthView from "./MonthView";
import Stats from "./Stats";

export default function Calendar() {
    let currentDate = new Date();

    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());

    return (
        <>
            <div>
                <div id="stats">
                    <Stats />
                </div>
                <div id="month-selector">
                    <MonthSelector
                        month={month}
                        setMonth={setMonth}
                        year={year}
                        setYear={setYear}
                    />
                </div>
                <div id="month-view">
                    <MonthView month={month} year={year} />
                </div>
            </div>
        </>
    );
}
