'use client';

import { FormEvent, useMemo, useState } from "react";

type SubmissionState = "idle" | "loading" | "success" | "error";

type ConsultationSlot = {
  id: string;
  label: string;
  value: string;
};

async function sendLead(payload: Record<string, unknown>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Unable to submit form.");
  }
}

export function LeadCapture() {
  const [contactState, setContactState] = useState<SubmissionState>("idle");
  const [consultState, setConsultState] = useState<SubmissionState>("idle");

  const [contactError, setContactError] = useState<string | null>(null);
  const [consultError, setConsultError] = useState<string | null>(null);

  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const consultationSlots = useMemo<ConsultationSlot[]>(
    () => [
      {
        id: "slot-1",
        label: "Tomorrow · 9:00 AM ET",
        value: "2025-03-18T09:00:00-04:00",
      },
      {
        id: "slot-2",
        label: "Tomorrow · 2:00 PM ET",
        value: "2025-03-18T14:00:00-04:00",
      },
      {
        id: "slot-3",
        label: "Thursday · 11:30 AM ET",
        value: "2025-03-20T11:30:00-04:00",
      },
      {
        id: "slot-4",
        label: "Friday · 1:00 PM ET",
        value: "2025-03-21T13:00:00-04:00",
      },
    ],
    []
  );

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactState("loading");
    setContactError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "lead",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      monthlyAdSpend: formData.get("monthlyAdSpend"),
      goal: formData.get("goal"),
    };

    try {
      await sendLead(payload);
      setContactState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setContactError(
        error instanceof Error ? error.message : "Something went wrong."
      );
      setContactState("error");
    }
  };

  const handleConsultSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedSlot) {
      setConsultError("Select a time so we can lock it in.");
      setConsultState("error");
      return;
    }

    setConsultState("loading");
    setConsultError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "consultation",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      slot: selectedSlot,
      company: formData.get("company"),
      priority: formData.get("priority"),
    };

    try {
      await sendLead(payload);
      setConsultState("success");
      form.reset();
      setSelectedSlot("");
    } catch (error) {
      console.error(error);
      setConsultError(
        error instanceof Error ? error.message : "Something went wrong."
      );
      setConsultState("error");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Share your growth goals
          </h3>
          <span className="rounded-full bg-electric/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-electric">
            Response in <strong>24 hrs</strong>
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate/80">
          We’ll audit your current ad performance, map wastage, and build a
          performance plan before our first call.
        </p>
        <form
          className="mt-6 grid gap-4 text-sm"
          onSubmit={handleContactSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-medium text-slate">Full name</span>
              <input
                required
                name="fullName"
                placeholder="Jordan Blake"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-medium text-slate">Work email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="you@brand.com"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
                autoComplete="email"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-medium text-slate">Phone</span>
              <input
                name="phone"
                placeholder="+1 555 123 4567"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
                autoComplete="tel"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-medium text-slate">Website / store</span>
              <input
                name="website"
                placeholder="https://"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
                autoComplete="url"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="font-medium text-slate">
              Monthly ad spend (across channels)
            </span>
            <select
              name="monthlyAdSpend"
              required
              className="appearance-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
              defaultValue=""
            >
              <option value="" disabled>
                Select range
              </option>
              <option value="under-5k">Under $5k</option>
              <option value="5k-15k">$5k - $15k</option>
              <option value="15k-50k">$15k - $50k</option>
              <option value="50k-plus">$50k+</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="font-medium text-slate">
              Biggest performance goal right now
            </span>
            <textarea
              name="goal"
              required
              rows={3}
              placeholder="Example: Stabilize CAC under $45 while scaling spend 30% this quarter."
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
            />
          </label>
          {contactError ? (
            <p className="text-sm font-medium text-orange">{contactError}</p>
          ) : null}
          {contactState === "success" ? (
            <p className="flex items-center gap-2 text-sm font-medium text-electric">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
              Thanks—expect a tailored performance plan in your inbox within one
              business day.
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-electric px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-electric/30 transition hover:-translate-y-0.5 hover:bg-electric/90 focus:outline-none focus:ring-2 focus:ring-electric/40 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={contactState === "loading"}
          >
            {contactState === "loading" ? "Submitting..." : "Send My Plan"}
          </button>
        </form>
      </section>

      <section
        id="consultation"
        className="rounded-3xl border border-white/10 bg-deep-slate/80 p-6 shadow-xl shadow-black/30 backdrop-blur"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Book a consultation
          </h3>
          <p className="text-sm leading-relaxed text-slate/80">
            30-min diagnostic call to review your funnel, dissect ad wastage,
            and outline performance targets. No fluff, no long-term contracts.
          </p>
        </div>

        <form className="mt-5 grid gap-4 text-sm" onSubmit={handleConsultSubmit}>
          <label className="grid gap-2">
            <span className="font-medium text-slate">Full name</span>
            <input
              required
              name="fullName"
              placeholder="Morgan Steele"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
              autoComplete="name"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-medium text-slate">Work email</span>
            <input
              required
              type="email"
              name="email"
              placeholder="morgan@brand.com"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
              autoComplete="email"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-medium text-slate">Company</span>
            <input
              name="company"
              placeholder="Adcraze Storefront"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
              autoComplete="organization"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-medium text-slate">Choose a time</span>
            <div className="grid gap-2">
              {consultationSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => {
                    setSelectedSlot(slot.value);
                    setConsultError(null);
                    setConsultState("idle");
                  }}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-electric/40 ${
                    selectedSlot === slot.value
                      ? "border-electric bg-electric/20 text-electric"
                      : "border-white/10 bg-white/5 text-white hover:border-electric/60 hover:bg-electric/10"
                  }`}
                >
                  <span className="font-semibold">{slot.label}</span>
                  <span className="text-xs uppercase tracking-wide">
                    {selectedSlot === slot.value ? "Selected" : "Available"}
                  </span>
                </button>
              ))}
            </div>
          </label>
          <label className="grid gap-2">
            <span className="font-medium text-slate">What’s your top priority?</span>
            <select
              name="priority"
              className="appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
              defaultValue="lower-cac"
            >
              <option value="lower-cac">Lower blended CAC</option>
              <option value="scale-profitably">
                Scale spend without killing efficiency
              </option>
              <option value="launch-new-channel">Launch a new paid channel</option>
              <option value="fix-tracking">Fix tracking & reporting</option>
            </select>
          </label>
          {consultError ? (
            <p className="text-sm font-medium text-orange">{consultError}</p>
          ) : null}
          {consultState === "success" ? (
            <p className="flex items-center gap-2 text-sm font-medium text-electric">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
              Calendar invite on the way. We’ll bring numbers, not fluff.
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:bg-orange/90 focus:outline-none focus:ring-2 focus:ring-orange/40 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={consultState === "loading"}
          >
            {consultState === "loading" ? "Booking..." : "Lock in the call"}
          </button>
        </form>
      </section>
    </div>
  );
}
