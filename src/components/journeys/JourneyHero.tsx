"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Card from "@/components/ui/Card";
import { identityIllustrations } from "@/constants/identityIllustrations";

export default function JourneyHero() {
    // Temporary mock data.
    // Replace with backend data later.
    const identity = "Writer";
    const status = "Growing";
    const currentDay = 24;
    const totalDays = 90;

    const description =
        "I want to tell stories that inspire and move people.";

    const progress =
        (currentDay / totalDays) * 100;

    const illustration =
        identityIllustrations[identity];

    const statusStyles = {
        Growing: {
            background:
                "var(--surface-secondary)",
            color: "var(--success)",
        },

        Nurturing: {
            background:
                "var(--primary-soft)",
            color: "var(--primary)",
        },

        Planting: {
            background:
                "var(--warning-soft)",
            color: "var(--warning)",
        },
    } as const;

    return (
        <Card className="p-6">
            <div
                className="
                flex
                flex-col
                items-center
                text-center
                "
            >
                <motion.div
                    animate={{
                        rotate: [0, -1, 1, 0, 0],
                        y: [0, -4, -2, 0, 0],
                        scale: [1, 1.01, 1.015, 1, 1],
                    }}

                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src={illustration}
                        alt={identity}
                        width={170}
                        height={170}
                        className="object-contain"
                        priority
                        unoptimized
                    />
                </motion.div>

                <span
                    className="
                    mt-4
                    px-4
                    py-1.5
                    rounded-full
                    text-xs
                    font-semibold
                    "
                    style={
                        statusStyles[
                        status
                        ]
                    }
                >
                    {status}
                </span>

                <div className="mt-6 w-full">
                    <div
                        className="
                        mb-2
                        flex
                        items-center
                        justify-between
                        text-xs
                        text-[var(--foreground-secondary)]
                        "
                    >
                        <span>
                            Day {currentDay}
                        </span>

                        <span>
                            {totalDays} Day Journey
                        </span>
                    </div>

                    <div
                        className="
                        h-2
                        overflow-hidden
                        rounded-full
                        bg-[var(--progress-track)]
                        "
                    >
                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: `${progress}%`,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                            }}
                            className="
                            h-full
                            rounded-full
                            bg-[var(--primary)]
                            "
                        />
                    </div>

                    <p
                        className="
                        mt-2
                        text-xs
                        text-[var(--foreground-secondary)]
                        "
                    >
                        Day {currentDay} of {totalDays}
                    </p>
                </div>

                <p
                    className="
                    mt-5
                    max-w-[270px]
                    text-sm
                    leading-7
                    text-[var(--foreground-secondary)]
                    "
                >
                    {description}
                </p>
            </div>
        </Card>
    );
}