"use client";

import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import AvatarCircle from "./AvatarCircle";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ProfileHeader() {
    const router = useRouter();

    return (
        <Card className="p-5">
            <div
                className="
                flex
                items-center
                gap-4
                "
            >
                <AvatarCircle size={84} />

                <div className="flex-1 min-w-0">
                    <h2
                        className="
                        text-2xl
                        font-bold
                        text-[var(--foreground)]
                        "
                    >
                        Eleojo Arawa
                    </h2>

                    <p
                        className="
                        mt-1
                        text-sm
                        text-[var(--foreground-secondary)]
                        "
                    >
                        Keep becoming.
                    </p>

                    <div className="mt-4">
                        <Button
                            variant="secondary"
                            fullWidth={false}
                            size="sm"
                            leftIcon={
                                <Pencil
                                    size={16}
                                />
                            }
                            onClick={() =>
                                router.push(
                                    "/profile/edit"
                                )
                            }
                        >
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}