import { Leaf } from "lucide-react";

import Card from "@/components/ui/Card";

export default function ActivityHeatmap() {
    const days = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
    ];

    const activityLevels = [
        [0, 1, 2, 3, 4, 2, 1],
        [1, 2, 3, 4, 3, 2, 1],
        [0, 1, 2, 3, 4, 2, 0],
        [2, 3, 4, 3, 2, 1, 0],
        [1, 2, 3, 4, 2, 1, 0],
    ];

    const colors = [
        "var(--border)",
        "#AFCFC0",
        "#6FA28B",
        "#2F7A59",
        "var(--primary)",
    ];

    return (
        <Card className="mt-6 p-5">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
                <h3
                    className="
                    font-semibold
                    text-[var(--foreground)]
                    "
                >
                    Activity Overview
                </h3>

                <span
                    className="
                    text-xs
                    text-[var(--foreground-secondary)]
                    "
                >
                    June 2026
                </span>
            </div>

            {/* Days */}
            <div
                className="
                mb-3
                grid
                grid-cols-7
                gap-2
                "
            >
                {days.map((day) => (
                    <div
                        key={day}
                        className="
                        text-center
                        text-[10px]
                        font-medium
                        text-[var(--foreground-secondary)]
                        "
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Heatmap */}
            <div className="space-y-3">
                {activityLevels.map(
                    (week, weekIndex) => (
                        <div
                            key={weekIndex}
                            className="
                            grid
                            grid-cols-7
                            gap-2
                            "
                        >
                            {week.map(
                                (
                                    level,
                                    index
                                ) => (
                                    <div
                                        key={
                                            index
                                        }
                                        className="
                                        flex
                                        items-center
                                        justify-center
                                        "
                                    >
                                        <Leaf
                                            size={22}
                                            strokeWidth={
                                                3
                                            }
                                            color={
                                                colors[
                                                level
                                                ]
                                            }
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    )
                )}
            </div>

            {/* Legend */}
            <div
                className="
                mt-6
                flex
                items-center
                justify-end
                gap-2
                text-[10px]
                text-[var(--foreground-secondary)]
                "
            >
                <span>Less</span>

                <div className="flex gap-1">
                    {colors.map(
                        (color) => (
                            <Leaf
                                key={
                                    color
                                }
                                size={14}
                                strokeWidth={
                                    3
                                }
                                color={
                                    color
                                }
                            />
                        )
                    )}
                </div>

                <span>More</span>
            </div>
        </Card>
    );
}