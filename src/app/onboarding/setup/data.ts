const Stage = {
  "/onboarding/setup/name": {
    question: "Hello there, Cosmic Kid! 😊 What's your super cool name?",
    next: "/onboarding/setup/standard",
    score: 16,
  },
  "/onboarding/setup/standard": {
    question: "Awesome! 🚀 Which grade are you in, young explorer?",
    next: "/onboarding/setup/birthday",
    score: 32,
  },
  "/onboarding/setup/birthday": {
    question: "Wow, that's exciting! 🎉 When's your special birthday?",
    next: "/onboarding/setup/guardian",
    score: 48,
  },
  "/onboarding/setup/guardian": {
    question: "Nice to meet you, Cosmic Kid! 🚀 What's your superhero parent's name?",
    next: "/onboarding/setup/phone",
    score: 64,
  },
  "/onboarding/setup/phone": {
    question: "Just in case we need to reach you in the Cosmic galaxy 📞, what's your phone number?",
    next: "/onboarding/setup/plan",
    score: 80,
  },
  "/onboarding/setup/plan": {
    question: "Time to choose your Cosmic adventure! 🌌 Which plan do you think will make you a superhero?",
    next: "/onboarding/setup/profile",
    score: 80,
  },
  "/onboarding/setup/profile": {
    question: "You're almost ready to soar through the stars! 🌟 How about creating your own out-of-this-world avatar?",
    next: "/",
    score: 96,
  },
};


const getInfo = (key: string) => {
  return (Stage as any)[key];
};


export default getInfo