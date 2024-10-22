/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export enum FormFieldType {
  INPUT = "input",
  SELECT = "select",
}

type CustomProps = {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  required?: boolean;
  selectOptions?: { label: string; value: string }[];
  isError?: boolean;
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label, required } = props;
  console.log(name);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        console.log(field);
        return (
          <FormItem className={`flex-1`}>
            {label && (
              <FormLabel>
                {label}{" "}
                {required && <span className="text-sm text-red-500">*</span>}{" "}
              </FormLabel>
            )}

            <RenderField
              field={field}
              props={{ ...props, isError: !!fieldState.error }}
            />

            <FormMessage className="text-red-500" />
          </FormItem>
        );
      }}
    />
  );
};

export default CustomFormField;

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, placeholder, type, selectOptions, disabled, isError } =
    props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            className={`w-full ${isError ? "border-red-500" : ""}`}
          />
        </FormControl>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectOptions?.map((item) => (
                <SelectItem value={item.value}>{item.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
      );

    default:
      break;
  }
};
