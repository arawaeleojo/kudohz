"use client";

import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    actionText?: string;
    onAction?: () => void;
    actionIcon?: ReactNode;
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    actionText,
    onAction,
    actionIcon,
    className,
}: SectionHeaderProps) {
    return (
        <div className={className ?? "mb-4"}>
            <div
                className="
                flex
                items-center
                justify-between
                gap-4
                "
            >
                <div>
                    <h2
                        className="
                        text-lg
                        font-semibold
                        text-[var(--foreground)]
                        "
                    >
                        {title}
                    </h2>

                    {subtitle && (
                        <p
                            className="
                            mt-1
                            text-sm
                            text-[var(--foreground-secondary)]
                            "
                        >
                            {subtitle}
                        </p>
                    )}
                </div>

                {actionText && (
                    <button
                        onClick={onAction}
                        className="
                        flex
                        items-center
                        gap-1
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        hover:opacity-80
                        "
                        style={{
                            color: "var(--primary)",
                        }}
                    >
                        {actionText}

                        {actionIcon ?? (
                            <ChevronRight size={16} />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}