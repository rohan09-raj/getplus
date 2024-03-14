"use client";

export default function Modal({
  children,
  onCloseClick,
}: {
  children: React.ReactNode;
  onCloseClick: () => void;
}) {
  return (
    <section
      onClick={onCloseClick}
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
    >
      <section className="flex flex-col p-6 rounded-xl bg-white md:w-full md:h-full md:rounded-none">
        <button className="flex justify-end" onClick={onCloseClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </section>
    </section>
  );
}
