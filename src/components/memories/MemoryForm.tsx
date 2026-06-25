import AttachmentSection from "./AttachmentSection";

interface MemoryFormProps {
    mode: "create" | "edit";
}

export default function MemoryForm({
    mode,
}: MemoryFormProps) {
    const editing = mode === "edit";

    return (
        <div className="space-y-6">
            <div>
                
                <label
                    className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-[#111827]
                    "
                >
                    Journey
                </label>

                <select
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E8E1D7]
                    bg-[#F7F3EC]
                    px-4
                    py-3
                    text-sm
                    "
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

                    <option>Writer</option>
                    <option>Designer</option>
                    <option>Reader</option>
                    <option>Athlete</option>
                </select>
            </div>
            
            <AttachmentSection />
            

            <div>
                <label
                    className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-[#111827]
                    "
                >
                    Title
                </label>

                <input
                    defaultValue={
                        editing
                            ? "Morning Writing Session"
                            : ""
                    }
                    placeholder="Give this memory a title"
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E8E1D7]
                    bg-[#F7F3EC]
                    px-4
                    py-3
                    text-sm
                    "
                />
            </div>

            <div>
                <label
                    className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-[#111827]
                    "
                >
                    Capture this moment
                </label>

                <textarea
                    rows={8}
                    defaultValue={
                        editing
                            ? "Today I finally sat down and started writing again..."
                            : ""
                    }
                    placeholder="What happened? What did you learn? Why does this moment matter?"
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E8E1D7]
                    bg-[#F7F3EC]
                    px-4
                    py-3
                    text-sm
                    leading-7
                    resize-none
                    "
                />
            </div>

            <button
                className="
                w-full
                rounded-2xl
                bg-[#0E5A64]
                py-3
                text-white
                font-medium
                "
            >
                {editing
                    ? "Save Changes"
                    : "Save Memory"}
            </button>
        </div>
    );
}