"use client";

import { useRouter } from "next/navigation";
import { ChevronRight, TreePine } from "lucide-react";

interface JourneyCardProps {
    title: string;
    duration: string;
    progress: string;
}

export default function JourneyCard({
    title,
    duration,
    progress,
}: JourneyCardProps) {
    const router = useRouter();

    return (
        <button
            onClick={() =>
                router.push("/journeys/1")
            }
            className="
            w-full
            text-left
            "
        >
            <div
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
                            w-1/3
                            rounded-full
                            bg-[#0E5A64]
                            "
                        />
                    </div>

                    <p
                        className="
                        mt-2
                        text-xs
                        text-[#6B7280]
                        "
                    >
                        {progress}
                    </p>
                </div>

                <ChevronRight
                    size={20}
                    color="#6B7280"
                />
            </div>
        </button>
    );
}