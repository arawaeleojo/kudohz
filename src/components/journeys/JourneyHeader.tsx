"use client";

import { useRouter } from "next/navigation";
import {
    ChevronLeft,
    Pencil,
} from "lucide-react";

interface JourneyHeaderProps {
    title: string;
    showEditButton?: boolean;
}

export default function JourneyHeader({
    title,
    showEditButton = false,
}: JourneyHeaderProps) {
    const router = useRouter();

    return (
        <>
            <div
                className="
                fixed
                top-0
                left-1/2
                -translate-x-1/2
                w-full
                max-w-sm
                bg-[#F7F3EC]
                px-5
                pt-6
                pb-4
                z-40
                "
            >
                <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >
                        <button
                            onClick={() =>
                                router.back()
                            }
                        >
                            <ChevronLeft
                                size={24}
                                color="#111827"
                            />
                        </button>

                        <h1
                            className="
                            text-xl
                            font-bold
                            text-[#111827]
                            "
                        >
                            {title}
                        </h1>
                    </div>

                    {showEditButton && (
                        <button
                            onClick={() =>
                                router.push(
                                    "/journeys/1/edit"
                                )
                            }
                        >
                            <Pencil
                                size={18}
                                color="#111827"
                            />
                        </button>
                    )}
                </div>
            </div>

            <div className="h-[72px]" />
        </>
    );
}