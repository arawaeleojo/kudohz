import AttachmentSection from "./AttachmentSection";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";
import TextArea from "@/components/ui/forms/TextArea";
import Select from "@/components/ui/forms/Select";

interface MemoryFormProps {
    mode: "create" | "edit";
}

export default function MemoryForm({
    mode,
}: MemoryFormProps) {
    const editing = mode === "edit";

    return (
        <Card className="p-5">
            <FormSection>
                <FormField label="Journey">
                    <Select
                        defaultValue={
                            editing
                                ? "Writer"
                                : ""
                        }
                    >
                        {!editing && (
                            <option value="">
                                Select a journey
                            </option>
                        )}

                        <option value="Writer">
                            Writer
                        </option>

                        <option value="Designer">
                            Designer
                        </option>

                        <option value="Reader">
                            Reader
                        </option>

                        <option value="Athlete">
                            Athlete
                        </option>
                    </Select>
                </FormField>

                <FormField label="Attachments">
                    <AttachmentSection />
                </FormField>

                <FormField label="Title">
                    <TextInput
                        defaultValue={
                            editing
                                ? "Morning Writing Session"
                                : ""
                        }
                        placeholder="Give this memory a title"
                    />
                </FormField>

                <FormField label="Reflection">
                    <TextArea
                        rows={8}
                        defaultValue={
                            editing
                                ? "Today I finally sat down and started writing again..."
                                : ""
                        }
                        placeholder="What happened? What did you learn? Why does this moment matter?"
                    />
                </FormField>

                <Button
                    type="submit"
                    variant="primary"
                >
                    {editing
                        ? "Save Changes"
                        : "Save Memory"}
                </Button>
            </FormSection>
        </Card>
    );
}