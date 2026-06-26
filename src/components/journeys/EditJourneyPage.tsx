import JourneyHeader from "./JourneyHeader";
import ArchiveJourney from "./ArchiveJourney";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";
import Select from "@/components/ui/forms/Select";

export default function EditJourneyPage() {
    return (
        <div className="space-y-6">
            <JourneyHeader
                title="Edit Journey"
            />

            <Card className="p-5">
                <FormSection>
                    <FormField label="Journey Name">
                        <TextInput
                            defaultValue="Writer"
                            placeholder="Journey Name"
                        />
                    </FormField>

                    <FormField label="Description">
                        <TextArea
                            rows={4}
                            defaultValue="I want to tell stories that inspire and move people."
                            placeholder="Describe your journey..."
                        />
                    </FormField>

                    <FormField label="Timeline">
                        <Select defaultValue="90">
                            <option value="30">
                                30 Days
                            </option>

                            <option value="90">
                                90 Days
                            </option>

                            <option value="180">
                                180 Days
                            </option>

                            <option value="270">
                                270 Days
                            </option>

                            <option value="365">
                                365 Days
                            </option>
                        </Select>
                    </FormField>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </FormSection>
            </Card>

            <ArchiveJourney />
        </div>
    );
}