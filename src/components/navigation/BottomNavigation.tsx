"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    House,
    Leaf,
    Flame,
    BookOpen,
    User,
} from "lucide-react";

export default function BottomNavigation() {
    const pathname = usePathname();

    const navItems = [
        {
            label: "Home",
            href: "/home",
            icon: House,
        },
        {
            label: "Journeys",
            href: "/journeys",
            icon: Leaf,
        },
        {
            label: "Kudo",
            href: "/kudo",
            icon: Flame,
            isKudo: true,
        },
        {
            label: "Memories",
            href: "/memories",
            icon: BookOpen,
        },
        {
            label: "Profile",
            href: "/profile",
            icon: User,
        },
    ];

    return (
        <nav
            className="
                fixed
                bottom-0
                left-0
                right-0
                mx-auto
                max-w-sm
                h-20

                bg-[var(--surface)]

                border-t
                // border-[var(--border)]

                flex
                items-center
                justify-around

                px-2

                transition-colors
                duration-300

                z-50
                "
        >
            {navItems.map((item) => {
                const isActive =
                    pathname === item.href;

                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-1
                        transition-colors
                        "
                    >
                        <Icon
                            size={
                                item.isKudo
                                    ? 24
                                    : 20
                            }
                            strokeWidth={
                                isActive
                                    ? 2.5
                                    : 2
                            }
                            className={
                                isActive
                                    ? "text-primary"
                                    : "text-foreground-secondary"
                            }
                        />

                        <span
                            className={`
                            text-[10px]
                            ${isActive
                                    ? "text-primary font-medium"
                                    : "text-foreground-secondary"
                                }
                            `}
                        >
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}