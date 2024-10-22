import RadioGroup from "../../../../shared/components/radio-group";

type Props = {
  onSelect: (value: string) => void;
  value: string;
};

const options = [
  {
    imageSrc: "/images/merchant-account.png",
    title: "Merchant Account",
    description:
      "I want to pay suppliers and receive payment from buyers across the globe.",
    value: "merchant-account",
  },
  {
    imageSrc: "/images/agent-account.png",
    title: "Agent Account",
    description:
      "I want to help clients with global flights, hotels, tuition payments & accommodation.",
    value: "agent-account",
  },
  {
    imageSrc: "/images/export-producer.png",
    title: "An Exporting Producer",
    description:
      "I want to export finished goods from Africa to a global audience using Ojah by Shiga.",
    value: "exporting-producer",
  },
];
const AccountTypeForm = ({ onSelect, value }: Props) => {
  return (
    <>
      <p className="text-[36px] leading-[41px] mb-4">
        What kind of account do <br /> you want to open?
      </p>
      <p className="text-subText text-sm">
        You can always add another account later on.
      </p>
      <div className="my-6 h-[1px] w-full bg-border" />
      <RadioGroup options={options} onSelect={onSelect} value={value} />
    </>
  );
};

export default AccountTypeForm;
