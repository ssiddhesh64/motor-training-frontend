import React from 'react';
import PropTypes from 'prop-types';
import services from '../data/servicesData';

const ServiceCard = React.memo(({ service }) => (
  <div
    className="bg-gray-50 rounded-xl div-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
    role="article"
    aria-labelledby={`service-${service.id}-title`}
  >
    <h3
      id={`service-${service.id}-title`}
      className="text-xl font-semibold text-gray-800 py-4"
    >
      {service.name}
    </h3>

    <div className="mt-2 text-gray-600 px-4">{service.desc}</div>

    <div
      className="mt-4 font-bold text-blue-600"
      aria-label={`Price: ${service.price}`}
    >
      {service.price}
    </div>

    <button
      className="text-blue-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 py-4"
      aria-label={`Learn more about ${service.name}`}
      onClick={() => alert(`Learn more about ${service.name}`)} // Placeholder action
    >
      Learn More →
    </button>
  </div>
));

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

function Services() {
  return (
    <section className="py-16 px-6 bg-white" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
          Our Services
        </h2>

        <div className="text-center text-gray-600 mt-3">
          Choose the right training program and start your driving journey today
        </div>

        {/* Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
