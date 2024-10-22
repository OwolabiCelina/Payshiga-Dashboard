type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const Switch = ({ value, onChange }: Props) => {
  return (
    <label className="inline-flex items-center space-x-2.5 cursor-pointer">
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        type="checkbox"
        className="sr-only peer"
      />

      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00C46C]" />
    </label>
  );
};

export default Switch;
