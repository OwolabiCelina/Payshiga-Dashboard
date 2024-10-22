import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import ArrowUpAndDown from "../../../../assets/icons/arrow-up-down";
import PlusIcon from "../../../../assets/icons/plus.icon";
import { toggleBusinessModal } from "../../../../features/business/store/business-slice";
import { useAppDispatch, useAppSelector } from "../../../provider/store";
const Bussiness = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const activeBusiness = useAppSelector(
    (state) => state.business.activeBusiness
  );

  const toggle = () => setIsOpen((prev) => !prev);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <>
      <div
        className="bg-white border select-none border-border min-h-[66px] w-full rounded-xl overflow-hidden  items-center relative flex flex-col"
        ref={ref}
      >
        <div
          role="button"
          onClick={toggle}
          className=" w-full h-full  flex items-center gap-3  p-3"
        >
          <div className="bg-gray-300 size-[42px] rounded-xl shrink-0"></div>
          <div className="flex flex-col">
            <p className="line-clamp-1 font-medium">
              {activeBusiness?.business_name}
            </p>
            <p className="text-subText text-[12px] line-clamp-1">
              Business ID: {activeBusiness?.id}
            </p>
          </div>
          <ArrowUpAndDown />
        </div>
        {isOpen && (
          <div className=" w-full  bg-white p-3  ">
            <div className="w-full h-[1px] bg-border mb-4"></div>
            <button
              className="flex gap-4 items-center text-[#343433] font-medium  rounded-lg overflow-hidden"
              onClick={() => dispatch(toggleBusinessModal())}
            >
              <span className="size-[40px] rounded-lg flex items-center justify-center bg-[#FAFAFA]">
                <PlusIcon />
              </span>
              <span> Add a Business </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Bussiness;
