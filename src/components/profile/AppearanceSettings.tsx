export default function AppearanceSettings() {
    const themes = [
        "Light",
        "Dark",
        "System",
    ];

    return (
        <div
            className="
            rounded-3xl
            border
            border-[#E8E1D7]
            overflow-hidden
            "
        >
            {themes.map((theme, index) => (
                <button
                    key={theme}
                    className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-5
                    py-4
                    border-b
                    border-[#F3EEE7]
                    last:border-b-0
                    "
                >
                    <span
                        className="
                        text-sm
                        text-[#111827]
                        "
                    >
                        {theme}
                    </span>

                    <div
                        className={`
                        h-5
                        w-5
                        rounded-full
                        border-2
                        flex
                        items-center
                        justify-center
                        ${index === 0
                                ? "border-[#0E5A64]"
                                : "border-[#D1D5DB]"
                            }
                        `}
                    >
                        {index === 0 && (
                            <div
                                className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-[#0E5A64]
                                "
                            />
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
}