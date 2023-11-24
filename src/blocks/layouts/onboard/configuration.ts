enum ColorScheme {
    Blue = "blue",
    Yellow = "yellow",
    Green = "green",
}

interface RouteConfig {
    isBackButtonVisible: boolean;
    score: number;
    next: string;
    colorScheme: ColorScheme;
    banner: string;
    question: string;
}

const Banner1 = "/view-3d-businessman_23-2150709814.avif";
const Banner2 = "/gold-3d.jpg";
const Banner3 = "/3d-green.jpg";

export const routeConfiguration: Record<string, RouteConfig> = {
    "/newboard/name": {
        isBackButtonVisible: true,
        score: 16 * 1,
        next: "/newboard/grade",
        colorScheme: ColorScheme.Blue,
        banner: Banner1,
        question: "Hello there, Cosmic Kid! <br /> What&apos;s your super cool name?",
    },
    "/newboard/grade": {
        isBackButtonVisible: true,
        score: 16 * 2,
        next: "/newboard/birthday",
        colorScheme: ColorScheme.Yellow,
        banner: Banner2,
        question: "Awesome! Which grade are you in, young explorer?",
    },
    "/newboard/birthday": {
        isBackButtonVisible: true,
        score: 16 * 3,
        next: "/newboard/mobile",
        colorScheme: ColorScheme.Green,
        banner: Banner3,
        question: "Wow, that's exciting! 🎉 When's your special birthday?",
    },
    "/newboard/mobile": {
        isBackButtonVisible: true,
        score: 16 * 4,
        next: "/newboard/location",
        colorScheme: ColorScheme.Blue,
        banner: Banner1,
        question: "Just in case we need to reach you in the Cosmic galaxy 📞, what's your phone number?",
    },
    "/newboard/location": {
        isBackButtonVisible: true,
        score: 16 * 5,
        next: "/newboard/avatar",
        colorScheme: ColorScheme.Yellow,
        banner: Banner1,
        question: "We'd like to know more about your location in the Cosmic galaxy!  🌍✨ ",
    },
    "/newboard/avatar": {
        isBackButtonVisible: true,
        score: 16 * 6,
        next: "/newboard/location",
        colorScheme: ColorScheme.Green,
        banner: Banner1,
        question: "How about creating your own out-of-this-world avatar?",
    },
};
