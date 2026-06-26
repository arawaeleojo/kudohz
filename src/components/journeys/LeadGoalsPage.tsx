import PageIntro from "@/components/ui/PageIntro";
import LeadGoalsList from "./LeadGoalsList";

export default function LeadGoalsPage() {
    return (
        <div className="space-y-6">
            <PageIntro
                title="Lead Goals"
                description="These are the consistent actions that drive your progress toward your lag goals."
            />

            <LeadGoalsList />
        </div>
    );
}