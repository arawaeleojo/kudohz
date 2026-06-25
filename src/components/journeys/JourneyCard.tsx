import { ChevronRight, TreePine } from "lucide-react";
import Link from "next/link";

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
            shadow-sm
            p-5
            "
        >
            <div
                className="
                flex
                items-center
                justify-center
                shrink-0
                "
            >
                <TreePine
                    size={90}
                    strokeWidth={1.5}
                    color="#2F5A41"
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