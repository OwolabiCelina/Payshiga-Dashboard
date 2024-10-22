import { format } from "date-fns";
import { useAppSelector } from "../../../shared/provider/store";
const Greetings = () => {
  const activeBusiness = useAppSelector(
    (state) => state.business.activeBusiness
  );
  return (
    <section className="pt-[44px]">
      <p className="text-[#343433] text-[32px] pb-6 border-b border-border flex justify-between items-center">
        <p className="capitalize font-ojah">
          {" "}
          Good Afternoon, {activeBusiness?.business_name}
        </p>
        <p className="text-subText text-base">
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </p>
      </p>
    </section>
  );
};

export default Greetings;
