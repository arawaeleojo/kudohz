"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { identityIllustrations } from "@/constants/identityIllustrations";

interface IdentityCardProps {
    title: string;
    description: string;
    status: "Growing" | "Nurturing" | "Planting";
}

export default function IdentityCard({
    title,
    description,
    status,
}: IdentityCardProps) {
    const router = useRouter();

    const statusStyles = {
        Growing:
            "bg-[#EEF5F0] text-[#2F7A59]",

        Nurturing:
            "bg-[#EAF4F5] text-[#0E5A64]",

        Planting:
            "bg-[#F6EEDC] text-[#A16B00]",
    };

    return (
        <button
            onClick={() =>
                router.push("/journeys/1")
            }
            className="
            w-full
            text-left
            rounded-3xl
            bg-[#F7F3EC]
            border
            border-[#E8E1D7]
            shadow-[0_4px_16px_rgba(0,0,0,0.06)]
            p-4
            transition-transform
            active:scale-[0.98]
            "
        >
            <div
                className="
                flex
                items-center
                gap-4
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
                        width={72}
                        height={72}
                        className="object-contain"
                        unoptimized
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <div
                        className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        "
                    >
                        <h3
                            className="
                            text-[18px]
                            font-semibold
                            text-[#111827]
                            "
                        >
                            {title}
                        </h3>

                        <span
                            className={`
                            px-4
                            py-1.5
                            rounded-full
                            text-xs
                            font-semibold
                            whitespace-nowrap
                            ${statusStyles[status]}
                            `}
                        >
                            {status}
                        </span>
                    </div>

                    <p
                        className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#374151]
                        "
                    >
                        {description}
                    </p>

                    <div
                        className="
                        mt-4
                        h-1.5
                        rounded-full
                        bg-[#E6DED1]
                        overflow-hidden
                        "
                    >
                        <div
                            className="
                            h-full
                            w-3/5
                            rounded-full
                            bg-[#0E5A64]
                            "
                        />
                    </div>
                </div>

                <ChevronRight
                    size={18}
                    color="#6B7280"
                />
            </div>
        </button>
    );
}