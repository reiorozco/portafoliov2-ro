import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | ''
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear status message when user starts typing
    if (formStatus.type) setFormStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ type: '', message: '' }); // Clear previous status

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      // Show success message
      setFormStatus({
        type: 'success',
        message: '✓ Message sent successfully! I\'ll get back to you soon.',
      });

      // Reset form
      setForm({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Show error message
      setFormStatus({
        type: 'error',
        message: '✕ Failed to send message. Please try again or email me directly.',
      });

      // Auto-hide error message after 7 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 7000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  aria-label={loading ? "Sending message..." : "Send message"}
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="Right arrow icon" />
                    </div>
                  </div>
                </button>

                {/* Status Message */}
                {formStatus.message && (
                  <div
                    className={`mt-4 p-4 rounded-lg transition-all duration-300 ${
                      formStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    <p className="text-sm md:text-base">{formStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
