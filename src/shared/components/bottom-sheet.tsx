import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcons from "../../assets/icons/close.icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: ReactNode;
};

const BottomSheet = ({ isOpen, title, onClose, children }: Props) => {
  const [sheetElement, setSheetElement] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    setSheetElement(document.getElementById("sheet"));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!sheetElement || !isOpen) return null;

  return createPortal(
    <div
      className="fixed  bg-black/30 z-50 inset-0 transition-all duration-150 ease-in-out"
      onClick={() => onClose()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        className="bg-white w-full h-[calc(100%-89px)] mt-[89px] rounded-t-[30px]"
      >
        <div className="h-[91px] py-[33.5px] px-[35px] flex items-center justify-between">
          {title}{" "}
          <button
            className="size-8 rounded-full flex items-center justify-center bg-[#FAFAFA]"
            onClick={onClose}
          >
            <CloseIcons />
          </button>
        </div>
        <div className="flex-1  overflow-y-auto h-[calc(100%-90px)] pb-10">
          {children}
        </div>
      </div>
    </div>,
    sheetElement
  );
};

export default BottomSheet;
