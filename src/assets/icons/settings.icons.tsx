import { SVGProps } from "react";

const SettingsIcons = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.84731 7.69442C5.2737 8.03897 4.9248 8.64593 4.9248 9.29928V14.5473C4.9248 15.1842 5.25648 15.7782 5.80698 16.1272L10.3957 19.0366C11.3701 19.6545 12.6303 19.6545 13.6047 19.0366L18.1934 16.1272C18.7439 15.7782 19.0756 15.1842 19.0756 14.5473V9.29928C19.0756 8.64593 18.7267 8.03897 18.153 7.69442L13.5442 4.92601C12.5985 4.358 11.4018 4.358 10.4562 4.92601L5.84731 7.69442ZM12.0002 15.3318C13.8866 15.3318 15.4159 13.8519 15.4159 12.0263C15.4159 10.2007 13.8866 8.72076 12.0002 8.72076C10.1137 8.72076 8.58448 10.2007 8.58448 12.0263C8.58448 13.8519 10.1137 15.3318 12.0002 15.3318Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SettingsIcons;
