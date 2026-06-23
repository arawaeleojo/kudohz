export default function ProfileStats() {
    return (
        <div
            className="
      mt-6
      rounded-3xl
      border
      border-[#E8E1D7]
      px-4
      py-5
      "
        >
            <div className="grid grid-cols-3">
                <div className="text-center">
                    <h3
                        className="
            text-3xl
            font-bold
            text-[#111827]
            "
                    >
                        3
                    </h3>

                    <p
                        className="
            mt-1
            text-xs
            text-[#6B7280]
            "
                    >
                        Identities
                    </p>
                </div>

                <div
                    className="
          text-center
          border-x
          border-[#E8E1D7]
          "
                >
                    <h3
                        className="
            text-3xl
            font-bold
            text-[#111827]
            "
                    >
                        28
                    </h3>

                    <p
                        className="
            mt-1
            text-xs
            text-[#6B7280]
            "
                    >
                        Memories
                    </p>
                </div>

                <div className="text-center">
                    <h3
                        className="
            text-3xl
            font-bold
            text-[#111827]
            "
                    >
                        47
                    </h3>

                    <p
                        className="
            mt-1
            text-xs
            text-[#6B7280]
            "
                    >
                        Days Active
                    </p>
                </div>
            </div>
        </div>
    );
}