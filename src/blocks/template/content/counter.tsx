interface Props {
  to: string;
}

// import Button from "@/blocks/atoms/Button";

const Counter: React.FC<Props> = ({ to }) => {
  const event_date = new Date(to);

  const rt = calculateTimeRemaining(event_date);

  return (
    <div className="w-full p-5 bg-white rounded-xl">
      <h3 className="!font-heading font-semibold text-2xl">Upcoming Live</h3>

      <div className="grid grid-cols-3 my-3 px-2">
        <div>
          <h4 className="text-xl font-heading font-semibold">{rt.days}</h4>{" "}
          <p className="font-heading text-gray-600">Days</p>
        </div>
        <div>
          <h4 className="text-xl font-heading font-semibold">{rt.hours}</h4>{" "}
          <p className="font-heading text-gray-600">Hours</p>
        </div>
        <div>
          <h4 className="text-xl font-heading font-semibold">{rt.minutes}</h4>{" "}
          <p className="font-heading text-gray-600">Minutes</p>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_1fr]--  gap-3 h-[40px] mt-2">
        {/* <Button animation="scale" className="!rounded-md">
          Set Remainder
        </Button> */}
        <div className="center gap-2 border px-3 rounded-md">
          <p className="text-2xl font-heading leading-2 text-blue-800">
            {event_date.getDate()}
          </p>
          <p className="text-xs font-heading leading-2 text-gray-400">
            {getMonthNameFromDate(event_date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;

function calculateTimeRemaining(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
} {
  // Aaj ki date ka object banaye
  const currentDate = new Date();

  // Target date aur current date ke beech ka difference nikale (milliseconds mein)
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  // Milliseconds ko days, hours aur minutes mein convert kare
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Result object return kare
  return { days, hours, minutes };
}

function getMonthNameFromDate(date: Date): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth();
  return monthNames[monthIndex];
}
