import SettingsHeader from "@/components/profile/SettingsHeader";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";

export default function EditLeadGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Edit Lead Goal"
            />

            <Card className="p-5">
                <FormSection>
                    <FormField label="Lead Goal">
                        <TextInput
                            defaultValue="Write Every Day"
                            placeholder="Lead Goal"
                        />
                    </FormField>

                    <FormField label="Why This Matters">
                        <TextArea
                            rows={4}
                            defaultValue="Writing consistently helps me become the writer I want to be."
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