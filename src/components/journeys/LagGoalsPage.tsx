import PageIntro from "@/components/ui/PageIntro";
import LagGoalsList from "./LagGoalsList";

export default function LagGoalsPage() {
    return (
        <div className="space-y-6">
            <PageIntro
                title="Lag Goals"
                description="These are the outcomes you're working toward through this journey."
            />

            <LagGoalsList />
        </div>
    );
}