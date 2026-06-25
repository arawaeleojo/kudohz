"use client";

import { useState } from "react";

import CategoryPills from "./CategoryPills";
import MemoryCard from "./MemoryCard";

const journeys = [
    "Writer",
    "Designer",
    "Athlete",
];

const memories = [
    // Writer
    {
        image: "https://picsum.photos/200?1",
        title: "Finished Chapter One",
        preview:
            "Finally completed the opening chapter after weeks of planning.",
        date: "2026-07-20",
        journey: "Writer",
    },
    {
        image: "https://picsum.photos/200?2",
        title: "Published My First Article",
        preview:
            "Shared my thoughts online for the first time.",
        date: "2026-06-18",
        journey: "Writer",
    },
    {
        image: "https://picsum.photos/200?7",
        title: "Completed Character Profiles",
        preview:
            "Created detailed backstories for the main cast.",
        date: "2026-05-12",
        journey: "Writer",
    },

    // Designer
    {
        image: "https://picsum.photos/200?3",
        title: "Completed Landing Page",
        preview:
            "Wrapped up the homepage redesign for Kudohz.",
        date: "2026-07-16",
        journey: "Designer",
    },
    {
        image: "https://picsum.photos/200?4",
        title: "Created New Logo Concepts",
        preview:
            "Explored three directions for a client's branding.",
        date: "2026-06-10",
        journey: "Designer",
    },
    {
        image: "https://picsum.photos/200?8",
        title: "Designed App Icons",
        preview:
            "Created a new icon set for the mobile app.",
        date: "2026-05-04",
        journey: "Designer",
    },

    // Athlete
    {
        image: "https://picsum.photos/200?5",
        title: "Ran My First 10 km",
        preview:
            "Reached a distance I've never completed before.",
        date: "2026-07-08",
        journey: "Athlete",
    },
    {
        image: "https://picsum.photos/200?6",
        title: "Hit a New Squat PR",
        preview:
            "Added another 10 kg to my best lift.",
        date: "2026-06-05",
        journey: "Athlete",
    },
    {
        image: "https://picsum.photos/200?9",
        title: "Completed My Fastest 5 km",
        preview:
            "Improved my pace after weeks of consistent training.",
        date: "2026-05-01",
        journey: "Athlete",
    },
];

export default function MemoryList() {
    const [
        selectedJourney,
        setSelectedJourney,
    ] = useState("All");

    const filteredMemories =
        selectedJourney === "All"
            ? memories
            : memories.filter(
                (memory) =>
                    memory.journey ===
                    selectedJourney
            );

    const sortedMemories = [
        ...filteredMemories,
    ].sort(
        (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
    );

    const groupedMemories =
        sortedMemories.reduce(
            (groups, memory) => {
                const month =
                    new Date(
                        memory.date
                    ).toLocaleString(
                        "default",
                        {
                            month: "long",
                            year: "numeric",
                        }
                    );

                if (!groups[month]) {
                    groups[month] = [];
                }

                groups[month].push(
                    memory
                );

                return groups;
            },
            {} as Record<
                string,
                typeof sortedMemories
            >
        );

    return (
        <>
            <CategoryPills
                journeys={journeys}
                selectedJourney={
                    selectedJourney
                }
                onSelectJourney={
                    setSelectedJourney
                }
            />

            {sortedMemories.length ===
                0 ? (
                <div
                    className="
                    py-20
                    text-center
                    "
                >
                    <h3
                        className="
                        text-lg
                        font-semibold
                        text-[#111827]
                        "
                    >
                        No memories yet
                    </h3>

                    <p
                        className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#6B7280]
                        "
                    >
                        {selectedJourney ===
                            "All"
                            ? "Start capturing moments that matter."
                            : `No ${selectedJourney} memories yet. Capture your first moment.`}
                    </p>
                </div>
            ) : (
                <div className="space-y-8">
                    {Object.entries(
                        groupedMemories
                    ).map(
                        ([
                            month,
                            memories,
                        ]) => (
                            <div
                                key={month}
                            >
                                <div className="mb-5">
                                    <div
                                        className="
                                        flex
                                        items-end
                                        justify-between
                                        "
                                    >
                                        <h2
                                            className="
                                            text-xl
                                            font-bold
                                            text-[#111827]
                                            "
                                        >
                                            {month}
                                        </h2>

                                        <span
                                            className="
                                            text-sm
                                            text-[#6B7280]
                                            "
                                        >
                                            {
                                                memories.length
                                            }{" "}
                                            {memories.length ===
                                                1
                                                ? "moment"
                                                : "moments"}
                                        </span>
                                    </div>

                                    <div
                                        className="
                                        mt-3
                                        h-px
                                        bg-[#E5DDD2]
                                        "
                                    />
                                </div>

                                <div className="space-y-4">
                                    {memories.map(
                                        (
                                            memory
                                        ) => (
                                            <MemoryCard
                                                key={
                                                    memory.title
                                                }
                                                image={
                                                    memory.image
                                                }
                                                title={
                                                    memory.title
                                                }
                                                preview={
                                                    memory.preview
                                                }
                                                tag={
                                                    memory.journey
                                                }
                                                date={new Date(
                                                    memory.date
                                                ).toLocaleDateString(
                                                    "default",
                                                    {
                                                        day: "numeric",
                                                        month: "short",
                                                    }
                                                )}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </>
    );
}