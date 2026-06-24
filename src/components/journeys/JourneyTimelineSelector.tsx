"use client";

import { useState } from "react";
import { TreePine } from "lucide-react";

const timelines = [
    "30 Days",
    "90 Days",
    "180 Days",
    "270 Days",
    "365 Days",
];

export default function JourneyTimelineSelector() {
    const [selected, setSelected] =
        useState("90 Days");

    return (
        <div>
            <label
                className="
                block
                mb-3
                text-sm
                font-medium
                text-[#111827]
                "
            >
                Timeline
            </label>

            <div
                className="
                grid
                grid-cols-2
                gap-3
                "
            >
                {timelines.map((timeline) => (
                    <button
                        key={timeline}
                        type="button"
                        onClick={() =>
                            setSelected(
                                timeline
                            )
                        }
                        className={`
                            rounded-2xl
                            border
                            p-4
                            transition-all
                            ${selected ===
                                timeline
                                ? `
                                    border-[#0E5A64]
                                    bg-[#0E5A64]
                                    text-white
                                    `
                                : `
                                    border-[#E8E1D7]
                                    bg-[#F7F3EC]
                                    text-[#374151]
                                    `
                            }
                        `}
                    >
                        <div
                            className="
                            flex
                            flex-col
                            items-center
                            gap-2
                            "
                        >
                            <TreePine
                                size={28}
                                color={
                                    selected ===
                                        timeline
                                        ? "#FFFFFF"
                                        : "#2F5A41"
                                }
                                strokeWidth={1.8}
                            />

                            <span
                                className="
                                text-sm
                                font-medium
                                "
                            >
                                {timeline}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}