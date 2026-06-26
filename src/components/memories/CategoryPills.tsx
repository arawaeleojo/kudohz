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
            -mx-5
            mb-8
            overflow-x-auto
            px-5

            [scrollbar-width:none]
            [-ms-overflow-style:none]

            [&::-webkit-scrollbar]:hidden
            "
        >
            <div
                className="
                flex
                gap-2
                w-max
                pb-1
                "
            >
                {categories.map((category) => {
                    const active =
                        selectedJourney ===
                        category;

                    return (
                        <button
                            key={category}
                            onClick={() =>
                                onSelectJourney(
                                    category
                                )
                            }
                            className={`
                                whitespace-nowrap

                                rounded-full

                                px-5
                                py-2.5

                                text-xs
                                font-semibold

                                transition-all
                                duration-200

                                active:scale-95

                                ${active
                                    ? "bg-[var(--primary)] text-white shadow-sm"
                                    : "border border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--foreground)]"
                                }
                            `}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}