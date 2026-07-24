"use client";

import { useState, FormEvent } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT_DATA } from "@/data/contact";
import { Mail, MapPin, Download, Send, CheckCircle2, AlertCircle, Briefcase, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity / Hiring Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  setStatus("submitting");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  // Custom SVG icons for brand logos
  function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
      </svg>
    );
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Build Something Together"
          subtitle="I'm open to frontend opportunities, software projects, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Recruiter Info & Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Recruiters / Open To Banner */}
            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  Currently Open To
                </div>
                <Briefcase className="w-4 h-4 text-emerald-700" />
              </div>

              <div className="space-y-2 pt-1">
                {[
                  "Junior Frontend Roles",
                  "React / Next.js Developer Roles",
                  "Freelance Projects",
                ].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-950">
                    <div className="p-0.5 rounded-full bg-emerald-200/80 text-emerald-800">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Channels Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200/80 pb-3">
                Connect Directly
              </h3>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/60 hover:border-emerald-300 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-100/80 text-emerald-700 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {CONTACT_DATA.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/60 hover:border-emerald-300 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-sky-100/80 text-sky-700 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-sky-700 transition-colors">
                    View Professional Profile ↗
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={CONTACT_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/60 hover:border-emerald-300 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 text-white group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">GitHub</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                    Explore Code & Repositories ↗
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/60">
                <div className="p-2.5 rounded-xl bg-amber-100/80 text-amber-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {CONTACT_DATA.location}
                  </p>
                </div>
              </div>

              {/* Download CV Action */}
              <div className="pt-2">
                <a
                  href={CONTACT_DATA.resumeUrl}
                  download
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Curriculum Vitae (PDF)
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Recruiters & hiring managers: Send an email directly to my inbox using the form below.
            </p>

            {status === "success" ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Message Delivered!</h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Thank you for reaching out. I will review your message and reply as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson (Tech Corp)"
                      className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all cursor-pointer"
                  >
                    <option value="Job Opportunity / Hiring Inquiry">Job Opportunity / Hiring Inquiry</option>
                    <option value="Freelance / Project Request">Freelance / Contract Work</option>
                    <option value="Technical Collaboration">Technical Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the open position, project requirements, or offer..."
                    className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong sending your message. Please try emailing directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Email to Candidate</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}