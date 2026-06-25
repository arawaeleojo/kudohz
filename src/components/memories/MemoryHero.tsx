export default function MemoryHero() {
    return (
        <div
            className="
            rounded-3xl
            overflow-hidden
            border
            border-[#E8E1D7]
            "
        >
            <img
                src="https://picsum.photos/600/400"
                alt="Memory"
                className="
                w-full
                h-56
                object-cover
                "
            />

            <div className="p-5">
                <span
                    className="
                    inline-flex
                    px-3
                    py-1
                    rounded-full
                    bg-[#EEF5F0]
                    text-[#2F7A59]
                    text-xs
                    font-medium
                    "
                >
                    Writer
                </span>

                <h2
                    className="
                    mt-4
                    text-xl
                    font-bold
                    text-[#111827]
                    "
                >
                    Wrote the opening scene today.
                </h2>

                <p
                    className="
                    mt-2
                    text-sm
                    text-[#6B7280]
                    "
                >
                    May 20, 2025
                </p>
            </div>
        </div>
    );
}