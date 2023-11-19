const Stage = {
  "/onboard/name": {
    question: "Hello there, Cosmic Kid! 😊 What's your super cool name?",
    next: "/onboard/standard",
    score: 16,
  },
  "/onboard/standard": {
    question: "Awesome! 🚀 Which grade are you in, young explorer?",
    next: "/onboard/birthday",
    score: 32,
  },
  "/onboard/birthday": {
    question: "Wow, that's exciting! 🎉 When's your special birthday?",
    next: "/onboard/phone",
    score: 48,
  },
  "/onboard/phone": {
    question: "Just in case we need to reach you in the Cosmic galaxy 📞, what's your phone number?",
    next: "/onboard/location",
    score: 80,
  },
  "/onboard/location": {
    question: "We'd like to know more about your location in the Cosmic galaxy!  🌍✨ ",
    next: "/onboard/profile ",
    score: 80,
  },
  "/onboard/plan": {
    question: "Time to choose your Cosmic adventure! 🌌 Which plan do you think will make you a superhero?",
    next: "/onboard/profile",
    score: 80,
  },
  "/onboard/profile": {
    question: "You're almost ready to soar through the stars! 🌟 How about creating your own out-of-this-world avatar?",
    next: "/onboard/complete",
    score: 96,
  },
  "/onboard/complete": {
    question: "Yay! your profile is completed successfully. Oh you got amazing rewards!.",
    next: "/dashboard",
    score: 100
  },
};


const getInfo = (key: string) => {
  return (Stage as any)[key];
};


export default getInfo