"use client";

import { ReactNode } from "react";
import Card from "./Card";

interface GoalCardProps {
    title: string;
    description: string;
    leadingIcon?: ReactNode;
    actions?: ReactNode;
}

export default function GoalCard({
    title,
    description,
    leadingIcon,
    actions,
}: GoalCardProps) {
    return (
        <Card className="p-5">
            <div
                className="
                flex
                items-start
                justify-between
                gap-4
                "
            >
                <div className="flex gap-4 flex-1">
                    {leadingIcon && (
                        <div className="pt-1 shrink-0">
                            {leadingIcon}
                        </div>
                    )}

                    <div className="min-w-0 flex-1">
                        <h3
                            className="
                            text-base
                            font-semibold
                            text-[var(--foreground)]
                            "
                        >
                            {title}
                        </h3>

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
                    </div>
                </div>

                {actions && (
                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        shrink-0
                        "
                    >
                        {actions}
                    </div>
                )}
            </div>
        </Card>
    );
}