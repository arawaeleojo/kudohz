import SettingsHeader from "@/components/profile/SettingsHeader";

export default function EditLagGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Edit Lag Goal"
            />

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-5
                space-y-5
                "
            >
                <div>
                    <label
                        className="
                        block
                        mb-2
                        text-sm
                        font-medium
                        "
                    >
                        Lag Goal
                    </label>

                    <input
                        defaultValue="Publish a Novel"
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
                        "
                    >
                        Why This Matters
                    </label>

                    <textarea
                        rows={4}
                        defaultValue="Publishing a novel is one of the outcomes I want this journey to achieve."
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        bg-[#F7F3EC]
                        px-4
                        py-3
                        text-sm
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
                    Save Changes
                </button>
            </div>
        </div>
    );
}