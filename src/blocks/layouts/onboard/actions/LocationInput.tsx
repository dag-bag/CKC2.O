const LocationInput = () => {
  return (
    <div className="h-[100px] flex items-center rounded-2xl space-x-3">
      <input
        placeholder="Country"
        className="border-2 px-10 py-4 rounded-xl font-heading"
      />
      <input
        placeholder="State"
        className="border-2 px-10 py-4 rounded-xl font-heading"
      />
      <input
        placeholder="City"
        className="border-2 px-10 py-4 rounded-xl font-heading"
      />
    </div>
  );
};

export default LocationInput;
