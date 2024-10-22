import { useState } from "react";
import BottomSheet from "../../../../shared/components/bottom-sheet";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/provider/store";
import { toggleBusinessModal } from "../../store/business-slice";
import AccountTypeForm from "./account-type-form";
import BusinessDetailForm from "./business-detail";

const AddBusinessForm = () => {
  const isOpen = useAppSelector((state) => state.business.modalOpen);
  const dispatch = useAppDispatch();
  const [step, setSteps] = useState(0);
  const [accountType, setAccountType] = useState("");

  const renderForm = () => {
    switch (step) {
      case 0:
        return (
          <AccountTypeForm
            value={accountType}
            onSelect={(value) => {
              setAccountType(value);
              setSteps(1);
            }}
          />
        );
      case 1:
        return (
          <BusinessDetailForm
            onBack={() => setSteps(0)}
            accountType={accountType}
          />
        );
    }
  };

  return (
    <BottomSheet
      title={<div>Add a business</div>}
      isOpen={isOpen}
      onClose={() => {
        dispatch(toggleBusinessModal());
        setSteps(0);
      }}
    >
      <div className="flex ">
        <div className="w-[285px] flex flex-col gap-5 px-[35px] py-[56px]">
          {Array(7)
            .fill(1)
            .map((_, index) => (
              <div key={index} className="flex gap-2">
                <div className="rounded-full size-6 bg-[#FAFAFA] animate-pulse"></div>
                <div className="w-[136px] bg-[#FAFAFA] rounded-md animate-pulse"></div>
              </div>
            ))}
        </div>
        <div className="flex-1 border-l border-t border-border pt-[55px]">
          <div className="max-w-lg mx-auto">{renderForm()}</div>
        </div>
      </div>
    </BottomSheet>
  );
};

export default AddBusinessForm;
