"use client";

import { motion } from "framer-motion";

interface JourneyTabsProps {
    selectedTab: string;
    onChange: (
        tab: string
    ) => void;
}

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

export default function JourneyTabs({
    selectedTab,
    onChange,
}: JourneyTabsProps) {
    return (
        <div
            className="
            mb-8

            grid
            grid-cols-3

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--surface-secondary)]

            p-1
            "
        >
            {tabs.map((tab) => {
                const active =
                    selectedTab === tab.value;

                return (
                    <button
                        key={tab.value}
                        onClick={() =>
                            onChange(
                                tab.value
                            )
                        }
                        className="
                        relative

                        rounded-full

                        py-2.5

                        text-sm
                        font-medium

                        transition-colors

                        duration-200

                        active:scale-95
                        "
                    >
                        {active && (
                            <motion.div
                                layoutId="journey-tab"

                                transition={{
                                    type: "spring",
                                    stiffness: 450,
                                    damping: 35,
                                }}

                                className="
                                absolute
                                inset-0

                                rounded-full

                                bg-[var(--primary)]

                                shadow-sm
                                "
                            />
                        )}

                        <span
                            className={`
                                relative
                                z-10

                                transition-colors

                                ${active
                                    ? "text-white"
                                    : "text-[var(--foreground-secondary)]"
                                }
                            `}
                        >
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}