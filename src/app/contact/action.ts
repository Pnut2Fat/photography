"use server";

import { Resend } from "resend";
import { siteInfo } from "@/data/site-info";

export interface BookingFormState {
  success: boolean;
  error: string | null;
}

export async function sendBookingRequest(
  _prev: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const sessionType = (formData.get("sessionType") as string)?.trim();
  const preferredDate = (formData.get("preferredDate") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    // In development without a key, log and pretend it worked
    console.log("Booking request (no RESEND_API_KEY set):", {
      name, email, phone, sessionType, preferredDate, message,
    });
    return { success: true, error: null };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: `${siteInfo.name} <onboarding@resend.dev>`,
    to: ["peenut1107@gmail.com"],
    replyTo: email,
    subject: `[${siteInfo.name}] ${sessionType || "New booking request"} from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Session type: ${sessionType || "Not specified"}`,
      preferredDate ? `Preferred date: ${preferredDate}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Something went wrong. Please try emailing us directly." };
  }

  return { success: true, error: null };
}
