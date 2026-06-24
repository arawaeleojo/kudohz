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
        <div
            className="
            flex
            items-center
            gap-3
            mb-8
            "
        >
            <button
                onClick={() => router.back()}
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
    );
}