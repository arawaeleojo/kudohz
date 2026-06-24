import JourneyHeader from "./JourneyHeader";
import ArchiveJourney from "./ArchiveJourney";

export default function EditJourneyPage() {
    return (
        <div className="space-y-6">
            <JourneyHeader
                title="Edit Journey"
            />

            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-5
                space-y-4
                "
            >
                <div>
                    <label
                        className="
                        text-sm
                        text-[#374151]
                        block
                        mb-2
                        "
                    >
                        Journey Name
                    </label>

                    <input
                        defaultValue="Writer"
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
                        text-sm
                        text-[#374151]
                        block
                        mb-2
                        "
                    >
                        Description
                    </label>

                    <textarea
                        rows={4}
                        defaultValue="I want to tell stories that inspire and move people."
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

                <div>
                    <label
                        className="
                        text-sm
                        text-[#374151]
                        block
                        mb-2
                        "
                    >
                        Timeline
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
                    >
                        <option>
                            30 Days
                        </option>

                        <option>
                            90 Days
                        </option>

                        <option>
                            180 Days
                        </option>

                        <option>
                            270 Days
                        </option>

                        <option>
                            365 Days
                        </option>
                    </select>
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
                <ArchiveJourney />
        </div>
    );
}