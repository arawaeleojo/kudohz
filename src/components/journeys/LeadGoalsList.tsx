"use client";

import { useRouter } from "next/navigation";

import GoalCard from "@/components/ui/GoalCard";
import CardActions from "@/components/ui/CardActions";
import AddCardButton from "@/components/ui/AddCardButton";

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
                <GoalCard
                    key={goal.title}
                    title={goal.title}
                    description={goal.description}
                    actions={
                        <CardActions
                            onEdit={() =>
                                router.push(
                                    "/journeys/lead-goals/edit"
                                )
                            }
                            onDelete={() => {
                                console.log(
                                    "Delete Lead Goal"
                                );
                            }}
                        />
                    }
                />
            ))}

            <AddCardButton
                label="Add Lead Goal"
                onClick={() =>
                    router.push(
                        "/journeys/lead-goals/new"
                    )
                }
            />
        </div>
    );
}