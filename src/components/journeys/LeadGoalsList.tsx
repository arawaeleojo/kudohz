"use client";

import { useRouter } from "next/navigation";
import {
    Pencil,
    Trash2,
    Plus,
} from "lucide-react";

export default function LeadGoalsList() {
    const router = useRouter();

    const goals = [
        {
            title: "Write Every Day",
            description:
                "Build consistency and improve writing ability.",
        },
        {
            title: "Read More Books",
            description:
                "Learn from great writers and expand knowledge.",
        },
        {
            title: "Study Storytelling",
            description:
                "Understand narrative structure and character development.",
        },
    ];

    return (
        <div className="space-y-4">
            {goals.map((goal) => (
                <div
                    key={goal.title}
                    className="
                    rounded-3xl
                    border
                    border-[#E8E1D7]
                    p-5
                    "
                >
                    <div
                        className="
                        flex
                        items-start
                        justify-between
                        mb-3
                        "
                    >
                        <h3
                            className="
                            text-base
                            font-semibold
                            text-[#111827]
                            "
                        >
                            {goal.title}
                        </h3>

                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            "
                        >
                            <button
                                onClick={() =>
                                    router.push(
                                        "/journeys/lead-goals/edit"
                                    )
                                }
                            >
                                <Pencil
                                    size={16}
                                    color="#0E5A64"
                                />
                            </button>

                            <button>
                                <Trash2
                                    size={16}
                                    color="#DC2626"
                                />
                            </button>
                        </div>
                    </div>

                    <p
                        className="
                        text-sm
                        leading-6
                        text-[#6B7280]
                        "
                    >
                        {goal.description}
                    </p>
                </div>
            ))}

            <button
                onClick={() =>
                    router.push(
                        "/journeys/lead-goals/new"
                    )
                }
                className="
                w-full
                rounded-3xl
                border
                border-dashed
                border-[#0E5A64]
                py-4
                flex
                items-center
                justify-center
                gap-2
                text-[#0E5A64]
                font-medium
                "
            >
                <Plus size={18} />

                Add Lead Goal
            </button>
        </div>
    );
}