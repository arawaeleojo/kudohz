interface JourneyTabsProps {
    selectedTab: string;
    onChange: (
        tab: string
    ) => void;
}

export default function JourneyTabs({
    selectedTab,
    onChange,
}: JourneyTabsProps) {
    const tabs = [
        {
            label: "Active",
            value: "active",
        },
        {
            label: "Completed",
            value: "completed",
        },
        {
            label: "Archived",
            value: "archived",
        },
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
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() =>
                        onChange(tab.value)
                    }
                    className={
                        selectedTab ===
                            tab.value
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
                    {tab.label}
                </button>
            ))}
        </div>
    );
}