import { Camera } from "lucide-react";

export default function EditProfileForm() {
    return (
        <div className="space-y-6">
            <div
                className="
                flex
                flex-col
                items-center
                "
            >
                <div
                    className="
                    relative
                    "
                >
                    <div
                        className="
                        w-24
                        h-24
                        rounded-full
                        bg-[#D9D9D9]
                        "
                    />

                    <button
                        className="
                        absolute
                        bottom-0
                        right-0
                        h-8
                        w-8
                        rounded-full
                        bg-[#0E5A64]
                        flex
                        items-center
                        justify-center
                        "
                    >
                        <Camera
                            size={16}
                            color="white"
                        />
                    </button>
                </div>
            </div>

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
                        block
                        text-sm
                        text-[#374151]
                        mb-2
                        "
                    >
                        Full Name
                    </label>

                    <input
                        defaultValue="Eleojo Arawa"
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        bg-[#F7F3EC]
                        px-4
                        py-3
                        text-sm
                        outline-none
                        "
                    />
                </div>

                <div>
                    <label
                        className="
                        block
                        text-sm
                        text-[#374151]
                        mb-2
                        "
                    >
                        Username
                    </label>

                    <input
                        defaultValue="@eleojo"
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        bg-[#F7F3EC]
                        px-4
                        py-3
                        text-sm
                        outline-none
                        "
                    />
                </div>

                <div>
                    <label
                        className="
                        block
                        text-sm
                        text-[#374151]
                        mb-2
                        "
                    >
                        Email Address
                    </label>

                    <input
                        defaultValue="eleojo@email.com"
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-[#E8E1D7]
                        bg-[#F7F3EC]
                        px-4
                        py-3
                        text-sm
                        outline-none
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
                    mt-2
                    "
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}