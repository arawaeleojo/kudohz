import SettingsHeader from "@/components/profile/SettingsHeader";

export default function EditLeadGoalPage() {
    return (
        <div className="space-y-6">
            <SettingsHeader
                title="Edit Lead Goal"
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
                        Lead Goal
                    </label>

                    <input
                        defaultValue="Write Every Day"
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
                        defaultValue="Writing consistently helps me become the writer I want to be."
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