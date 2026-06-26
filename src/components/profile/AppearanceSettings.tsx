"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
    Sun,
    Moon,
    Monitor,
    Check,
} from "lucide-react";

import Card from "@/components/ui/Card";

export default function AppearanceSettings() {
    const {
        theme,
        resolvedTheme,
        setTheme,
    } = useTheme();

    const [mounted, setMounted] =
        useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const themes = [
        {
            label: "Light",
            description:
                "Always use the light theme.",
            value: "light",
            icon: Sun,
        },
        {
            label: "Dark",
            description:
                "Always use the dark theme.",
            value: "dark",
            icon: Moon,
        },
        {
            label: "System",
            description:
                "Match your device settings.",
            value: "system",
            icon: Monitor,
        },
    ];

    return (
        <Card className="overflow-hidden p-0">
            {themes.map(
                ({
                    label,
                    description,
                    value,
                    icon: Icon,
                }, index) => {
                    const selected =
                        value === "system"
                            ? theme ===
                            "system"
                            : resolvedTheme ===
                            value;

                    return (
                        <button
                            key={value}
                            onClick={() =>
                                setTheme(
                                    value
                                )
                            }
                            className={`
                                w-full

                                flex
                                items-center
                                justify-between

                                px-5
                                py-4

                                transition-all
                                duration-200

                                hover:bg-[var(--surface-secondary)]

                                active:scale-[0.99]

                                ${index !==
                                    themes.length -
                                    1
                                    ? "border-b border-[var(--border)]"
                                    : ""
                                }
                            `}
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
                                    flex

                                    h-10
                                    w-10

                                    items-center
                                    justify-center

                                    rounded-xl

                                    bg-[var(--surface-secondary)]

                                    text-[var(--primary)]
                                    "
                                >
                                    <Icon
                                        size={
                                            18
                                        }
                                    />
                                </div>

                                <div className="text-left">
                                    <h3
                                        className="
                                        text-sm
                                        font-semibold

                                        text-[var(--foreground)]
                                        "
                                    >
                                        {
                                            label
                                        }
                                    </h3>

                                    <p
                                        className="
                                        mt-1

                                        text-xs

                                        text-[var(--foreground-secondary)]
                                        "
                                    >
                                        {
                                            description
                                        }
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`
                                    flex

                                    h-6
                                    w-6

                                    items-center
                                    justify-center

                                    rounded-full

                                    border-2

                                    transition-all

                                    ${selected
                                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                                        : "border-[var(--border)]"
                                    }
                                `}
                            >
                                {selected && (
                                    <Check
                                        size={
                                            14
                                        }
                                    />
                                )}
                            </div>
                        </button>
                    );
                }
            )}
        </Card>
    );
}