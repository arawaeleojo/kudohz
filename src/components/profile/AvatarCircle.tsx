interface AvatarCircleProps {
  size?: number;
  initials?: string;
  image?: string;
}

export default function AvatarCircle({
  size = 72,
  initials = "EA",
  image,
}: AvatarCircleProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="
            relative

            flex
            items-center
            justify-center

            overflow-hidden
            shrink-0

            rounded-full

            border-2
            border-[var(--border)]

            bg-[var(--surface-secondary)]

            shadow-sm
            "
    >
      {image ? (
        <img
          src={image}
          alt="Profile"
          className="
                    h-full
                    w-full
                    object-cover
                    "
        />
      ) : (
        <span
          className="
                    font-bold

                    text-[var(--primary)]
                    "
          style={{
            fontSize: size * 0.32,
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}