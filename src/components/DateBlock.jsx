export default function DateBlock({ day }) {
    return (
        <>
            <div
                style={{ width: "14%", height: "120px" }}
                className="border-2 text-right font-bold pr-1 hover:bg-gray-200 m-0.5"
            >
                {day}
            </div>
        </>
    );
}
