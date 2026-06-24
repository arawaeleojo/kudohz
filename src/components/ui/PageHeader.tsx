"use client";

import { useRouter } from "next/navigation";

import {
    Bell,
    Search,
    SlidersHorizontal,
    Plus,
    History,
} from "lucide-react";

interface PageHeaderProps {
    title: string;
}

export default function PageHeader({
    title,
}: PageHeaderProps) {
    const router = useRouter();

    const renderActions = () => {
        switch (title.toLowerCase()) {
            case "profile":
                return (
                    <button
                        onClick={() =>
                            router.push("/notifications")
                        }
                    >
                        <Bell
                            size={22}
                            color="#111827"
                        />
                    </button>
                );

            case "memories":
                return (
                    <div className="flex items-center gap-4">
                        <Search
                            size={20}
                            color="#111827"
                        />

                        <SlidersHorizontal
                            size={20}
                            color="#111827"
                        />
                    </div>
                );

            case "journeys":
                return (
                    <Plus
                        size={22}
                        color="#111827"
                    />
                );

            case "kudo":
                return (
                    <History
                        size={20}
                        color="#111827"
                        strokeWidth={2.2}
                    />
                );

            default:
                return null;
        }
    };

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
                    <h1
                        className="
                        text-xl
                        font-bold
                        text-[#111827]
                        "
                    >
                        {title}
                    </h1>

                    <div>
                        {renderActions()}
                    </div>
                </div>
            </div>

            <div className="h-[72px]" />
        </>
    );
}