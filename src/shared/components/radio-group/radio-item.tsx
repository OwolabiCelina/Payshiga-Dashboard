import { ComponentProps } from "react";
import ArrowRight from "../../../assets/icons/arrow-right";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
  onClick: (value: string) => void;
};

const RadioItem = ({
  imageSrc,
  title,
  description,
  ...rest
}: ComponentProps<"div"> & Props) => {
  return (
    <div
      role="checkbox"
      className="border rounded-[20px] border-border hover:cursor-pointer p-4 flex gap-5 items-center hover:border-[#1C1E1B] outline-none transition-all"
      {...rest}
    >
      <div className="shrink-0">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text-left">
        <p className="mb-1">{title}</p>
        <p className="text-subText text-sm">{description}</p>
      </div>
      <button className="size-8 rounded-full flex items-center justify-center bg-[#FAFAFA] shrink-0">
        <ArrowRight />
      </button>
    </div>
  );
};

export default RadioItem;
