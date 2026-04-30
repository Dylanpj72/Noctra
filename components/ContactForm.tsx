'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

// ─── Replace these with your EmailJS credentials ───────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ────────────────────────────────────────────────────────────────────────────

const services = [
  'Web Design & Development',
  'Brand System',
  'Growth Audit',
  'Not sure yet',
];

const budgets = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  'Let\'s talk',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const empty: FormState = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          company:      form.company || 'Not provided',
          service:      form.service || 'Not specified',
          budget:       form.budget  || 'Not specified',
          message:      form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-[14px] text-white placeholder-[#5a5a62] outline-none transition-all duration-300 focus:border-white/[0.24] focus:bg-white/[0.05]';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            Name <span className="text-[#f5d020]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Dylan Jones"
            className={`${inputBase} ${errors.name ? 'border-red-500/60' : ''}`}
          />
          {errors.name && (
            <p className="text-[11px] text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            Email <span className="text-[#f5d020]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="dylan@company.com"
            className={`${inputBase} ${errors.email ? 'border-red-500/60' : ''}`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
          Company <span className="text-[#5a5a62]">(optional)</span>
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Inc."
          className={inputBase}
        />
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            Service
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="" disabled hidden>Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#050507]">{s}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            Budget
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="" disabled hidden>Select a range…</option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-[#050507]">{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
          Message <span className="text-[#f5d020]">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project — what you're building, what's not working, what you'd like to achieve…"
          rows={6}
          className={`${inputBase} resize-none ${errors.message ? 'border-red-500/60' : ''}`}
        />
        {errors.message && (
          <p className="text-[11px] text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          className="btn-shimmer-white group relative overflow-hidden w-full py-4 rounded-full text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_12px_40px_rgba(255,255,255,0.15)] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
        >
          {status === 'sending' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending…
            </span>
          ) : status === 'success' ? (
            'Message sent ✓'
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send message
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          )}
        </button>

        <AnimatePresence>
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-[13px] text-red-400"
            >
              Something went wrong — please try again or email us directly.
            </motion.p>
          )}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-[13px] text-[#8a8a92]"
            >
              We'll be in touch within 24 hours.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}