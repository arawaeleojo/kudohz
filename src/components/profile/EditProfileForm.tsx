"use client";

import { Camera } from "lucide-react";

import AvatarCircle from "./AvatarCircle";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import FormSection from "@/components/ui/forms/FormSection";
import FormField from "@/components/ui/forms/FormField";
import TextInput from "@/components/ui/forms/TextInput";

export default function EditProfileForm() {
    return (
        <>
            <div
                className="
                mb-6

                flex
                justify-center
                "
            >
                <div className="relative">
                    <AvatarCircle
                        size={96}
                    />

                    <button
                        className="
                        absolute
                        bottom-0
                        right-0

                        flex
                        h-9
                        w-9
                        items-center
                        justify-center

                        rounded-full

                        border-2
                        border-[var(--background)]

                        bg-[var(--primary)]

                        text-white

                        transition-transform

                        active:scale-95
                        "
                    >
                        <Camera
                            size={16}
                        />
                    </button>
                </div>
            </div>

            <Card className="p-5">
                <FormSection>
                    <FormField label="Full Name">
                        <TextInput
                            defaultValue="Eleojo Arawa"
                        />
                    </FormField>

                    <FormField label="Username">
                        <TextInput
                            defaultValue="@eleojo"
                        />
                    </FormField>

                    <FormField label="Email Address">
                        <TextInput
                            type="email"
                            defaultValue="eleojo@email.com"
                        />
                    </FormField>

                    <Button>
                        Save Changes
                    </Button>
                </FormSection>
            </Card>
        </>
    );
}