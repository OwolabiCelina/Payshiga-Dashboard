import RadioItem from "./radio-item";

type Option = {
  imageSrc: string;
  title: string;
  description: string;
  value: string;
};

type Props = {
  options: Option[];
  onSelect: (value: string) => void;
  value: string;
};

const RadioGroup = ({ options, onSelect, value }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {options.map((option) => (
        <RadioItem
          key={option.value}
          imageSrc={option.imageSrc}
          title={option.title}
          description={option.description}
          onClick={() => onSelect(value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
