interface AvatarCircleProps {
  size?: number;
}

export default function AvatarCircle({
  size = 72,
}: AvatarCircleProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="
      rounded-full
      bg-[#0E5A64]
      flex
      items-center
      justify-center
      flex-shrink-0
      "
    >
      <span
        className="
        text-white
        font-bold
        text-xl
        "
      >
        EA
      </span>
    </div>
  );
}