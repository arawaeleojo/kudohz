import NotificationSection from "./NotificationSection";

export default function NotificationsList() {
    return (
        <div className="space-y-6">
            <NotificationSection
                title="Today"
                notifications={[
                    {
                        title: "Kudo checked in",
                        description:
                            "Kudo wants to know how your Writer journey is going.",
                        type: "kudo",
                    },
                    {
                        title: "Action reminder",
                        description:
                            "You still have 2 actions left for today.",
                        type: "action",
                    },
                ]}
            />

            <NotificationSection
                title="Yesterday"
                notifications={[
                    {
                        title: "Writer milestone reached",
                        description:
                            "You completed Month 2 of your Writer journey.",
                        type: "milestone",
                    },
                ]}
            />

            <NotificationSection
                title="This Week"
                notifications={[
                    {
                        title: "Memory added",
                        description:
                            "A new memory was added to your Writer identity.",
                        type: "memory",
                    },
                    {
                        title: "Journey started",
                        description:
                            "You started the Athlete journey.",
                        type: "journey",
                    },
                ]}
            />
        </div>
    );
}