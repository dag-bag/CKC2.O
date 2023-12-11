function estimateReadingTime(
  pageCount: number,
  averageReadingSpeedPerPage: number
): number {
  return pageCount * averageReadingSpeedPerPage;
}
const formatTimestamp = (timestamp: any) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleDateString(); // Adjust the format as needed
};

export { estimateReadingTime, formatTimestamp };
