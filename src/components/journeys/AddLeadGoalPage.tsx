import SettingsHeader from "@/components/profile/SettingsHeader";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";

export default function AddLeadGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Add Lead Goal"
            />

            <p
                className="
                text-sm
                leading-7
                text-[var(--foreground-secondary)]
                "
            >
                Define a lead goal that
                supports your journey and
                brings you closer to your
                lag goal.
            </p>

            <Card className="p-5">
                <FormSection>
                    <FormField label="Lead Goal">
                        <TextInput
                            placeholder="Write Every Day"
                        />
                    </FormField>

                    <FormField label="Why This Matters">
                        <TextArea
                            rows={4}
                            placeholder="Why will this lead goal help you achieve your lag goal?"
                        />
                    </FormField>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Save Lead Goal
                    </Button>
                </FormSection>
            </Card>
        </div>
    );
}