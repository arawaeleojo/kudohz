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
                    "
                    style={{
                        color:
                            "var(--foreground-secondary)",
                    }}
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
                        leading-none
                        "
                        style={{
                            color:
                                "var(--foreground)",
                        }}
                    >
                        Eleojo
                    </h1>

                    <Leaf
                        size={18}
                        style={{
                            color:
                                "var(--success)",
                        }}
                    />
                </div>

                <p
                    className="mt-3"
                    style={{
                        color:
                            "var(--foreground-secondary)",
                    }}
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
                className="
                mt-1
                h-10
                w-10
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-200
                hover:bg-[var(--surface-secondary)]
                active:scale-95
                "
            >
                <Bell
                    size={22}
                    style={{
                        color:
                            "var(--foreground)",
                    }}
                />
            </button>
        </div>
    );
}