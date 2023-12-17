const Submission = ({ isSubmitted }: any) => (
  <div className="font-heading">
    {!isSubmitted ? (
      <UploadRightBox />
    ) : (
      <div className="text-center bg-white rounded-xl py-2 my-2">
        <p className="font-semibold text-lg">Your Challenge Status:</p>
        <div className="mt-2">
          {isSubmitted.status === "pending" && (
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
              Pending
            </button>
          )}
          {isSubmitted.status === "approved" && (
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Approved
            </button>
          )}
          {isSubmitted.status === "rejected" && (
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Rejected
            </button>
          )}
        </div>
        <p className="mt-2 text-sm">
          {/* Add extra text or details here based on the status */}
        </p>
      </div>
    )}
  </div>
);

const UploadRightBox = () => {
  return (
    <div className="font-heading p-5 border border-gray-200 rounded-xl mt-5">
      <h5 className="text-xl font-semibld mb-3">Upload your things here</h5>
      <ChallangesPopup />
    </div>
  );
};

import ChallangesPopup from "../popups/ChallangesPopup";

export default Submission;
