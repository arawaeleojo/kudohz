"use client";

interface CategoryPillsProps {
    journeys: string[];
    selectedJourney: string;
    onSelectJourney: (
        journey: string
    ) => void;
}

export default function CategoryPills({
    journeys,
    selectedJourney,
    onSelectJourney,
}: CategoryPillsProps) {
    const categories = [
        "All",
        ...journeys,
    ];

    return (
        <div
            className="
            flex
            gap-2
            overflow-x-auto
            scrollbar-hide
            mb-8
            "
        >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() =>
                        onSelectJourney(
                            category
                        )
                    }
                    className={`
                        whitespace-nowrap
                        px-5
                        py-2.5
                        rounded-full
                        text-xs
                        font-medium
                        transition-colors
                        ${selectedJourney ===
                            category
                            ? "bg-[#0E5A64] text-white"
                            : "border border-[#E2DBCF] bg-[#EFE8DE] text-[#374151]"
                        }
                    `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}