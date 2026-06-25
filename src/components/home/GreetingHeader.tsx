"use client";

import { useRouter } from "next/navigation";
import { Bell, Leaf } from "lucide-react";

export default function GreetingHeader() {
    const router = useRouter();

    return (
        <div
            className="
            flex
            items-start
            justify-between
            mb-8
            "
        >
            <div>
                <p
                    className="
                    text-sm
                    text-[#374151]
                    "
                >
                    Good morning,
                </p>

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    mt-1
                    "
                >
                    <h1
                        className="
                        text-4xl
                        font-extrabold
                        text-[#111827]
                        leading-none
                        "
                    >
                        Eleojo
                    </h1>

                    <Leaf
                        size={18}
                        color="#9CB8AA"
                    />
                </div>

                <p
                    className="
                    mt-3
                    text-[#374151]
                    "
                >
                    Keep becoming.
                </p>
            </div>

            <button
                onClick={() =>
                    router.push(
                        "/notifications"
                    )
                }
                className="mt-1"
            >
                <Bell
                    size={22}
                    color="#111827"
                />
            </button>
        </div>
    );
}