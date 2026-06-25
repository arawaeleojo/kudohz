import MemoryCard from "./MemoryCard";

interface Memory {
    image: string;
    title: string;
    preview: string;
    date: string;
    journey: string;
}

interface SearchResultsProps {
    results: Memory[];
    query: string;
}

export default function SearchResults({
    results,
    query,
}: SearchResultsProps) {
    if (
        query &&
        results.length === 0
    ) {
        return (
            <div
                className="
                py-20
                text-center
                "
            >
                <h2
                    className="
                    text-lg
                    font-semibold
                    text-[#111827]
                    "
                >
                    No memories found
                </h2>

                <p
                    className="
                    mt-2
                    text-sm
                    text-[#6B7280]
                    "
                >
                    Try another keyword
                    or journey.
                </p>
            </div>
        );
    }

    if (!query) {
        return (
            <p
                className="
                text-sm
                text-[#6B7280]
                "
            >
                Search by title,
                reflection or journey.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {results.map(
                (memory) => (
                    <MemoryCard
                        key={memory.title}
                        image={
                            memory.image
                        }
                        title={
                            memory.title
                        }
                        preview={
                            memory.preview
                        }
                        date={
                            memory.date
                        }
                        tag={
                            memory.journey
                        }
                    />
                )
            )}
        </div>
    );
}