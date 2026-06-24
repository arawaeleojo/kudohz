"use client";

import { useRouter } from "next/navigation";
import AvatarCircle from "./AvatarCircle";

export default function ProfileHeader() {
    const router = useRouter();

    return (
        <div
            className="
            flex
            items-start
            gap-4
            "
        >
            <AvatarCircle />

            <div>
                <h2
                    className="
                    text-2xl
                    font-bold
                    text-[#111827]
                    "
                >
                    Eleojo Arawa
                </h2>

                <p
                    className="
                    text-sm
                    text-[#6B7280]
                    mt-1
                    "
                >
                    Keep becoming.
                </p>

                <button
                    onClick={() =>
                        router.push("/profile/edit")
                    }
                    className="
                    mt-3
                    px-4
                    py-2
                    rounded-full
                    bg-[#F1ECE3]
                    text-sm
                    font-medium
                    text-[#111827]
                    "
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
}