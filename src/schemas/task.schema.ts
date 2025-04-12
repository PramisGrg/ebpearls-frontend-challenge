import { z } from "zod";

export const taskSchema = z.object({
  task: z.string().min(2, "Enter a valid string"),
});

export type TTaskSchema = z.infer<typeof taskSchema>;
