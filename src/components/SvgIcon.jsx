const IconMap = {
  personalInfo: (
    <path
      className="icon"
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
    />
  ),
};

function SvgIcon({ name, className = "icon", size = 24 }) {
  //   console.log(name);
  const iconPath = IconMap[name];
  //   console.log(iconPath);
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

export { SvgIcon };

// finish with the svg component
// finish with the expiernce component
// check for the state structure - think about your state
// style it beautiful
// upload it
