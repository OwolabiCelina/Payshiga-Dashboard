import { SVGProps } from "react";

const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.8115 0H4.18848C1.87525 0 0 1.86548 0 4.16667V35.8333C0 37.6522 1.17151 39.1988 2.80485 39.7673C5.34686 32.7362 12.1098 27.7083 20.0531 27.7083C27.9837 27.7083 34.7376 32.72 37.2891 39.7333C38.8732 39.1391 40 37.6171 40 35.8333V4.16667C40 1.86548 38.1247 0 35.8115 0ZM20.1578 25C24.9578 25 28.8489 21.1291 28.8489 16.3542C28.8489 11.5792 24.9578 7.70833 20.1578 7.70833C15.3579 7.70833 11.4667 11.5792 11.4667 16.3542C11.4667 21.1291 15.3579 25 20.1578 25Z"
        fill="#F3F4F5"
      />
      <path
        d="M28.8489 16.3542C28.8489 21.1291 24.9578 25 20.1578 25C15.3579 25 11.4667 21.1291 11.4667 16.3542C11.4667 11.5792 15.3579 7.70833 20.1578 7.70833C24.9578 7.70833 28.8489 11.5792 28.8489 16.3542Z"
        fill="#99999C"
      />
      <path
        d="M4.18848 40H35.8115C36.3316 40 36.8296 39.9057 37.2891 39.7333C34.7376 32.72 27.9837 27.7083 20.0531 27.7083C12.1098 27.7083 5.34686 32.7362 2.80485 39.7673C3.23799 39.918 3.70362 40 4.18848 40Z"
        fill="#99999C"
      />
    </svg>
  );
};

export default PersonIcon;
