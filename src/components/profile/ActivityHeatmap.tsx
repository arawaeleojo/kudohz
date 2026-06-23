import { Leaf } from "lucide-react";

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
        "#D5D1CB", // none
        "#AFCFC0", // low
        "#6FA28B", // medium
        "#2F7A59", // high
        "#0E5A64", // highest
    ];

    return (
        <div
            className="
      mt-6
      rounded-3xl
      border
      border-[#E8E1D7]
      p-5
      "
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h3
                    className="
          font-semibold
          text-[#111827]
          "
                >
                    Activity Overview
                </h3>

                <span
                    className="
          text-xs
          text-[#6B7280]
          "
                >
                    June 2026
                </span>
            </div>

            {/* Days */}
            <div
                className="
        grid
        grid-cols-7
        gap-2
        mb-3
        "
            >
                {days.map((day) => (
                    <div
                        key={day}
                        className="
            text-center
            text-[10px]
            text-[#6B7280]
            font-medium
            "
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Heatmap */}
            <div className="space-y-3">
                {activityLevels.map((week, weekIndex) => (
                    <div
                        key={weekIndex}
                        className="
            grid
            grid-cols-7
            gap-2
            "
                    >
                        {week.map((level, index) => (
                            <div
                                key={index}
                                className="
                flex
                items-center
                justify-center
                "
                            >
                                <Leaf
                                    size={22}
                                    strokeWidth={3}
                                    color={colors[level]}
                                />
                            </div>
                        ))}
                    </div>
                ))}
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
        text-[#6B7280]
        "
            >
                <span>Less</span>

                <div className="flex gap-1">
                    {colors.map((color) => (
                        <Leaf
                            key={color}
                            size={14}
                            strokeWidth={3}
                            color={color}
                        />
                    ))}
                </div>

                <span>More</span>
            </div>
        </div>
    );
}