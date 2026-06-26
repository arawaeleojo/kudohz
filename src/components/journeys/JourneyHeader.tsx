"use client";

import { useRouter } from "next/navigation";
import {
    ChevronLeft,
    Pencil,
} from "lucide-react";

import IconButton from "@/components/ui/IconButton";

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
            <header
                className="
                fixed
                top-0
                left-1/2
                -translate-x-1/2
                z-40

                w-full
                max-w-sm

                px-5
                pt-6
                pb-4

                bg-[var(--background)]
                border-b
                border-[var(--border)]

                backdrop-blur-md
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
                        gap-2
                        "
                    >
                        <IconButton
                            onClick={() =>
                                router.back()
                            }
                        >
                            <ChevronLeft
                                size={20}
                            />
                        </IconButton>

                        <h1
                            className="
                            text-xl
                            font-bold
                            text-[var(--foreground)]
                            "
                        >
                            {title}
                        </h1>
                    </div>

                    {showEditButton && (
                        <IconButton
                            onClick={() =>
                                router.push(
                                    "/journeys/1/edit"
                                )
                            }
                        >
                            <Pencil
                                size={18}
                            />
                        </IconButton>
                    )}
                </div>
            </header>

            <div className="h-[84px]" />
        </>
    );
}