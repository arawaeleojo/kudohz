"use client";

import { useRouter } from "next/navigation";

import IdentityCard from "./IdentityCard";

export default function IdentitiesSection() {
    const router = useRouter();

    return (
        <section>
            <div
                className="
                flex
                items-center
                justify-between
                mb-4
                "
            >
                <h2
                    className="
                    text-lg
                    font-semibold
                    "
                    style={{
                        color:
                            "var(--foreground)",
                    }}
                >
                    My Identities
                </h2>

                <button
                    onClick={() =>
                        router.push(
                            "/journeys"
                        )
                    }
                    className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:opacity-80
                    "
                    style={{
                        color:
                            "var(--primary)",
                    }}
                >
                    View all
                </button>
            </div>

            <div className="space-y-4">
                <IdentityCard
                    title="Writer"
                    status="Growing"
                    description="I want to tell stories that inspire and move people."
                />

                <IdentityCard
                    title="Designer"
                    status="Nurturing"
                    description="I want to create work that makes an impact."
                />

                <IdentityCard
                    title="Athlete"
                    status="Planting"
                    description="I want to build strength and discipline."
                />
            </div>
        </section>
    );
}