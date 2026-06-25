"use client";

import { useState } from "react";

const options = [
    "Newest First",
    "Oldest First",
];

export default function SortFilterSection() {
    const [selected, setSelected] =
        useState("Newest First");

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
                Sort
            </h2>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() =>
                            setSelected(
                                option
                            )
                        }
                        className={`
                            w-full
                            rounded-2xl
                            border
                            px-4
                            py-3
                            text-left
                            text-sm
                            transition-colors
                            ${selected ===
                                option
                                ? "border-[#0E5A64] bg-[#EEF5F0]"
                                : "border-[#E8E1D7] bg-white"
                            }
                        `}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}