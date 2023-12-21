interface Question {
    text: string,
    imageUrl?: string,
    audioUrl?: string
}

interface Options {
    name: string,
    value: string,
}

export interface Action {
    type: "select" | "multiselect" | "boolean" | "textinput" | "order"
    options?: Options[],
    input?: {
        pleaceholder?: string,
    }
}


export interface Slide {
    action: Action,
    duration: number,
    question: Question,
    answer: string | string[],
}



export interface Quiz {
    id: string,
    title: string,
    slides: Slide[]
}

export const basicQuiz: Quiz = {
    id: '1',
    title: 'basic quiz',
    slides: [
        {
            duration: 10,
            answer: ["sun", "earth", "stars"],
            question: {
                imageUrl: "/tile.png",
                text: "Select all of those which are not our moon"
            },
            action: {
                type: "multiselect",
                options: [{
                    name: "moon",
                    value: "moon"
                },
                {
                    name: "sun",
                    value: "sun"
                },
                {
                    name: "earth",
                    value: "earth"
                },
                {
                    name: "stars",
                    value: "stars"
                },
                ]
            },

        },
        {
            duration: 10,
            answer: "moon",
            question: {
                imageUrl: "/tile.png",
                text: "Dark matter constitutes approximately 50% of the total matter in the universe."
            },
            action: {
                type: "select",
                options: [{
                    name: "moon",
                    value: "moon"
                },
                {
                    name: "sun",
                    value: "sun"
                },
                {
                    name: "earth",
                    value: "earth"
                },
                {
                    name: "stars",
                    value: "stars"
                },
                ]
            },

        },



        {
            duration: 0,
            answer: "true",
            question: {
                imageUrl: "/tile.png",
                text: "are we have any moon?"
            },
            action: {
                type: "boolean",
                options: [{
                    name: "true",
                    value: "true"
                },
                {
                    name: "false",
                    value: "false"
                }]
            },

        },
        {
            duration: 10,
            answer: "anju",
            question: {
                text: "name your teacher."
            },
            action: {
                type: "textinput",
                input: {
                    pleaceholder: "your teacher name"
                }
            },

        },
        {
            duration: 10,
            answer: ["Mercury", "Venus", "Earth", "Mars"],
            question: {
                imageUrl: "/tile.png",
                text: "Arrage planets position on our solar system."
            },
            action: {
                type: "order",
                options: [{
                    name: "Mercury",
                    value: "Mercury"
                },
                {
                    name: "Mars",
                    value: "Mars"
                },
                {
                    name: "Earth",
                    value: "Earth"
                },
                {
                    name: "Venus",
                    value: "Venus"
                },
                ]
            },

        },


    ]

}