const Bars = ({ width = 17, height = 12, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.65 2C0.65 1.25442 1.25442 0.65 2 0.65H15C15.7456 0.65 16.35 1.25442 16.35 2V3C16.35 3.74558 15.7456 4.35 15 4.35H2C1.25442 4.35 0.65 3.74558 0.65 3V2ZM0.65 9C0.65 8.25442 1.25442 7.65 2 7.65H15C15.7456 7.65 16.35 8.25442 16.35 9V10C16.35 10.7456 15.7456 11.35 15 11.35H2C1.25442 11.35 0.65 10.7456 0.65 10V9Z"
      stroke="#0B0D12"
      strokeWidth="1.3"
    />
  </svg>
);

export default Bars;
