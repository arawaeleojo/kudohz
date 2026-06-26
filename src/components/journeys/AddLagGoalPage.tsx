import SettingsHeader from "@/components/profile/SettingsHeader";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";

export default function AddLagGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Add Lag Goal"
            />

            <p
                className="
                text-sm
                leading-7
                text-[var(--foreground-secondary)]
                "
            >
                Define an outcome you want
                this journey to help you
                achieve.
            </p>

            <Card className="p-5">
                <FormSection>
                    <FormField label="Lag Goal">
                        <TextInput
                            placeholder="Publish a Novel"
                        />
                    </FormField>

                    <FormField label="Why This Matters">
                        <TextArea
                            rows={4}
                            placeholder="Why is this outcome important to you?"
                        />
                    </FormField>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Save Lag Goal
                    </Button>
                </FormSection>
            </Card>
        </div>
    );
}