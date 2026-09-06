import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import { FORM_CONFIG } from "../constants/config";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (formStatus.type) setFormStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setFormStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setFormStatus({
        type: "success",
        message: "Message sent. I’ll reply as soon as I can.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        type: "error",
        message: "Couldn’t send the message. Try again, or email me directly:",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get in touch" />
        <div className="max-w-xl mx-auto mt-16">
          <div className="card-border rounded-xl p-8 md:p-10">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
              aria-label="Contact form"
              noValidate={false}
            >
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  maxLength={FORM_CONFIG.MAX_NAME_LENGTH}
                  autoComplete="name"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                  maxLength={FORM_CONFIG.MAX_EMAIL_LENGTH}
                  autoComplete="email"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Role, timeline, or a project…"
                  rows="5"
                  required
                  maxLength={FORM_CONFIG.MAX_MESSAGE_LENGTH}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="cta-wrapper w-full"
              >
                <div className="cta-button group">
                  <p className="text">
                    {loading ? "Sending…" : "Send message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img
                      src="/images/arrow-right.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.type === "success"
                      ? "border border-white/20 text-white-50"
                      : "border border-red-500/40 text-white-50"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  <p className="text-sm md:text-base">{formStatus.message}</p>
                  {formStatus.type === "error" && (
                    <a
                      href="mailto:rfoc15@gmail.com"
                      className="contact-mailto mt-2 inline-block text-sm md:text-base font-medium underline underline-offset-2 hover:no-underline"
                    >
                      rfoc15@gmail.com
                    </a>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
