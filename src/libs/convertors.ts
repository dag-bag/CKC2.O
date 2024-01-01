export function secondsToHoursMinutes(seconds: number): string {
    // Calculate hours and remaining seconds
    const hours: number = Math.floor(seconds / 3600);
    const remainingSeconds: number = seconds % 3600;

    // Calculate minutes
    const minutes: number = Math.floor(remainingSeconds / 60);

    // Format the result as "0hr 0m" string
    const formattedString: string = `${hours}hr ${minutes}m`;

    return formattedString;
}



export function numbersStringToOrdinals(numbersString: string): string {
    const numbers: number[] = numbersString?.split(",").map(Number);

    function numberToOrdinal(number: number): string {
        if (number >= 11 && number <= 13) {
            return number + "th";
        }

        const lastDigit = number % 10;
        switch (lastDigit) {
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
            default:
                return number + "th";
        }
    }

    return numbers?.map(numberToOrdinal).join(", ");
}

export function convertSecondsToTime(seconds: number): string {
    if (typeof seconds !== "number" || seconds < 0) {
        return "Invalid input";
    }

    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;

    const formattedTime: string = `${minutes}:${remainingSeconds < 10 ? "0" : ""
        }${remainingSeconds}`;

    return formattedTime;
}