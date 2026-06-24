import SettingsHeader from "@/components/profile/SettingsHeader";
import LagGoalsList from "./LagGoalsList";

export default function LagGoalsPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Lag Goals"
            />

            <p
                className="
                text-sm
                leading-7
                text-[#6B7280]
                "
            >
                These are the outcomes
                you're working toward
                through this journey.
            </p>

            <LagGoalsList />
        </div>
    );
}