const CloudDownload = ({ width = 30, height = 30, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.847 11.2638C21.8563 11.2638 21.8656 11.2638 21.875 11.2638C24.9816 11.2638 27.5 13.7868 27.5 16.8991C27.5 19.7998 25.3125 22.1885 22.5 22.5M21.847 11.2638C21.8655 11.0576 21.875 10.8487 21.875 10.6376C21.875 6.83369 18.797 3.75 15 3.75C11.404 3.75 8.45291 6.51584 8.15053 10.0399M21.847 11.2638C21.7191 12.6845 21.1607 13.9808 20.3035 15.0206M8.15053 10.0399C4.97998 10.3422 2.5 13.0174 2.5 16.2729C2.5 19.3021 4.6472 21.829 7.5 22.4091M8.15053 10.0399C8.34783 10.0211 8.54779 10.0115 8.75 10.0115C10.1573 10.0115 11.4559 10.4774 12.5006 11.2638"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 26.25V16.25M15 26.25C14.1247 26.25 12.4894 23.7571 11.875 23.125M15 26.25C15.8753 26.25 17.5106 23.7571 18.125 23.125"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloudDownload;
