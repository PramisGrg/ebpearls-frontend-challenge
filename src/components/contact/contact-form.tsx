import { useForm } from "react-hook-form";
import { contactSchema, TContactSchema } from "../../schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { cn } from "../../libs/utlis";
import { Textarea } from "../ui/text-area";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: TContactSchema) => {
    console.log(data, "This is data");
    toast(
      <div>
        <h1 className="font-bold">Form Submitted: </h1>
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
    );
    reset();
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:w-[60%] w-full">
        <Input
          className={cn(errors.name && "border-red-500")}
          {...register("name")}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col lg:w-[60%] w-full">
        <Input
          className={cn(errors.email && "border-red-500", "h-12")}
          {...register("email")}
          placeholder="Your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col lg:w-[60%] w-full">
        <Input
          className={cn(errors.contactNumber && "border-red-500", "h-12")}
          {...register("contactNumber")}
          placeholder="Your contact number"
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.contactNumber.message}
          </p>
        )}
      </div>

      <div className="flex flex-col lg:w-[60%] w-full">
        <Textarea
          className={cn(errors.companyName && "border-red-500", "h-auto")}
          {...register("companyName")}
          placeholder="Business or company name"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.companyName.message}
          </p>
        )}
      </div>

      <button
        className="bg-button text-white px-6 py-3 rounded-full cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
