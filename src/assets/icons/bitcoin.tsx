const Bitcoin = ({ width = 30, height = 30, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M11.875 20V10"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.75 10V7.5M16.875 10V7.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13.75 22.5V20M16.875 22.5V20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11.875 15H18.125C19.1605 15 20 15.8395 20 16.875V18.125C20 19.1605 19.1605 20 18.125 20H10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 10H18.125C19.1605 10 20 10.8395 20 11.875V13.125C20 14.1605 19.1605 15 18.125 15H11.875"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Bitcoin;
