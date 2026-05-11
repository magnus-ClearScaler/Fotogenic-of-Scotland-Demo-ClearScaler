"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="bg-paper border border-line-soft p-10 lg:p-14 text-center">
        <p className="eyebrow">Thank you</p>
        <h3 className="display text-[2.4rem] lg:text-[3rem] mt-6 text-ink kerning-tight">
          Your enquiry is on its way.
        </h3>
        <p className="mt-6 text-mute leading-[1.75] max-w-lg mx-auto">
          One of us will reply personally within 24 hours, usually sooner. In
          the meantime, feel free to call the studio on{" "}
          <a
            href="tel:01415739855"
            className="text-burnish-deep underline-offset-4 underline"
          >
            0141 573 9855
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-paper border border-line-soft p-8 lg:p-12 grid sm:grid-cols-2 gap-x-8 gap-y-7"
    >
      <Field id="firstName" label="First name" autoComplete="given-name" required />
      <Field id="lastName" label="Partner's first name" required />
      <Field id="email" label="Email address" type="email" autoComplete="email" required />
      <Field id="phone" label="Phone" type="tel" autoComplete="tel" />
      <Field id="date" label="Wedding or shoot date" type="date" required />
      <Field id="venue" label="Venue or location" />
      <div className="sm:col-span-2">
        <Label htmlFor="service">What are you enquiring about</Label>
        <select
          id="service"
          name="service"
          className="input-field appearance-none bg-transparent"
          defaultValue="wedding"
        >
          <option value="wedding">Wedding photography</option>
          <option value="film">Wedding photography &amp; film</option>
          <option value="engagement">Engagement / portrait session</option>
          <option value="commercial">Commercial / editorial commission</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Tell us about the day</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="A sentence about the two of you, what you imagine the day will feel like, anything else we should know."
          className="input-field resize-none"
        />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-5 pt-2">
        <p className="text-[0.78rem] text-mute leading-relaxed max-w-sm">
          We reply personally to every enquiry. Your details stay with us and
          are never shared.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block eyebrow !text-mute mb-2 !text-[0.65rem]"
    >
      {children}
    </label>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="input-field"
      />
    </div>
  );
}
