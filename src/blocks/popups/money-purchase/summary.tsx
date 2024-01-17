import useInternationalization from "@/hooks/useInternationalization";

interface Props {
  GST?: number;
  sale_price: number;
  total_price?: number;
  coupan_discount?: number;
  basic_holder_discount?: number;
  premium_holder_discount?: number;
}

const PaymentSummary: React.FC<Props> = (props) => {
  const { symbol, currency } = useInternationalization();
  return (
    <div>
      <p className="font-heading">Summary</p>
      <section className="p-5 bg-gray-50 rounded-xl mb-5 gap-2 grid mt-1">
        {Object.entries(props).map(([key, val]: any, index) => {
          if (!val) {
            return null;
          }
          return (
            <div key={index} className="flex justify-between items-center">
              <p className="font-heading capitalize">
                {removeUnderscoresAndAddSpaces(key)}
              </p>
              <p>
                {key.includes("discount") ? "(-)" : null}
                {key.includes("GST") ? "(+)" : null}
                {symbol}
                {Math.round(val)}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PaymentSummary;

function removeUnderscoresAndAddSpaces(inputString: string) {
  // Replace underscores with spaces using regular expression
  var stringWithSpaces = inputString.replace(/_/g, " ");

  return stringWithSpaces;
}
