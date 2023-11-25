enum ColorScheme {
    Blue = "blue",
    Yellow = "yellow",
    Green = "green",
}

interface RouteConfig {
    next: string;
    score: number;
    banner: string;
    question: string;
    colorScheme: ColorScheme;
    isBackButtonVisible: boolean;
}


export const routeConfiguration: Record<string, RouteConfig> = {
    "/newboard/name": {
        isBackButtonVisible: false,
        score: 16 * 1,
        next: "/newboard/grade",
        colorScheme: ColorScheme.Blue,
        banner: "/board/name.png",
        question: "Hello there, Cosmic Kid! What&apos;s your super cool name?",
    },
    "/newboard/grade": {
        isBackButtonVisible: true,
        score: 16 * 2,
        next: "/newboard/birthday",
        colorScheme: ColorScheme.Yellow,
        banner: "/board/pencil.png",
        question: "Awesome! Which grade are you in, young explorer?",
    },
    "/newboard/birthday": {
        isBackButtonVisible: true,
        score: 16 * 3,
        next: "/newboard/mobile",
        colorScheme: ColorScheme.Green,
        banner: "/board/grade.png",
        question: "Wow, that's exciting! 🎉 When's your special birthday?",
    },
    "/newboard/mobile": {
        isBackButtonVisible: true,
        score: 16 * 4,
        next: "/newboard/location",
        colorScheme: ColorScheme.Blue,
        banner: "/board/mobile.png",
        question: "Just in case we need to reach you in the Cosmic galaxy 📞, what's your phone number?",
    },
    "/newboard/location": {
        isBackButtonVisible: true,
        score: 16 * 5,
        next: "/newboard/avatar",
        colorScheme: ColorScheme.Yellow,
        banner: "/board/location.png",
        question: "We'd like to know more about your location in the Cosmic galaxy!  🌍✨ ",
    },
    "/newboard/avatar": {
        isBackButtonVisible: true,
        score: 16 * 6,
        next: "/newboard/name",
        colorScheme: ColorScheme.Green,
        banner: "/board/avatar.png",
        question: "How about creating your own out-of-this-world avatar?",
    },
};
