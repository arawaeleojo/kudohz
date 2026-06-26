"use client";

import { useRouter } from "next/navigation";

import {
    Palette,
    Shield,
    CircleHelp,
    Info,
    LogOut,
    ChevronRight,
} from "lucide-react";

import Card from "@/components/ui/Card";

const settings = [
    {
        title: "Security",
        icon: Shield,
        href: "/profile/security",
    },
    {
        title: "Appearance",
        icon: Palette,
        href: "/profile/appearance",
    },
    {
        title: "Help & Support",
        icon: CircleHelp,
        href: "/profile/help-support",
    },
    {
        title: "About Kudohz",
        icon: Info,
        href: "/profile/about",
    },
];

export default function ProfileSettings() {
    const router = useRouter();

    return (
        <>
            <Card className="mt-6 overflow-hidden p-0">
                {settings.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.title}
                            onClick={() =>
                                router.push(item.href)
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
                                    settings.length -
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
                                    "
                                >
                                    <Icon
                                        size={18}
                                        className="text-[var(--primary)]"
                                    />
                                </div>

                                <span
                                    className="
                                    text-sm
                                    font-medium

                                    text-[var(--foreground)]
                                    "
                                >
                                    {item.title}
                                </span>
                            </div>

                            <ChevronRight
                                size={18}
                                className="text-[var(--foreground-secondary)]"
                            />
                        </button>
                    );
                })}
            </Card>

            <Card
                className="
                mt-6

                overflow-hidden

                border-[var(--danger)]

                p-0
                "
            >
                <button
                    onClick={() =>
                        router.push("/home")
                    }
                    className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    px-5
                    py-4

                    font-medium

                    text-[var(--danger)]

                    transition-colors

                    hover:bg-red-500/5

                    active:scale-[0.99]
                    "
                >
                    <LogOut size={18} />

                    Log Out
                </button>
            </Card>
        </>
    );
}