import SettingsHeader from "@/components/profile/SettingsHeader";
import LeadGoalsList from "./LeadGoalsList";

export default function LeadGoalsPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Lead Goals"
            />

            <p
                className="
                text-sm
                leading-7
                text-[#6B7280]
                "
            >
                These are the consistent
                actions that drive your
                progress toward your lag
                goals.
            </p>

            <LeadGoalsList />
        </div>
    );
}