"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

import Card from "@/components/ui/Card";
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
        Growing: {
            background: "var(--surface-secondary)",
            color: "var(--success)",
        },

        Nurturing: {
            background: "rgba(14,90,100,.12)",
            color: "var(--primary)",
        },

        Planting: {
            background: "rgba(245,158,11,.12)",
            color: "var(--warning)",
        },
    };

    return (
        <button
            onClick={() =>
                router.push("/journeys/1")
            }
            className="
            w-full
            text-left
            transition-transform
            active:scale-[0.98]
            "
        >
            <Card className="p-4">
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
                                text-[var(--foreground)]
                                "
                            >
                                {title}
                            </h3>

                            <span
                                className="
                                px-4
                                py-1.5
                                rounded-full
                                text-xs
                                font-semibold
                                whitespace-nowrap
                                transition-colors
                                duration-300
                                "
                                style={
                                    statusStyles[
                                    status
                                    ]
                                }
                            >
                                {status}
                            </span>
                        </div>

                        <p
                            className="
                            mt-2
                            text-sm
                            leading-6
                            text-[var(--foreground-secondary)]
                            "
                        >
                            {description}
                        </p>

                        <div
                            className="
                            mt-4
                            h-1.5
                            rounded-full
                            overflow-hidden
                            bg-[var(--progress-track)]
                            "
                        >
                            <div
                                className="
                                h-full
                                w-3/5
                                rounded-full
                                "
                                style={{
                                    background:
                                        "var(--primary)",
                                }}
                            />
                        </div>
                    </div>

                    <ChevronRight
                        size={18}
                        style={{
                            color:
                                "var(--foreground-secondary)",
                        }}
                    />
                </div>
            </Card>
        </button>
    );
}