interface KeyIconProps {
  width: number;
  height: number;
}

function KeyIcon({ width, height }: KeyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <title>Key</title>
      <path
        d="M4 18.5a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5.5l-9.782 9.783a7 7 0 103 3L17 10h1.5V8.5L19 8h1.5V6.5L21 6h1.5V4.5l1-1v-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default KeyIcon;
