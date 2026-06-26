import SettingsHeader from "@/components/profile/SettingsHeader";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";

export default function EditLagGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Edit Lag Goal"
            />

            <Card className="p-5">
                <FormSection>
                    <FormField label="Lag Goal">
                        <TextInput
                            defaultValue="Publish a Novel"
                            placeholder="Lag Goal"
                        />
                    </FormField>

                    <FormField label="Why This Matters">
                        <TextArea
                            rows={4}
                            defaultValue="Publishing a novel is one of the outcomes I want this journey to achieve."
                            placeholder="Why does this goal matter to you?"
                        />
                    </FormField>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </FormSection>
            </Card>
        </div>
    );
}