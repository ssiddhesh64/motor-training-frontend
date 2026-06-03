import PropTypes from 'prop-types';

function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
      {subtitle && (
        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHeader;
