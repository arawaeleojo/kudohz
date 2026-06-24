import JourneyHeader from "./JourneyHeader";
import JourneyHero from "./JourneyHero";
import JourneyActions from "./JourneyActions";
import JourneyMemories from "./JourneyMemories";
import JourneyMilestones from "./JourneyMilestones";
import JourneyLagGoals from "./JourneyLagGoals";

export default function JourneyDetailsPage() {
    return (
        <div className="space-y-6">
            <JourneyHeader title="Writer" showEditButton />

            <JourneyHero />

            <JourneyLagGoals />

            <JourneyActions />

            <JourneyMemories />

            <JourneyMilestones />
        </div>
    );
}