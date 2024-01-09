const Submission = ({ isSubmitted }: any) => (
  <div className="font-heading">
    {!isSubmitted ? (
      <UploadRightBox />
    ) : (
      <div className="text-center bg-white rounded-xl p-5 my-2">
        <Heading size="small" className="font-semibold text-lg">
          Your Upload Request Status
        </Heading>
        <div className="mt-2">
          {isSubmitted.status === "pending" && (
            <button className="bg-orange-500 text-white px-8 py-2 rounded-full">
              Pending
            </button>
          )}
          {isSubmitted.status === "approved" && (
            <button className="bg-green-500 text-white px-8 py-2 rounded-full">
              Approved
            </button>
          )}
          {isSubmitted.status === "rejected" && (
            <button className="bg-red-500 text-white px-8 py-2 rounded-full">
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
    <div className="font-heading p-5 border border-gray-200 rounded-xl bg-white">
      <Heading size="small" className="text-xl font-semibld mb-3">
        Upload your things here
      </Heading>
      <ChallangesPopup />
    </div>
  );
};

import Heading from "@/blocks/atoms/Heading";
import ChallangesPopup from "../popups/ChallangesPopup";

export default Submission;
