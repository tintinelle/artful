export default function ArrowDown({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <path
        d="M11.725 15.525C11.525 15.525 11.325 15.425 11.225 15.325L5.225 9.325C4.925 9.025 4.925 8.525 5.225 8.225C5.525 7.925 6.025 7.925 6.325 8.225L11.825 13.725L17.325 8.225C17.625 7.925 18.125 7.925 18.425 8.225C18.725 8.525 18.725 9.025 18.425 9.325L12.425 15.325C12.125 15.425 11.925 15.525 11.725 15.525Z"
        fill={color}
      />
    </svg>
  );
}
