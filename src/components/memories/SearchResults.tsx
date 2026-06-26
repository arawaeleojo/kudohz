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

                    text-[var(--foreground)]
                    "
                >
                    No memories found
                </h2>

                <p
                    className="
                    mt-2

                    text-sm

                    text-[var(--foreground-secondary)]
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
            <div
                className="
                py-12

                text-center
                "
            >
                <p
                    className="
                    text-sm

                    text-[var(--foreground-secondary)]
                    "
                >
                    Search by title,
                    reflection,
                    or journey.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {results.map(
                (memory) => (
                    <MemoryCard
                        key={
                            memory.title
                        }
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