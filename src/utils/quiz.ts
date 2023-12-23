interface Achievement {
  quiz_id: string; // Adjust the type according to your actual data structure
  // Add other properties if needed
}

// Global utility function to check if a quiz is completed
export const getQuizCompletionStatus = (
  quizId: string,
  achievements: Achievement[] | undefined
): boolean => {
  console.log(achievements, quizId);
  return !!achievements?.some(
    (achievement) => parseInt(achievement.quiz_id) === parseInt(quizId)
  );
};
