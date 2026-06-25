"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
            flex
            items-center
            gap-5
            rounded-3xl
            bg-[#F7F3EC]
            border
            border-[#E8E1D7]
            shadow-[0_4px_16px_rgba(0,0,0,0.06)]
            p-5
            transition-transform
            active:scale-[0.98]
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
                    text-[#111827]
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                    mt-1
                    text-sm
                    text-[#0E5A64]
                    "
                >
                    {duration}
                </p>

                <div
                    className="
                    mt-4
                    h-2
                    rounded-full
                    bg-[#E6DED1]
                    overflow-hidden
                    "
                >
                    <div
                        className="
                        h-full
                        rounded-full
                        bg-[#0E5A64]
                        transition-all
                        duration-300
                        "
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>

                <p
                    className="
                    mt-2
                    text-xs
                    text-[#6B7280]
                    "
                >
                    {currentMonth} of {totalMonths} months
                </p>
            </div>

            <ChevronRight
                size={20}
                color="#6B7280"
            />
        </Link>
    );
}