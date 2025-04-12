import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter a valid name"),
  email: z.string().email("Enter a valid email"),
  contactNumber: z.string().min(9, "Enter valid phone number"),
  companyName: z.string().min(4, "Enter a valid company name"),
});

export type TContactSchema = z.infer<typeof contactSchema>;
