export default function CategoryPills() {
    const categories = [
        "All",
        "Writer",
        "Designer",
        "Athlete",
    ];

    return (
        <div
            className="
      grid
      grid-cols-4
      gap-2
      mb-8
      w-full
      "
        >
            {categories.map((category, index) => (
                <button
                    key={category}
                    className={
                        index === 0
                            ? `
                w-full
                py-2.5
                rounded-full
                bg-[#0E5A64]
                text-white
                text-xs
                font-medium
              `
                            : `
                w-full
                py-2.5
                rounded-full
                border
                border-[#E2DBCF]
                bg-[#EFE8DE]
                text-[#374151]
                text-xs
                font-medium
              `
                    }
                >
                    {category}
                </button>
            ))}
        </div>
    );
}