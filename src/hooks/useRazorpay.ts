import axios from "axios";
import toast from "react-hot-toast";
export default function useRazorpay(
  callback: () => void,
  amount: number | string
) {
  const getDataFromServer = async () => {
    const { data } = await axios.post("/api/payment", {
      mobile: 8766203976,
      amount: parseInt(amount as string),
      discount: 10,
    });
    console.log(data)
    return data;
  };
  const handlePayment = () => {
    getDataFromServer().then((data) => {
      console.log(data)
      const options = {
        key: "rzp_test_3AGDRLyf7EUWVw",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        name: "Sample Transaction",
        description: "Test Transaction",
        handler: async function () {
          callback();
        },
        modal: {
          ondismiss: function () {
            toast.error("Payment is cancelled!");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    });
  };
  return { handlePayment };
}
