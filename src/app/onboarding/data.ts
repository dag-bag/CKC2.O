const Stage = {
  "/onboarding/name": {
    question: "Hello there, Cosmic Kid! 😊 What's your super cool name?",
    next: "/onboarding/standard",
    score: 16,
  },
  "/onboarding/standard": {
    question: "Awesome! 🚀 Which grade are you in, young explorer?",
    next: "/onboarding/birthday",
    score: 32,
  },
  "/onboarding/birthday": {
    question: "Wow, that's exciting! 🎉 When's your special birthday?",
    next: "/onboarding/guardian",
    score: 48,
  },
  "/onboarding/guardian": {
    question: "Nice to meet you, Cosmic Kid! 🚀 What's your superhero parent's name?",
    next: "/onboarding/phone",
    score: 64,
  },
  "/onboarding/phone": {
    question: "Just in case we need to reach you in the Cosmic galaxy 📞, what's your phone number?",
    next: "/onboarding/plan",
    score: 80,
  },
  "/onboarding/plan": {
    question: "Time to choose your Cosmic adventure! 🌌 Which plan do you think will make you a superhero?",
    next: "/onboarding/profile",
    score: 80,
  },
  "/onboarding/profile": {
    question: "You're almost ready to soar through the stars! 🌟 How about creating your own out-of-this-world avatar?",
    next: "/",
    score: 96,
  },
};



const getInfo = (key: string) => {
    return (Stage as any)[key];
  };
  

  export default getInfo