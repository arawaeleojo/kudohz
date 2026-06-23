interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({
    children,
    className = "",
}: CardProps) {
    return (
        <div
            className={`
        bg-white
        rounded-3xl
        border border-[#F0ECE5]
        shadow-sm
        ${className}
      `}
        >
            {children}
        </div>
    );
}