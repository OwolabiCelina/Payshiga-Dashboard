import { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 4.87396V17.1259M4.87402 11H17.126"
        stroke="#B4B4B4"
        strokeWidth="2.8875"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlusIcon;
