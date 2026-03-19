function GoogleMaps() {
  return (
    <div className="mt-10 flex w-full justify-center">
      <button
        onClick={() =>
          window.open('https://maps.app.goo.gl/c8Jqv6v9VwXZQ9s7A', '_blank')
        }
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md"
      >
        <span>📍</span>
        <span>Open in Google Maps</span>
      </button>
    </div>
  );
}

export default GoogleMaps;
