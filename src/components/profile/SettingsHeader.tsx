"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import IconButton from "@/components/ui/IconButton";

interface SettingsHeaderProps {
    title: string;
}

export default function SettingsHeader({
    title,
}: SettingsHeaderProps) {
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
                    gap-3
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
            </header>

            <div className="h-[84px]" />
        </>
    );
}