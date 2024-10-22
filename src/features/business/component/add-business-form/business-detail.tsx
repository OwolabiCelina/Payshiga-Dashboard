import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField, {
  FormFieldType,
} from "../../../../shared/components/custom-input";
import { Button } from "../../../../shared/components/ui/button";
import { Form } from "../../../../shared/components/ui/form";
import { useAppDispatch } from "../../../../shared/provider/store";
import { addBusiness, toggleBusinessModal } from "../../store/business-slice";

// Zod schema for form validation
const businessSchema = z.object({
  location: z.string().min(1, "Location is required"),
  business_name: z.string().min(1, "Business name is required"),
  business_industry: z.string().min(1, "Business industry is required"),
  size: z.string().min(1, "Size is required"),
  annual_volume: z.string().min(1, "Annual volume is required"),
});

type BusinessFormValues = z.infer<typeof businessSchema>;

type BusinessDetailFormProps = {
  accountType: string;
  onBack: () => void;
};

const countryOptions = [
  { label: "🇳🇬 Nigeria", value: "NGN" },
  { label: "🌐 Other countries", value: "other" },
];

const BusinessDetailForm = ({
  accountType,
  onBack,
}: BusinessDetailFormProps) => {
  const dispatch = useAppDispatch();

  const form = useForm<BusinessFormValues>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      location: "",
      business_name: "",
      business_industry: "",
      size: "",
      annual_volume: "",
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    dispatch(
      addBusiness({
        ...data,
        accountType,
      })
    );
    dispatch(toggleBusinessModal());
  });

  return (
    <>
      <p className="text-[36px] leading-[41px] mb-4">
        Provide some info about <br /> your business
      </p>
      <div className="my-6 h-[1px] w-full bg-border" />
      <Form {...form}>
        <form onSubmit={handleSubmit} className="gap-[26px] flex flex-col">
          <CustomFormField
            control={form.control}
            name="location"
            fieldType={FormFieldType.SELECT}
            selectOptions={countryOptions}
            placeholder="Select Location"
            label="Where is your business located"
            required
          />
          <CustomFormField
            control={form.control}
            name="business_name"
            fieldType={FormFieldType.INPUT}
            placeholder="Business Name"
            label="Business Name"
            required
          />
          <CustomFormField
            control={form.control}
            name="business_industry"
            fieldType={FormFieldType.SELECT}
            selectOptions={[
              { label: "Financial technology", value: "financial_technology" },
              { label: "Ecommerce", value: "ecommerce" },
            ]}
            placeholder="Business Industry"
            label="Business Industry"
            required
          />
          <div className="grid grid-cols-2 gap-5">
            <CustomFormField
              control={form.control}
              name="size"
              fieldType={FormFieldType.SELECT}
              placeholder="Select Size"
              selectOptions={[
                { label: "1-100", value: "1-100" },
                { label: "101-200", value: "101-200" },
              ]}
              label="Size"
              required
            />
            <CustomFormField
              control={form.control}
              name="annual_volume"
              fieldType={FormFieldType.SELECT}
              selectOptions={[
                { label: "$1,000 - $10,000", value: "1000-10000" },
                { label: "$10,001 - $50,000", value: "10001-50000" },
              ]}
              placeholder="Estimated annual volume"
              label="Estimated annual volume"
              required
            />
          </div>

          <div className="flex justify-between gap-[26px]">
            <Button
              variant="outline"
              className="w-full"
              type="button"
              onClick={onBack}
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.27612 8L7.94766 3M3.27612 8L7.94766 13M3.27612 8H13.7236"
                  stroke="#99999C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back
            </Button>
            <Button className="w-full">Create Business</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default BusinessDetailForm;
