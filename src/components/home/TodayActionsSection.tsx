"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Sparkles,
    Leaf,
} from "lucide-react";

import ActionItem from "./ActionItem";
import CelebrationDialog from "@/components/ui/CelebrationDialog";

const initialFocus = [
    {
        identity: "Writer",
        actions: [
            {
                id: 1,
                title: "Write 500 words",
                completed: false,
            },
            {
                id: 2,
                title: "Read 20 pages",
                completed: false,
            },
        ],
    },
    {
        identity: "Designer",
        actions: [
            {
                id: 3,
                title: "Work on design project",
                completed: false,
            },
        ],
    },
    {
        identity: "Athlete",
        actions: [
            {
                id: 4,
                title: "Morning Run",
                completed: false,
            },
        ],
    },
];

export default function TodayActionsSection() {
    const router = useRouter();

    const [todaysFocus, setTodaysFocus] =
        useState(initialFocus);

    const [
        completedIdentity,
        setCompletedIdentity,
    ] = useState("");

    const [
        showCelebration,
        setShowCelebration,
    ] = useState(false);

    function toggleAction(
        identityName: string,
        actionId: number
    ) {
        setTodaysFocus((previous) => {
            return previous.map((identity) => {
                if (
                    identity.identity !==
                    identityName
                ) {
                    return identity;
                }

                const updatedActions =
                    identity.actions.map(
                        (action) =>
                            action.id ===
                                actionId
                                ? {
                                    ...action,
                                    completed:
                                        !action.completed,
                                }
                                : action
                    );

                const allCompleted =
                    updatedActions.every(
                        (action) =>
                            action.completed
                    );

                if (allCompleted) {
                    setCompletedIdentity(
                        identity.identity
                    );

                    setShowCelebration(
                        true
                    );
                }

                return {
                    ...identity,
                    actions:
                        updatedActions,
                };
            });
        });
    }

    const totalActions =
        todaysFocus.reduce(
            (sum, identity) =>
                sum +
                identity.actions.length,
            0
        );

    return (
        <>
            <section className="mt-8">
                <div className="mb-6">
                    <h2
                        className="
                        text-lg
                        font-semibold
                        "
                        style={{
                            color:
                                "var(--foreground)",
                        }}
                    >
                        Today's Focus
                    </h2>

                    <p
                        className="
                        mt-1
                        text-sm
                        "
                        style={{
                            color:
                                "var(--foreground-secondary)",
                        }}
                    >
                        {totalActions} actions
                        across{" "}
                        {
                            todaysFocus.length
                        }{" "}
                        identities
                    </p>
                </div>

                <div className="space-y-8">
                    {todaysFocus.map(
                        (identity) => (
                            <div
                                key={
                                    identity.identity
                                }
                            >
                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-2
                                    mb-3
                                    "
                                >
                                    <Leaf
                                        size={16}
                                        strokeWidth={
                                            2.5
                                        }
                                        className="text-[var(--primary)]"
                                    />

                                    <h3
                                        className="
                                        text-sm
                                        font-semibold
                                        tracking-wide
                                        uppercase
                                        text-[var(--primary)]
                                        "
                                    >
                                        {
                                            identity.identity
                                        }
                                    </h3>
                                </div>

                                <div className="space-y-2">
                                    {identity.actions.map(
                                        (
                                            action
                                        ) => (
                                            <ActionItem
                                                key={
                                                    action.id
                                                }
                                                title={
                                                    action.title
                                                }
                                                completed={
                                                    action.completed
                                                }
                                                onToggle={() =>
                                                    toggleAction(
                                                        identity.identity,
                                                        action.id
                                                    )
                                                }
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>

            <CelebrationDialog
                open={
                    showCelebration
                }
                icon={
                    <Sparkles
                        size={30}
                    />
                }
                title={`Great work, ${completedIdentity}!`}
                description={`You showed up as a ${completedIdentity} today. Would you like to capture this moment while it's still fresh?`}
                primaryText="Add Memory"
                secondaryText="Maybe Later"
                onPrimary={() => {
                    setShowCelebration(
                        false
                    );

                    router.push(
                        "/memories/new"
                    );
                }}
                onSecondary={() =>
                    setShowCelebration(
                        false
                    )
                }
            />
        </>
    );
}