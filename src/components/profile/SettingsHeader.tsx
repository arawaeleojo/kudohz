"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface SettingsHeaderProps {
    title: string;
}

export default function SettingsHeader({
    title,
}: SettingsHeaderProps) {
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
                    gap-3
                    "
                >
                    <button
                        onClick={() =>
                            router.back()
                        }
                        className="
                        flex
                        items-center
                        justify-center
                        "
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
            </div>

            <div className="h-[72px]" />
        </>
    );
}