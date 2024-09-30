const IconMap = {
  personalInfo: (
    <path
      className="icon"
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
    />
  ),
};

function SvgIcon({ name, className = "icon", size = 24 }) {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="icon"
  >
    <path
      className="icon"
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
    />
  </svg>;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      {IconMap[name]}
    </svg>
  );
}

export default SvgIcon;
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="icon"
>
  <path
    className="icon"
    d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
  />
</svg>;
