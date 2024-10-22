import { SVGProps } from "react";

const BellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8742 14.9717C12.8742 16.9203 11.1509 18.5 9.0251 18.5C6.89933 18.5 5.17605 16.9203 5.17605 14.9717M12.8742 14.9717H15.1809C16.4766 14.9717 17.2008 13.4768 16.3977 12.46L15.2256 10.976V7.72821C15.2256 4.28847 12.4371 1.5 8.99735 1.5C5.53698 1.5 2.74004 4.32074 2.76936 7.781L2.79496 10.8019L1.58839 12.4112C0.797349 13.4663 1.5502 14.9717 2.8689 14.9717H5.17605M12.8742 14.9717H5.17605"
        stroke="#99999C"
        strokeWidth="1.8"
      />
    </svg>
  );
};

export default BellIcon;
