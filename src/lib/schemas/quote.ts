import { z } from "zod";

const optionalContact = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""));

export const quoteSchema = z
  .object({
    name: z.string().trim().min(2, "Skriv ditt namn."),
    email: optionalContact.refine(
      (value) => !value || z.string().email().safeParse(value).success,
      "Skriv en giltig e-postadress."
    ),
    phone: optionalContact,
    model: optionalContact,
    material: optionalContact,
    cemetery: optionalContact,
    message: z
      .string()
      .trim()
      .min(8, "Beskriv kort vad du vill ha hjälp med."),
    consent: z.coerce.boolean().refine(Boolean, {
      message: "Du behöver godkänna att vi behandlar uppgifterna."
    }),
    sourcePath: optionalContact
  })
  .refine((data) => Boolean(data.email || data.phone), {
    message: "Ange minst e-post eller telefon.",
    path: ["email"]
  });

export const callbackSchema = z.object({
  name: z.string().trim().min(2, "Skriv ditt namn."),
  phone: z.string().trim().min(6, "Skriv ett telefonnummer."),
  preferredTime: optionalContact,
  consent: z.coerce.boolean().refine(Boolean, {
    message: "Du behöver godkänna att vi behandlar uppgifterna."
  })
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type CallbackInput = z.infer<typeof callbackSchema>;
