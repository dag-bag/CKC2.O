function estimateReadingTime(
  pageCount: number,
  averageReadingSpeedPerPage: number
): number {
  return pageCount * averageReadingSpeedPerPage;
}

export { estimateReadingTime };
