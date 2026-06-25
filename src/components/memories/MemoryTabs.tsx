"use client";

interface MemoryTabsProps {
    selectedTab: string;
    onTabChange: (tab: string) => void;
}

const journeys = [
    {
        id: 1,
        name: "Writer",
    },
    {
        id: 2,
        name: "Designer",
    },
    {
        id: 3,
        name: "Athlete",
    },
];

export default function MemoryTabs({
    selectedTab,
    onTabChange,
}: MemoryTabsProps) {
    const tabs = [
        "All",
        ...journeys.map(
            (journey) => journey.name
        ),
    ];

    return (
        <div
            className="
            flex
            gap-2
            overflow-x-auto
            scrollbar-hide
            mb-6
            "
        >
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() =>
                        onTabChange(tab)
                    }
                    className={`
                        whitespace-nowrap
                        rounded-full
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        transition-colors
                        ${selectedTab === tab
                            ? "bg-[#0E5A64] text-white"
                            : "bg-[#EFE8DE] text-[#374151]"
                        }
                    `}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}