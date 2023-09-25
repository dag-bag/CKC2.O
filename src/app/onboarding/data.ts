const Stage = {
    "/onboarding/name": {
      question: "Hey 👋 Cosmic Kids! What should I call you?",
      next: "/onboarding/standard",
      score: 16,
    },
    "/onboarding/standard": {
      question: "Let me know your Grade!",
      next: "/onboarding/birthday",
      score: 32,
    },
    "/onboarding/birthday": {
      question: "Your birthday date?",
      next: "/onboarding/guardian",
        score: 48,
      },
     "/onboarding/guardian": {
      question: "Your Parent Name?",
      next: "/onboarding/phone",
        score: 64,
      },
     "/onboarding/phone": {
      question: "Your Phone Number",
      next: "/onboarding/plan",
        score: 80,
        },
     "/onboarding/plan": {
       question: "Choose Plan...",
       next: "/onboarding/profile",
         score: 80,
         },
    "/onboarding/profile": {
      question: "Create your avatar",
      next: "/",
        score: 96,
      },
  };


const getInfo = (key: string) => {
    return (Stage as any)[key];
  };
  

  export default getInfo