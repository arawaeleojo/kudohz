interface PageHeaderProps {
    title: string;
}

export default function PageHeader({
    title,
}: PageHeaderProps) {
    return (
        <div
            className="
      flex
      items-center
      justify-between
      mb-8
      "
        >
            <h1
                className="
        text-3xl
        font-bold
        "
            >
                {title}
            </h1>

            <button>
                ⚙️
            </button>
        </div>
    );
}