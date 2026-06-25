import JourneyCard from "./JourneyCard";

interface JourneyListProps {
    selectedTab: string;
}

const journeys = [
    {
        title: "Writer",
        duration: "6 Month Journey",
        currentMonth: 2,
        totalMonths: 6,
        status: "active",
    },
    {
        title: "Designer",
        duration: "4 Month Journey",
        currentMonth: 1,
        totalMonths: 4,
        status: "active",
    },
    {
        title: "Athlete",
        duration: "12 Month Journey",
        currentMonth: 3,
        totalMonths: 12,
        status: "active",
    },
    {
        title: "Designer",
        duration: "4 Month Journey",
        currentMonth: 4,
        totalMonths: 4,
        image: "https://picsum.photos/200?3",
        status: "completed",
    },
    {
        title: "Reader",
        duration: "6 Month Journey",
        currentMonth: 6,
        totalMonths: 6,
        image: "https://picsum.photos/200?4",
        status: "completed",
    },
    {
        title: "Meditator",
        duration: "12 Month Journey",
        currentMonth: 8,
        totalMonths: 12,
        image: "https://picsum.photos/200?5",
        status: "archived",
    },
];

export default function JourneyList({
    selectedTab,
}: JourneyListProps) {
    const visibleJourneys = journeys.filter(
        (journey) =>
            journey.status === selectedTab
    );

    if (visibleJourneys.length === 0) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-lg font-semibold text-[#111827]">
                    No journeys found
                </h2>

                <p className="mt-2 text-sm text-[#6B7280]">
                    {selectedTab === "active" &&
                        "Start a new journey to begin growing a new identity."}

                    {selectedTab === "completed" &&
                        "Complete a journey to celebrate your progress."}

                    {selectedTab === "archived" &&
                        "Archived journeys will appear here."}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {visibleJourneys.map((journey) => (
                <JourneyCard
                    key={journey.title}
                    title={journey.title}
                    duration={journey.duration}
                    currentMonth={journey.currentMonth}
                    totalMonths={journey.totalMonths}
                />
            ))}
        </div>
    );
}