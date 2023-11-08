interface Slide {
    name: string;
    media: {
        src: string;
        type: "ppt" | "img" | "video";
    };
}

interface PreparationMaterial {
    title: string;
    quantity: string;
    description?: string;
    product?: {
        link: string;
    };
    print?: {
        url: string;
    };
}

interface ActivityModule {
    preparations: PreparationMaterial[];
}

interface ModuleDetails {
    count: number;
    duration: string;
    languages: string[];
}

interface Module {
    name: string;
    slides: Slide[];
    rewards: Reward[],
    description: string; //
    explorationTime: number; // in milliseconds
    activity?: ActivityModule;
    type: "normal" | "activity";
    minExplorationTime: number;
}


interface Reward {
    id: string,
    type: "coin" | "batch" | "avatar" | "stars",
    quantity: 5,
    media?: {
        type: "batch" | "avatar",
        url: string
    }
}

interface Course {
    previewMedia: {
        src: string;
        type: "video" | "picture";
    };
    contentMedia: {
        src: string;
        type: "video";
    };
    name: string;
    price: number;
    tags: string[],
    duration: number; // in milliseconds
    modules: Module[];
    rewards: Reward[];
    visibility: "all" | "only-premium";
}
