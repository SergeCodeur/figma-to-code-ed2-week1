const Wallet = ({ width = 30, height = 30, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 17.5C20 18.5355 20.8395 19.375 21.875 19.375C22.9105 19.375 23.75 18.5355 23.75 17.5C23.75 16.4645 22.9105 15.625 21.875 15.625C20.8395 15.625 20 16.4645 20 17.5Z"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M23.625 10C23.707 9.59611 23.75 9.17809 23.75 8.75C23.75 5.29822 20.9517 2.5 17.5 2.5C14.0483 2.5 11.25 5.29822 11.25 8.75C11.25 9.17809 11.293 9.59611 11.375 10"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M8.75 9.99155H20C23.5355 9.99155 25.3032 9.99155 26.4016 11.0904C27.5 12.1893 27.5 13.9579 27.5 17.4951V19.9964C27.5 23.5336 27.5 25.3022 26.4016 26.4011C25.3032 27.5 23.5355 27.5 20 27.5H12.5C7.78595 27.5 5.42894 27.5 3.96446 26.0349C2.5 24.5696 2.5 22.2115 2.5 17.4951V14.994C2.5 10.2776 2.5 7.91948 3.96446 6.4543C5.14333 5.27488 6.90054 5.04486 10 5H12.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Wallet;