"use client";

import { useActionState } from "react";
import { sendBookingRequest, BookingFormState } from "@/app/contact/action";

const initialState: BookingFormState = { success: false, error: null };

const sessionTypes = [
  "Portrait",
  "Family",
  "Pets / Animals",
  "Nature / Product",
  "Not sure yet",
];

export default function BookingForm() {
  const [state, action, pending] = useActionState(sendBookingRequest, initialState);

  if (state.success) {
    return (
      <div className="bg-moss/10 border border-moss/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-heading text-xl font-semibold text-moss mb-2">Request Sent!</h3>
        <p className="text-charcoal-light">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.error && (
        <div className="bg-clay/10 border border-clay/30 text-clay rounded-xl px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
            Name <span className="text-clay">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-sand-dark bg-white rounded-xl px-4 py-3 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-moss"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email <span className="text-clay">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-sand-dark bg-white rounded-xl px-4 py-3 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-moss"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
            Phone <span className="text-charcoal-light font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-sand-dark bg-white rounded-xl px-4 py-3 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-moss"
            placeholder="(555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="sessionType" className="block text-sm font-medium text-charcoal mb-1">
            Session Type
          </label>
          <select
            id="sessionType"
            name="sessionType"
            className="w-full border border-sand-dark bg-white rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-moss"
          >
            {sessionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal mb-1">
          Preferred Date <span className="text-charcoal-light font-normal">(optional)</span>
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="text"
          className="w-full border border-sand-dark bg-white rounded-xl px-4 py-3 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-moss"
          placeholder="e.g. sometime in October, or a specific date"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Message <span className="text-clay">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-sand-dark bg-white rounded-xl px-4 py-3 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-moss resize-none"
          placeholder="Tell me what you have in mind..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-moss text-sand font-semibold py-3 rounded-full hover:bg-moss-light disabled:opacity-60 transition-colors"
      >
        {pending ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
