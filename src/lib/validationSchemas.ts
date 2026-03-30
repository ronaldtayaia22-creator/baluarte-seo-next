import { z } from "zod";
import { t } from "./i18n";

/** Build contact schema with current locale messages */
export const getContactSchema = () => z.object({
  name: z.string().trim().min(1, t("val.nameRequired")).max(100, t("val.maxChars", { n: 100 })),
  email: z.string().trim().email(t("val.invalidEmail")).max(255),
  phone: z.string().trim().max(20, t("val.maxChars", { n: 20 })).optional().or(z.literal("")),
  message: z.string().trim().min(1, t("val.messageRequired")).max(2000, t("val.maxChars", { n: 2000 })),
});

export const getBookingSchema = () => z.object({
  service_id: z.string().uuid(t("val.invalidService")),
  professional_id: z.string().uuid(t("val.invalidProfessional")).optional().nullable(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, t("val.invalidDate")),
  start_time: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/, t("val.invalidTime")),
  end_time: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/, t("val.invalidTime")),
  guest_name: z.string().trim().min(1, t("val.nameBooking")).max(100),
  guest_email: z.string().trim().email(t("val.invalidEmail")).max(255),
  guest_phone: z.string().trim().max(20).optional().or(z.literal("")),
  notes: z.string().max(500).optional().or(z.literal("")),
});

export const getReviewSchema = () => z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().min(1, t("val.writeComment")).max(500),
  display_name: z.string().trim().max(50).optional().or(z.literal("")),
});

export const getCampaignSchema = () => z.object({
  name: z.string().trim().min(1, t("val.campaignName")).max(200),
  type: z.enum(["email", "sms", "whatsapp", "reactivation"]),
  subject: z.string().max(200).optional().or(z.literal("")),
  body: z.string().max(50000).optional().or(z.literal("")),
});

// Static schemas (backward compatibility – use get*Schema() for locale-aware)
export const contactSchema = getContactSchema();
export const bookingSchema = getBookingSchema();
export const reviewSchema = getReviewSchema();
export const campaignSchema = getCampaignSchema();

export type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;
export type BookingFormData = z.infer<ReturnType<typeof getBookingSchema>>;
export type ReviewFormData = z.infer<ReturnType<typeof getReviewSchema>>;
export type CampaignFormData = z.infer<ReturnType<typeof getCampaignSchema>>;
