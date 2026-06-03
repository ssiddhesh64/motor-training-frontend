import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ContentCta from '../components/ContentCta';
import documentChecklist, {
  vehicleOptions,
} from '../data/documentChecklistData';

function ChecklistSection({ title, items, checked, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex gap-3 items-start cursor-pointer group">
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => onToggle(item.id)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span
                className={`text-sm leading-relaxed ${
                  checked[item.id]
                    ? 'text-gray-400 line-through'
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}
              >
                {item.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocumentChecklist() {
  const [vehicle, setVehicle] = useState('all');
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = useMemo(() => {
    const list = [documentChecklist.common, documentChecklist.visitDay];
    if (vehicle === 'all' || vehicle === '2w') {
      list.push(documentChecklist.twoWheeler);
    }
    if (vehicle === 'all' || vehicle === '4w') {
      list.push(documentChecklist.fourWheeler);
    }
    return list;
  }, [vehicle]);

  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="Document Checklist"
          subtitle="What to keep ready for learner’s licence and your first visit. Tick items as you prepare — this list is saved only on your device."
        />

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {vehicleOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setVehicle(opt.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                vehicle === opt.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <ChecklistSection
              key={section.title}
              title={section.title}
              items={section.items}
              checked={checked}
              onToggle={toggle}
            />
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
          <h3 className="font-semibold text-gray-800 text-sm">Please note</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-600 list-disc list-inside">
            {documentChecklist.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center text-sm">
          <Link
            to="/how-it-works"
            className="text-blue-600 font-medium hover:underline"
          >
            ← Back to how it works
          </Link>
        </div>

        <ContentCta whatsappMessage="Hi, I need help with documents for driving training at Royal Motor Training School." />
      </div>
    </section>
  );
}

export default DocumentChecklist;
