import NotificationCard from "./NotificationCard";

interface Notification {
    title: string;
    description: string;
    type:
    | "kudo"
    | "memory"
    | "milestone"
    | "journey"
    | "action"
    | "achievement";
}

interface NotificationSectionProps {
    title: string;
    notifications: Notification[];
}

export default function NotificationSection({
    title,
    notifications,
}: NotificationSectionProps) {
    return (
        <section>
            <h2
                className="
                text-sm
                font-semibold
                text-[#6B7280]
                mb-3
                "
            >
                {title}
            </h2>

            <div className="space-y-3">
                {notifications.map((notification) => (
                    <NotificationCard
                        key={`${notification.title}-${notification.type}`}
                        title={notification.title}
                        description={notification.description}
                        type={notification.type}
                    />
                ))}
            </div>
        </section>
    );
}