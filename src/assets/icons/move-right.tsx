type MoveRightProps = {
  width?: number;
  height?: number;
  className?: string;
};

const MoveRight = ({
  width = 48,
  height = 48,
  className,
  ...props
}: MoveRightProps) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0.5" y="0.5" width="46" height="46" rx="23.5" stroke="#181D28" />
    <path
      d="M29 20.6667L32.3333 24L29 27.3334"
      stroke="#181D28"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6666 24H32.3333"
      stroke="#181D28"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MoveRight;
