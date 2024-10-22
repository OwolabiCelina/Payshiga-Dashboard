import { SVGProps } from "react";

const CardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_562_597)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 10.3285V16.0179C4.5 16.9054 5.21954 17.625 6.10714 17.625H17.8929C18.7804 17.625 19.5 16.9054 19.5 16.0179V10.3285H4.5ZM14.0089 14.4107C14.0089 14.0409 14.3087 13.7411 14.6786 13.7411H16.2857C16.6556 13.7411 16.9554 14.0409 16.9554 14.4107C16.9554 14.7806 16.6556 15.0804 16.2857 15.0804H14.6786C14.3087 15.0804 14.0089 14.7806 14.0089 14.4107Z"
          fill="currentColor"
        />
        <path
          d="M6.10714 6.375C5.21954 6.375 4.5 7.09454 4.5 7.98214V8.98922H19.5V7.98214C19.5 7.09454 18.7804 6.375 17.8929 6.375H6.10714Z"
          fill="#E2E3E5"
        />
      </g>
      <defs>
        <clipPath id="clip0_562_597">
          <rect
            width={15}
            height={15}
            fill="white"
            transform="translate(4.5 4.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CardIcon;
