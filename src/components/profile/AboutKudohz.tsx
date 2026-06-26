import {
    Leaf,
    Sparkles,
    Flag,
} from "lucide-react";

import Card from "@/components/ui/Card";

export default function AboutKudohz() {
    return (
        <div className="space-y-6">
            <Card className="p-8 text-center">
                <div
                    className="
                    mx-auto

                    flex
                    h-20
                    w-20

                    items-center
                    justify-center

                    rounded-full

                    bg-[var(--surface-secondary)]

                    text-[var(--primary)]
                    "
                >
                    <Leaf size={34} />
                </div>

                <h1
                    className="
                    mt-6

                    text-3xl
                    font-bold

                    text-[var(--foreground)]
                    "
                >
                    Kudohz
                </h1>

                <p
                    className="
                    mt-2

                    text-sm

                    text-[var(--foreground-secondary)]
                    "
                >
                    Keep Becoming.
                </p>

                <div
                    className="
                    mt-5

                    inline-flex

                    rounded-full

                    bg-[var(--surface-secondary)]

                    px-4
                    py-2

                    text-xs
                    font-semibold

                    text-[var(--primary)]
                    "
                >
                    Version 1.0.0
                </div>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-3">
                    <div
                        className="
                        flex

                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-xl

                        bg-[var(--surface-secondary)]

                        text-[var(--primary)]
                        "
                    >
                        <Sparkles size={18} />
                    </div>

                    <h2
                        className="
                        text-lg
                        font-semibold

                        text-[var(--foreground)]
                        "
                    >
                        Our Philosophy
                    </h2>
                </div>

                <p
                    className="
                    mt-5

                    text-sm
                    leading-8

                    text-[var(--foreground-secondary)]
                    "
                >
                    Kudohz is a personal growth
                    companion built around one
                    simple belief:
                </p>

                <p
                    className="
                    mt-5

                    text-base
                    font-semibold

                    text-[var(--foreground)]
                    "
                >
                    You don't become someone by
                    chasing streaks.
                    <br />
                    You become someone by
                    repeatedly showing up.
                </p>

                <p
                    className="
                    mt-5

                    text-sm
                    leading-8

                    text-[var(--foreground-secondary)]
                    "
                >
                    Instead of focusing on points,
                    streaks, or endless
                    productivity, Kudohz helps you
                    build meaningful identities
                    through consistent action,
                    reflection, and long-term
                    growth.
                </p>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-3">
                    <div
                        className="
                        flex

                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-xl

                        bg-[var(--surface-secondary)]

                        text-[var(--primary)]
                        "
                    >
                        <Flag size={18} />
                    </div>

                    <h2
                        className="
                        text-lg
                        font-semibold

                        text-[var(--foreground)]
                        "
                    >
                        What You'll Find
                    </h2>
                </div>

                <div className="mt-6 space-y-5">
                    <div>
                        <h3
                            className="
                            text-sm
                            font-semibold

                            text-[var(--foreground)]
                            "
                        >
                            🌱 Identities
                        </h3>

                        <p
                            className="
                            mt-1

                            text-sm
                            leading-7

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Become the kind of
                            person you admire.
                        </p>
                    </div>

                    <div>
                        <h3
                            className="
                            text-sm
                            font-semibold

                            text-[var(--foreground)]
                            "
                        >
                            🌳 Journeys
                        </h3>

                        <p
                            className="
                            mt-1

                            text-sm
                            leading-7

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Grow one identity over
                            weeks and months instead
                            of chasing daily streaks.
                        </p>
                    </div>

                    <div>
                        <h3
                            className="
                            text-sm
                            font-semibold

                            text-[var(--foreground)]
                            "
                        >
                            📖 Memories
                        </h3>

                        <p
                            className="
                            mt-1

                            text-sm
                            leading-7

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Capture the moments,
                            lessons, and milestones
                            that shape your growth.
                        </p>
                    </div>

                    <div>
                        <h3
                            className="
                            text-sm
                            font-semibold

                            text-[var(--foreground)]
                            "
                        >
                            🔥 Kudo
                        </h3>

                        <p
                            className="
                            mt-1

                            text-sm
                            leading-7

                            text-[var(--foreground-secondary)]
                            "
                        >
                            Reflect, stay
                            accountable, and keep
                            moving forward with your
                            personal growth coach.
                        </p>
                    </div>
                </div>
            </Card>

            <p
                className="
                pb-6

                text-center
                text-xs

                text-[var(--foreground-secondary)]
                "
            >
                Built with purpose for people who
                believe growth is a lifelong
                journey.
            </p>
        </div>
    );
}