"use client";

import JourneyHeader from "./JourneyHeader";
import JourneyTimelineSelector from "./JourneyTimelineSelector";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";

export default function CreateJourneyPage() {
    return (
        <div className="space-y-6">
            <JourneyHeader
                title="New Journey"
            />

            <p
                className="
                text-sm
                leading-7
                text-[var(--foreground-secondary)]
                "
            >
                Create a new journey and define
                the person you want to become.
            </p>

            <Card className="p-5">
                <FormSection>
                    <FormField label="Journey Name">
                        <TextInput
                            placeholder="Writer"
                        />
                    </FormField>

                    <FormField label="Why">
                        <TextArea
                            rows={4}
                            placeholder="Why do you want to become this?"
                        />
                    </FormField>

                    <FormField label="Journey Timeline">
                        <JourneyTimelineSelector />
                    </FormField>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Create Journey
                    </Button>
                </FormSection>
            </Card>
        </div>
    );
}