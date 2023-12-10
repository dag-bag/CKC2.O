const validateRewarded = (achievements: any[], rewards: any[]): boolean => {
  const list_of_rewards = new Set(rewards.map((b) => b.id.toString()));
  const list_of_user_rewards = new Set(achievements.map((a) => a.reward_id));

  return list_of_user_rewards.has([...(list_of_rewards as any)][0]);
};

export { validateRewarded };
