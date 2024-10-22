import BellIcon from "../../assets/icons/bell-icon";
import PersonIcon from "../../assets/icons/person.icon";
import Switch from "./ui/switch";

type Props = {
  title: string;
};

const PageHeading = ({ title }: Props) => {
  return (
    <section className="h-[89px] w-full px-[28px] flex items-center justify-between border-b border-border">
      <span className="text-[#343433] font-medium">{title}</span>
      <div className="flex items-center">
        <div className="flex space-x-2.5 items-center text-[#FF4E4E]">
          Test
          <Switch />
        </div>
        <div className="h-[19.14px] w-[1.5px] bg-[#E2E3E5] mx-4" />
        <div className="relative">
          <div className="size-2 bg-[#FF4E4E] rounded-full absolute top-0 right-0" />
          <BellIcon />
        </div>
        <div className="ml-6">
          <PersonIcon />
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
