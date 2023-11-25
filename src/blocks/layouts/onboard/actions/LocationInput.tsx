const LocationInput = () => {
  return (
    <div className="md:h-auto md:min-h-[100px] flex items-center rounded-2xl gap-3 bg-gray-50 p-5 flex-col md:flex-row">
      <input
        placeholder="Country"
        className="border-2 px-10 py-3 md:py-4 rounded-xl font-heading md:w-auto w-full"
      />
      <input
        placeholder="State"
        className="border-2 px-10 py-3 md:py-4 rounded-xl font-heading md:w-auto w-full"
      />
      <input
        placeholder="City"
        className="border-2 px-10 py-3 md:py-4 rounded-xl font-heading md:w-auto w-full"
      />
    </div>
  );
};

export default LocationInput;
