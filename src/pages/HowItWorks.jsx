import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ContentCta from '../components/ContentCta';
import howItWorksSteps from '../data/howItWorksData';

function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="How It Works"
          subtitle="From your first enquiry to getting your licence — a simple, offline-friendly process at Royal Motor Training School."
        />

        <ol className="space-y-0">
          {howItWorksSteps.map((item, index) => (
            <li key={item.step} className="relative flex gap-4 pb-10 last:pb-0">
              {index < howItWorksSteps.length - 1 && (
                <span
                  className="absolute left-5 top-12 bottom-0 w-0.5 bg-blue-100"
                  aria-hidden
                />
              )}
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10">
                {item.step}
              </span>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-blue-700 text-xs mt-3 bg-blue-50 rounded-lg px-3 py-2">
                  Tip: {item.tip}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3 justify-center text-sm">
          <Link
            to="/documents"
            className="text-blue-600 font-medium hover:underline"
          >
            Document checklist →
          </Link>
          <Link to="/faq" className="text-blue-600 font-medium hover:underline">
            FAQ →
          </Link>
          <Link
            to="/mocktest"
            className="text-blue-600 font-medium hover:underline"
          >
            Free mock test →
          </Link>
        </div>

        <ContentCta whatsappMessage="Hi, I would like to know how to start driving training at Royal Motor Training School." />
      </div>
    </section>
  );
}

export default HowItWorks;
