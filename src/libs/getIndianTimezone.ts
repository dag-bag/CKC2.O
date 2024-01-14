function isIndianTimeZone() {
    // Get the current date and time
    const currentDate = new Date();

    // Get the timezone offset in minutes
    const timeZoneOffset = currentDate.getTimezoneOffset();

    // Calculate the offset for Indian Standard Time (IST)
    const indianTimeZoneOffset = -330; // IST is UTC+5:30

    // Check if the current timezone offset matches the Indian timezone offset
    return timeZoneOffset === indianTimeZoneOffset;
}


export default isIndianTimeZone