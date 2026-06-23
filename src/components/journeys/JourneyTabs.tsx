export default function JourneyTabs() {
    const tabs = [
        "Active",
        "Completed",
        "Archived",
    ];

    return (
        <div
            className="
            grid
            grid-cols-3
            gap-2
            mb-8
            rounded-full
            bg-[#EFE8DE]
            p-1
            "
        >
            {tabs.map((tab, index) => (
                <button
                    key={tab}
                    className={
                        index === 0
                            ? `
                            py-2.5
                            rounded-full
                            bg-[#0E5A64]
                            text-white
                            text-sm
                            font-medium
                          `
                            : `
                            py-2.5
                            rounded-full
                            text-[#374151]
                            text-sm
                            font-medium
                          `
                    }
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}