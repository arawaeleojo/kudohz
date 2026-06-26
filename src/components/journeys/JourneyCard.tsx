"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Card from "@/components/ui/Card";
import { identityIllustrations } from "@/constants/identityIllustrations";

interface JourneyCardProps {
    title: string;
    duration: string;
    currentMonth: number;
    totalMonths: number;
}

export default function JourneyCard({
    title,
    duration,
    currentMonth,
    totalMonths,
}: JourneyCardProps) {
    const progress =
        (currentMonth / totalMonths) * 100;

    return (
        <Link
            href="/journeys/1"
            className="
            block
            transition-transform
            active:scale-[0.98]
            "
        >
            <Card
                className="
                flex
                items-center
                gap-5
                p-5
                "
            >
                <div
                    className="
                    shrink-0
                    flex
                    items-center
                    justify-center
                    "
                >
                    <Image
                        src={
                            identityIllustrations[
                            title as keyof typeof identityIllustrations
                            ]
                        }
                        alt={title}
                        width={84}
                        height={84}
                        className="object-contain"
                        unoptimized
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3
                        className="
                        text-lg
                        font-semibold
                        text-[var(--foreground)]
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                        mt-1
                        text-sm
                        "
                        style={{
                            color: "var(--primary)",
                        }}
                    >
                        {duration}
                    </p>

                    <div
                        className="
                        mt-4
                        h-2
                        rounded-full
                        overflow-hidden
                        bg-[var(--progress-track)]
                        "
                    >
                        <div
                            className="
                            h-full
                            rounded-full
                            transition-all
                            duration-300
                            "
                            style={{
                                width: `${progress}%`,
                                background:
                                    "var(--primary)",
                            }}
                        />
                    </div>

                    <p
                        className="
                        mt-2
                        text-xs
                        text-[var(--foreground-secondary)]
                        "
                    >
                        {currentMonth} of{" "}
                        {totalMonths} months
                    </p>
                </div>

                <ChevronRight
                    size={20}
                    style={{
                        color:
                            "var(--foreground-secondary)",
                    }}
                />
            </Card>
        </Link>
    );
}