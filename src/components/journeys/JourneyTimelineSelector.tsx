"use client";

import { useState } from "react";
import Image from "next/image";

import { identityIllustrations } from "@/constants/identityIllustrations";

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
                        duration-200
                        active:scale-[0.98]

                        ${selected ===
                            timeline
                            ? `
                                    border-[var(--primary)]
                                    bg-[var(--primary)]
                                    text-white
                                    shadow-md
                                `
                            : `
                                    border-[var(--border)]
                                    bg-[var(--surface)]
                                    text-[var(--foreground)]
                                `
                        }
                    `}
                >
                    <div
                        className="
                        flex
                        flex-col
                        items-center
                        gap-3
                        "
                    >
                        <Image
                            src={
                                identityIllustrations.Writer
                            }
                            alt={timeline}
                            width={42}
                            height={42}
                            unoptimized
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
    );
}