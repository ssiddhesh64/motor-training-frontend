import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ContentCta from '../components/ContentCta';
import faqCategories from '../data/faqData';

function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers about training, fees, RTO, and how we work. For anything specific, call or WhatsApp us."
        />

        <div className="space-y-8">
          {faqCategories.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item, index) => {
                  const key = `${section.category}-${index}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="w-full text-left px-5 py-4 flex justify-between gap-4 items-start font-medium text-gray-800 hover:bg-gray-50 transition"
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span
                          className="text-blue-600 flex-shrink-0 text-xl leading-none"
                          aria-hidden
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          New to the process?{' '}
          <Link
            to="/how-it-works"
            className="text-blue-600 font-medium hover:underline"
          >
            See how it works
          </Link>{' '}
          or{' '}
          <Link
            to="/documents"
            className="text-blue-600 font-medium hover:underline"
          >
            check required documents
          </Link>
          .
        </div>

        <ContentCta whatsappMessage="Hi, I have a question for Royal Motor Training School (from FAQ page)." />
      </div>
    </section>
  );
}

export default FAQ;
