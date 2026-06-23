interface MemoryCardProps {
    image: string;
    title: string;
    preview: string;
    date: string;
    tag: string;
}

export default function MemoryCard({
    image,
    title,
    preview,
    date,
    tag,
}: MemoryCardProps) {
    return (
        <div
            className="
      flex
      gap-4
      p-3
      mb-4
      rounded-2xl
      border
      border-[#D8D0C3]
      "
        >
            <img
                src={image}
                alt={title}
                className="
        w-24
        self-stretch
        rounded-xl
        object-cover
        shrink-0
        "
            />

            <div
                className="
        flex-1
        min-w-0
        "
            >
                <h3
                    className="
          text-sm
          font-medium
          text-[#111827]
          leading-5
          mb-1
          "
                >
                    {title}
                </h3>

                <p
                    className="
          text-xs
          text-[#6B7280]
          leading-5
          mb-1
          "
                >
                    {preview}
                </p>

                <div
                    className="
          flex
          items-center
          justify-between
          "
                >
                    <span
                        className="
            text-xs
            font-medium
            text-[#0E5A64]
            "
                    >
                        {date}
                    </span>

                    <span
                        className="
            px-2
            py-1
            rounded-full
            bg-[#EEF5F0]
            text-[#2F7A59]
            text-[10px]
            font-medium
            "
                    >
                        {tag}
                    </span>
                </div>
            </div>
        </div>
    );
}