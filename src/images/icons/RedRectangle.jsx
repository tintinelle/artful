export default function RedRectangle({ height }) {
  return (
    <svg
      width="24"
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height={height} rx="3" fill="#780505" />
    </svg>
  );
}
