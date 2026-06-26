import Card from "@/components/ui/Card";

const stats = [
    {
        value: "3",
        label: "Identities",
    },
    {
        value: "28",
        label: "Memories",
    },
    {
        value: "47",
        label: "Days Active",
    },
];

export default function ProfileStats() {
    return (
        <div
            className="
            mt-6

            grid
            grid-cols-3

            gap-3
            "
        >
            {stats.map((stat) => (
                <Card
                    key={stat.label}
                    className="
                    p-4

                    text-center
                    "
                >
                    <h3
                        className="
                        text-3xl
                        font-bold

                        text-[var(--foreground)]
                        "
                    >
                        {stat.value}
                    </h3>

                    <p
                        className="
                        mt-2

                        text-xs
                        font-medium

                        text-[var(--foreground-secondary)]
                        "
                    >
                        {stat.label}
                    </p>
                </Card>
            ))}
        </div>
    );
}