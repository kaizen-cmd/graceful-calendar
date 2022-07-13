import DateBlock from "./DateBlock";
import DayBlock from "./DayBlock";

export default function MonthView({ month, year }) {
    let noOfDays = new Date(year, month + 1, 0).getDate();
    let days = [];
    for (let i = 1; i <= noOfDays; i++) {
        days.push(i);
    }
    return (
        <>
            <div className="w-full flex">
                {["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => {
                        return <DayBlock text={day} />;
                    }
                )}
            </div>
            <div className="w-full flex flex-wrap">
                {days.map((day) => {
                    return <DateBlock day={day} />;
                })}
            </div>
        </>
    );
}
