import Card from "@/components/ui/Card";

export default function MemoryReflection() {
    return (
        <Card className="p-5">
            <h3
                className="
                mb-4

                text-base
                font-semibold

                text-[var(--foreground)]
                "
            >
                Reflection
            </h3>

            <p
                className="
                text-sm
                leading-8

                text-[var(--foreground-secondary)]
                "
            >
                Today I finally sat down and started writing again
                after weeks of hesitation. The opening scene flowed
                better than I expected, and for the first time in a
                while I felt connected to the story I want to tell.
                It reminded me that progress doesn't always come from
                waiting for inspiration—it comes from showing up.
            </p>
        </Card>
    );
}