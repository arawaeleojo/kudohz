import MemoryCard from "./MemoryCard";

const memories = [
    {
        image: "https://picsum.photos/200?1",
        title: "Wrote the opening scene today. It felt real.",
        preview:
            "Started writing again after weeks of hesitation.",
        date: "May 20, 2025",
        tag: "Writer",
    },
    {
        image: "https://picsum.photos/200?2",
        title: "Found a new writing spot. Loving the vibe.",
        preview:
            "Spent the afternoon outlining future ideas.",
        date: "May 15, 2025",
        tag: "Writer",
    },
    {
        image: "https://picsum.photos/200?3",
        title:
            "Struggled with motivation but showed up anyway.",
        preview:
            "Some days consistency matters more than intensity.",
        date: "May 10, 2025",
        tag: "Writer",
    },
    {
        image: "https://picsum.photos/200?4",
        title:
            "Planned my novel outline. Excited for what's ahead.",
        preview:
            "Mapped out the first major story arc.",
        date: "May 5, 2025",
        tag: "Writer",
    },
];

export default function MemoryList() {
    return (
        <>
            <h2
                className="
        text-lg
        font-semibold
        text-[#111827]
        mb-2
        "
            >
                May 2025
            </h2>

            <div>
                {memories.map((memory) => (
                    <MemoryCard
                        key={memory.title}
                        {...memory}
                    />
                ))}
            </div>
        </>
    );
}