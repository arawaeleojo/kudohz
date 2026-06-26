"use client";

import { useRouter } from "next/navigation";

import GoalCard from "@/components/ui/GoalCard";
import CardActions from "@/components/ui/CardActions";
import AddCardButton from "@/components/ui/AddCardButton";

export default function LagGoalsList() {
    const router = useRouter();

    const goals = [
        {
            title: "Publish a Novel",
            description:
                "Complete and publish my first novel.",
        },
        {
            title: "Start a Newsletter",
            description:
                "Build a writing audience and publish consistently.",
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
                                    "/journeys/lag-goals/edit"
                                )
                            }
                            onDelete={() => {
                                console.log(
                                    "Delete Lag Goal"
                                );
                            }}
                        />
                    }
                />
            ))}

            <AddCardButton
                label="Add Lag Goal"
                onClick={() =>
                    router.push(
                        "/journeys/lag-goals/new"
                    )
                }
            />
        </div>
    );
}