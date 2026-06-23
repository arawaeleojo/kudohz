import JourneyCard from "./JourneyCard";

const journeys = [
    {
        title: "Writer",
        duration: "6 Month Journey",
        progress: "2 of 6 months",
        image: "https://picsum.photos/200?1",
    },
    {
        title: "Designer",
        duration: "4 Month Journey",
        progress: "1 of 4 months",
        image: "https://picsum.photos/200?2",
    },
    {
        title: "Athlete",
        duration: "12 Month Journey",
        progress: "5 of 12 months",
        image: "https://picsum.photos/200?3",
    },
];

export default function JourneyList() {
    return (
        <div className="space-y-4">
            {journeys.map((journey) => (
                <JourneyCard
                    key={journey.title}
                    {...journey}
                />
            ))}
        </div>
    );
}