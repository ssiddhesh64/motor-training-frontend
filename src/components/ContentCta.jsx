import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { PHONE_TEL, whatsappUrl } from '../constants/contact';

function ContentCta({
  whatsappMessage = 'Hi, I have a question about Royal Motor Training School.',
}) {
  return (
    <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 text-center">
      <h2 className="text-lg font-semibold text-gray-800">
        Still have questions?
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        Visit us at the centre or message us — we respond quickly on WhatsApp.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={whatsappUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-xl" />
          WhatsApp Us
        </a>
        <a
          href={PHONE_TEL}
          className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          <FaPhoneAlt />
          Call Now
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
        >
          Contact Page
        </Link>
      </div>
    </div>
  );
}

export default ContentCta;
