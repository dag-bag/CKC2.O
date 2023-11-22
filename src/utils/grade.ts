function convertGradeToOrdinal(grade: string): string {
  const ordinalMapping: { [key: string]: string } = {
    A: "1st",
    B: "2nd",
    C: "3rd",
    // Add more grades as needed
  };

  // Convert the grade to uppercase for case-insensitivity
  const uppercaseGrade: string = grade.toUpperCase();

  // Check if the provided grade exists in the mapping
  if (ordinalMapping.hasOwnProperty(uppercaseGrade)) {
    return ordinalMapping[uppercaseGrade];
  } else {
    // If the grade is not in the mapping, you can handle it accordingly (e.g., return a default value)
    return "Unknown"; // Or any other default value as needed
  }
}

export { convertGradeToOrdinal };
