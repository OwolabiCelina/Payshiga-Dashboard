import { SVGProps } from "react";

const ArrowUpAndDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.71 5.18159L9.02843 2.5L6.34713 5.1813M11.648 12.8184L8.96637 15.5L6.28506 12.8187"
        stroke="#99999C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpAndDown;
