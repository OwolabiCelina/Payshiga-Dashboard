import { SVGProps } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={7}
      height={10}
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.75063 8.49969L5.25 5.00033L1.75 1.50033"
        stroke="#B4B4B4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
