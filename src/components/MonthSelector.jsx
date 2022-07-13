export default function MonthSelector({ month, setMonth, year, setYear }) {
    let years = [];
    for (let i = 2010; i < 2040; i++) {
        years.push(i);
    }
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <>
            <div>
                <select
                    value={months[month]}
                    onChange={(e) =>
                        setMonth(months.indexOf(e.currentTarget.value))
                    }
                >
                    {months.map((month) => {
                        return <option value={month}>{month}</option>;
                    })}
                </select>
                <select
                    value={year}
                    onChange={(e) => setYear(e.currentTarget.value)}
                >
                    {years.map((year) => {
                        return <option value={year}>{year}</option>;
                    })}
                </select>
            </div>
        </>
    );
}
