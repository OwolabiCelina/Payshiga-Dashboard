import { SVGProps } from "react";

const CloseIcons = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 16.5L11.9998 11.9998M11.9998 11.9998L7.50049 7.50049M11.9998 11.9998L16.4995 7.5M11.9998 11.9998L7.5 16.4995"
        stroke="#99999C"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcons;
