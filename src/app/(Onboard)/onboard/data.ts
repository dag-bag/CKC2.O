const Stage = {
  "/onboard/name": {
    score: 14,
    next: "/onboard/standard",
    question: "Hello there, Cosmic Kid! 😊 What's your super cool name?",
  },
  "/onboard/standard": {
    score: 28,
    next: "/onboard/birthday",
    question: "Awesome! 🚀 Which grade are you in, young explorer?",
  },
  "/onboard/birthday": {
    score: 42,
    next: "/onboard/phone",
    question: "Wow, that's exciting! 🎉 When's your special birthday?",
  },
  "/onboard/phone": {
    score: 46,
    next: "/onboard/location",
    question: "Just in case we need to reach you in the Cosmic galaxy 📞, what's your phone number?",
  },
  "/onboard/location": {
    score: 70,
    next: "/onboard/profile ",
    question: "We'd like to know more about your location in the Cosmic galaxy!  🌍✨ ",
  },
  "/onboard/profile": {
    score: 84,
    next: "/onboard/complete",
    question: "You're almost ready to soar through the stars! 🌟 How about creating your own out-of-this-world avatar?",
  },
  "/onboard/complete": {
    score: 100,
    next: "/dashboard",
    question: "Yay! your profile is completed successfully. Oh you got amazing rewards!.",
  },
};


const getInfo = (key: string) => {
  return (Stage as any)[key];
};


export default getInfo