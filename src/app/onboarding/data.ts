const Stage = {
    "/onboarding/name": {
      question: "Hey 👋 Cosmic Kids! What should I call you?",
      next: "/onboarding/standard",
      score: 25,
    },
    "/onboarding/standard": {
      question: "Hey Your standard",
      next: "/onboarding/profile",
      score: 50,
    },
    "/onboarding/profile": {
      question: "Create your avatar",
      next: "_",
      score: 75,
    },
  };


const getInfo = (key: string) => {
    return (Stage as any)[key];
  };
  

  export default getInfo