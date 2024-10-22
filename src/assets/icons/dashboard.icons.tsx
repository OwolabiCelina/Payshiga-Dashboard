import { SVGProps } from "react";

const DashboardIcons = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.25 5H6.75C5.7835 5 5 5.7835 5 6.75V8.5H9.375H19V6.75C19 5.7835 18.2165 5 17.25 5Z"
        fill="currentColor"
      />
      <path
        d="M5 17.25C5 18.2165 5.7835 19 6.75 19H8.5V9.375H5V17.25Z"
        fill="currentColor"
      />
      <path
        d="M17.25 19C18.2165 19 19 18.2165 19 17.25V9.375H9.375V19H17.25Z"
        fill="#CDCBFF"
      />
    </svg>
  );
};

export default DashboardIcons;
