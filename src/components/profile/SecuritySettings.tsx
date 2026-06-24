import { Lock, Trash2 } from "lucide-react";

export default function SecuritySettings() {
    return (
        <div className="space-y-6">
            <div
                className="
                rounded-3xl
                border
                border-[#E8E1D7]
                p-5
                "
            >
                <div
                    className="
                    flex
                    items-center
                    gap-3
                    mb-5
                    "
                >
                    <Lock
                        size={18}
                        color="#0E5A64"
                    />

                    <h2
                        className="
                        text-base
                        font-semibold
                        text-[#111827]
                        "
                    >
                        Change Password
                    </h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label
                            className="
                            block
                            text-sm
                            text-[#374151]
                            mb-2
                            "
                        >
                            Current Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="
                            w-full
                            rounded-2xl
                            border
                            border-[#E8E1D7]
                            bg-[#F7F3EC]
                            px-4
                            py-3
                            outline-none
                            text-sm
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
                            New Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="
                            w-full
                            rounded-2xl
                            border
                            border-[#E8E1D7]
                            bg-[#F7F3EC]
                            px-4
                            py-3
                            outline-none
                            text-sm
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
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="
                            w-full
                            rounded-2xl
                            border
                            border-[#E8E1D7]
                            bg-[#F7F3EC]
                            px-4
                            py-3
                            outline-none
                            text-sm
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

            <div
                className="
                rounded-3xl
                border
                border-[#FDE2E2]
                p-5
                "
            >
                <div
                    className="
                    flex
                    items-center
                    gap-3
                    mb-3
                    "
                >
                    <Trash2
                        size={18}
                        color="#DC2626"
                    />

                    <h2
                        className="
                        text-base
                        font-semibold
                        text-[#DC2626]
                        "
                    >
                        Delete Account
                    </h2>
                </div>

                <p
                    className="
                    text-sm
                    leading-6
                    text-[#6B7280]
                    "
                >
                    Permanently delete your account and all
                    associated journeys, memories, and data.
                    This action cannot be undone.
                </p>

                <button
                    className="
                    mt-4
                    w-full
                    rounded-2xl
                    border
                    border-[#FCA5A5]
                    py-3
                    text-[#DC2626]
                    font-medium
                    "
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
}