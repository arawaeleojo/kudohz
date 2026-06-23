interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({
    children,
}: ButtonProps) {
    return (
        <button
            className="
      w-full
      rounded-full
      bg-[#0E5A64]
      text-white
      py-4
      font-semibold
      "
        >
            {children}
        </button>
    );
}