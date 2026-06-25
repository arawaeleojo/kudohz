export default function DeleteMemory() {
    return (
        <div
            className="
            rounded-3xl
            border
            border-[#F5CACA]
            p-5
            "
        >
            <h3
                className="
                text-base
                font-semibold
                text-[#DC2626]
                "
            >
                Delete Memory
            </h3>

            <p
                className="
                mt-2
                text-sm
                leading-6
                text-[#6B7280]
                "
            >
                Permanently remove this
                memory. This action
                cannot be undone.
            </p>

            <button
                className="
                mt-5
                w-full
                rounded-2xl
                border
                border-[#DC2626]
                py-3
                text-[#DC2626]
                font-medium
                "
            >
                Delete Memory
            </button>
        </div>
    );
}