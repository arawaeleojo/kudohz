"use client";

import { useState } from "react";

const journeys = [
    "All",
    "Writer",
    "Designer",
    "Athlete",
];

export default function JourneyFilterSection() {
    const [selected, setSelected] =
        useState("All");

    return (
        <div>
            <h2
                className="
                text-base
                font-semibold
                text-[#111827]
                mb-4
                "
            >
                Journey
            </h2>

            <div className="flex flex-wrap gap-3">
                {journeys.map((journey) => (
                    <button
                        key={journey}
                        onClick={() =>
                            setSelected(
                                journey
                            )
                        }
                        className={`
                            rounded-full
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            transition-colors
                            ${
                                selected ===
                                journey
                                    ? "bg-[#0E5A64] text-white"
                                    : "bg-[#EFE8DE] border border-[#E2DBCF] text-[#374151]"
                            }
                        `}
                    >
                        {journey}
                    </button>
                ))}
            </div>
        </div>
    );
}