import { useForm } from "react-hook-form";
import { contactSchema, TContactSchema } from "../../schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: TContactSchema) => {
    console.log(data, "This is data");
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="w-[60%]"
        {...register("name")}
        placeholder="Your name"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <Input
        className="w-[60%]"
        {...register("email")}
        placeholder="Your email"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <Input
        className="w-[60%]"
        {...register("contactNumber")}
        placeholder="Your contact number"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <Input
        className="w-[60%]"
        {...register("companyName")}
        placeholder="Business or company name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <button
        className="bg-primary text-white px-6 py-3 rounded-full cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
