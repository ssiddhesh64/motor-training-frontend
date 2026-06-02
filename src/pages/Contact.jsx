import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '919022441860';

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Restrict phone field to digits only, max 10
    if (name === 'phone' && !/^\d*$/.test(value)) return;
    if (name === 'phone' && value.length > 10) return;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message || 'No message'}`;

    toast.success('Redirecting to WhatsApp...', { autoClose: 1500 });

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
      setForm({ name: '', phone: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      bg: 'bg-blue-100 text-blue-600',
      label: 'Address',
      lines: [
        'Royal Motor Training School',
        'Sheetal Dwar Bldg, Shivaji Chowk',
        'Daftary Road, Malad East',
        'Mumbai – 400097',
      ],
    },
    {
      icon: <FaPhoneAlt />,
      bg: 'bg-green-100 text-green-600',
      label: 'Phone',
      lines: ['+91 90224 41860'],
      href: 'tel:+919022441860',
    },
    {
      icon: <FaClock />,
      bg: 'bg-yellow-100 text-yellow-600',
      label: 'Timings',
      lines: ['Monday – Saturday', '8:00 AM – 8:00 PM'],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-500 mt-2 text-sm">
            We're here to help. Fill the form or reach us directly on WhatsApp.
          </p>
        </div>

        {/* Form + Info row */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full border px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition
                    ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-300 bg-red-50'
                        : 'border-gray-200 focus:ring-blue-400 bg-white'
                    } disabled:opacity-60`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                    maxLength={10}
                    inputMode="numeric"
                    className={`w-full border pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition
                      ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-300 bg-red-50'
                          : 'border-gray-200 focus:ring-blue-400 bg-white'
                      } disabled:opacity-60`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message{' '}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Any specific enquiry..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition disabled:opacity-60"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-1/2 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="flex-1">
              <table className="w-full text-sm">
                <tbody>
                  {contactDetails.map(
                    ({ icon, bg, label, lines, href }, rowIdx) => (
                      <tr
                        key={label}
                        className={
                          rowIdx !== contactDetails.length - 1
                            ? 'border-b border-gray-100'
                            : ''
                        }
                      >
                        {/* Icon cell */}
                        <td className="py-4 pr-4 align-top w-12">
                          <div
                            className={`${bg} w-10 h-10 rounded-full flex items-center justify-center text-sm`}
                          >
                            {icon}
                          </div>
                        </td>
                        {/* Label cell */}
                        <td className="py-4 pr-6 align-top w-24">
                          <p className="font-semibold text-gray-800 whitespace-nowrap">
                            {label}
                          </p>
                        </td>
                        {/* Detail cell */}
                        <td className="py-4 align-top">
                          {lines.map((line, i) =>
                            href && i === 0 ? (
                              <a
                                key={i}
                                href={href}
                                className="text-blue-600 hover:underline block"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={i} className="text-gray-500">
                                {line}
                              </p>
                            )
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* WhatsApp CTA — pinned to bottom of card */}
            <button
              className="mt-8 w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 active:scale-[0.98] transition duration-200"
              onClick={() =>
                window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')
              }
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Find Us Here
          </h3>
          <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              title="Royal Motor Training School location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.169391360464!2d72.85119447519043!3d19.187802448453226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71d1832a0b5%3A0x27e1de44995fb3c8!2sRoyal%20Motor%20Training%20School!5e0!3m2!1sen!2sin!4v1773873872078!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
