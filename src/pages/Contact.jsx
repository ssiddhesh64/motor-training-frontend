import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = 'Enter valid 10-digit phone number';
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Success state
    // setSuccess(true);
    toast.success('Message sent! Redirecting to WhatsApp...');
    toast.error('Invalid phone number');

    // WhatsApp message
    const whatsappMessage = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

    setTimeout(() => {
      window.open(`https://wa.me/919022441860?text=${whatsappMessage}`);
      setSuccess(false);
      setForm({ name: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="mx-auto">
        {/* FORM */}
        <div className="flex justify-center w-full gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Send Enquiry</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Enquiry"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p className="text-green-600 text-center mt-2">
                  ✅ Message sent! Redirecting to WhatsApp...
                </p>
              )}
            </form>
          </div>

          {/* INFO */}

          <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800">
              Contact Information
            </h2>

            {/* INFO LIST */}
            <div className="mt-6 space-y-5 flex flex-col justify-center justify-items-center">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div className="text-gray-700 text-sm leading-relaxed flex flex-col items-start">
                  <p className="font-semibold text-gray-800">Address</p>
                  <p>Royal Motor Training School</p>
                  <p>Sheetal Dwar Bldg, Shivaji Chowk</p>
                  <p>Daftary Road, Malad East</p>
                  <p>Mumbai - 400097</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col items-start text-gray-700 text-sm leading-relaxed">
                  <p className="font-semibold text-gray-800 text-sm">Phone</p>
                  <p className="text-gray-600 text-sm">+91 9022441860</p>
                </div>
              </div>

              {/* TIMING */}
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                  <FaClock />
                </div>
                <div className="flex flex-col items-start text-gray-700 text-sm leading-relaxed">
                  <p className="font-semibold text-gray-800 text-sm">Timings</p>
                  <p className="text-gray-600 text-sm">8 AM – 8 PM</p>
                </div>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 hover:scale-[1.02] transition duration-300 shadow-md"
              onClick={() => window.open('https://wa.me/919022441860')}
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
        <div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Find Us Here
            </h3>

            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.169391360464!2d72.85119447519043!3d19.187802448453226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71d1832a0b5%3A0x27e1de44995fb3c8!2sRoyal%20Motor%20Training%20School!5e0!3m2!1sen!2sin!4v1773873872078!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-10 flex w-full justify-center">
            <button
              onClick={() =>
                window.open(
                  'https://maps.app.goo.gl/c8Jqv6v9VwXZQ9s7A',
                  '_blank'
                )
              }
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md"
            >
              <span>📍</span>
              <span>Open in Google Maps</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
