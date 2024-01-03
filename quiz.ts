export interface Question {
    text: string,
    imageUrl?: string,
    audioUrl?: string
}

export interface Options {
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
        // {
        //     duration: 15,
        //     answer: ['stars', 'moon'], // Values of correct options
        //     question: {
        //         imageUrl: '/upgrade.png',
        //         text: 'Select all celestial bodies that are not part of our solar system\'s planets.',
        //     },
        //     action: {
        //         type: 'multiselect',
        //         options: [
        //             { name: 'Sun', value: 'sun' },
        //             { name: 'Earth', value: 'earth' },
        //             { name: 'Stars', value: 'stars' },
        //             { name: 'Moon', value: 'moon' },
        //         ],
        //     },
        // },
        // {
        //     duration: 20,
        //     answer: 'Dark matter', // Value of correct option
        //     question: {
        //         imageUrl: '/upgrade.png',
        //         text: 'What constitutes approximately 50% of the total matter in the universe?',
        //     },
        //     action: {
        //         type: 'select',
        //         options: [
        //             { name: 'Dark energy', value: 'Dark energy' },
        //             { name: 'Dark matter', value: 'Dark matter' },
        //             { name: 'Visible matter', value: 'Visible matter' },
        //             { name: 'Anti-matter', value: 'Anti-matter' },
        //         ],
        //     },
        // },



        // {
        //     duration: 0,
        //     answer: "true",
        //     question: {
        //         imageUrl: "/tile.png",
        //         text: "are we have any moon?"
        //     },
        //     action: {
        //         type: "boolean",
        //         options: [{
        //             name: "true",
        //             value: "true"
        //         },
        //         {
        //             name: "false",
        //             value: "false"
        //         }]
        //     },

        // },
        // {
        //     duration: 10,
        //     answer: "anju",
        //     question: {
        //         text: "name your teacher."
        //     },
        //     action: {
        //         type: "textinput",
        //         input: {
        //             pleaceholder: "your teacher name"
        //         }
        //     },

        // },
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

export const astronomyQuiz: Quiz = {
    id: '2',
    title: 'Astronomy Quiz',
    slides: [
        {
            duration: 15,
            answer: ['Stars', 'Moon'], // Values of correct options
            question: {
                imageUrl: '/upgrade.png',
                text: 'Select all celestial bodies that are not part of our solar system\'s planets.',
            },
            action: {
                type: 'multiselect',
                options: [
                    { name: 'Sun', value: 'Sun' },
                    { name: 'Earth', value: 'Earth' },
                    { name: 'Stars', value: 'Stars' },
                    { name: 'Moon', value: 'Moon' },
                ],
            },
        },
        {
            duration: 20,
            answer: 'Dark matter', // Value of correct option
            question: {
                imageUrl: '/upgrade.png',
                text: 'What constitutes approximately 50% of the total matter in the universe?',
            },
            action: {
                type: 'select',
                options: [
                    { name: 'Dark energy', value: 'Dark energy' },
                    { name: 'Dark matter', value: 'Dark matter' },
                    { name: 'Visible matter', value: 'Visible matter' },
                    { name: 'Anti-matter', value: 'Anti-matter' },
                ],
            },
        },
        {
            duration: 10,
            answer: 'true',
            question: {
                imageUrl: '/upgrade.png',
                text: 'True or False: Do we have any moon?',
            },
            action: {
                type: 'boolean',
                options: [
                    { name: 'True', value: 'true' },
                    { name: 'False', value: 'false' },
                ],
            },
        },
        {
            duration: 15,
            answer: 'Mars',
            question: {
                text: 'Name your favorite astronomical object.',
            },
            action: {
                type: 'textinput',
                input: {
                    pleaceholder: 'Your favorite astronomical object',
                },
            },
        },
        {
            duration: 15,
            answer: ['Mercury', 'Venus', 'Earth', 'Mars'], // Values of correct options in order
            question: {
                imageUrl: '/upgrade.png',
                text: 'Arrange the following planets based on their position in our solar system.',
            },
            action: {
                type: 'order',
                options: [
                    { name: 'Mars', value: 'Mars' },
                    { name: 'Mercury', value: 'Mercury' },
                    { name: 'Earth', value: 'Earth' },
                    { name: 'Venus', value: 'Venus' },
                ],
            },
        },
        {
            duration: 15,
            answer: ['Earth', 'Mars'], // Values of correct options
            question: {
                imageUrl: '/upgrade.png',
                text: 'Identify all terrestrial planets in our solar system.',
            },
            action: {
                type: 'multiselect',
                options: [
                    { name: 'Jupiter', value: 'Jupiter' },
                    { name: 'Earth', value: 'Earth' },
                    { name: 'Neptune', value: 'Neptune' },
                    { name: 'Mars', value: 'Mars' },
                ],
            },
        },
        {
            duration: 15,
            answer: 'Mars', // Value of correct option
            question: {
                imageUrl: '/upgrade.png',
                text: 'Which planet is known as the "Red Planet"?',
            },
            action: {
                type: 'select',
                options: [
                    { name: 'Venus', value: 'Venus' },
                    { name: 'Mars', value: 'Mars' },
                    { name: 'Jupiter', value: 'Jupiter' },
                    { name: 'Saturn', value: 'Saturn' },
                ],
            },
        },
        {
            duration: 10,
            answer: 'true',
            question: {
                imageUrl: '/upgrade.png',
                text: 'True or False: The sun is a star.',
            },
            action: {
                type: 'boolean',
                options: [
                    { name: 'True', value: 'true' },
                    { name: 'False', value: 'false' },
                ],
            },
        },
        {
            duration: 15,
            answer: 'Titan',
            question: {
                imageUrl: '/upgrade.png',
                text: 'Write the name of the largest moon in our solar system.',
            },
            action: {
                type: 'textinput',
                input: {
                    pleaceholder: 'Name of the moon',
                },
            },
        },
        {
            duration: 20,
            answer: ['Triangulum Galaxy', 'Milky Way Galaxy', 'Andromeda Galaxy', 'Messier 87 (M87)'], // Values of correct options in order
            question: {
                imageUrl: '/upgrade.png',
                text: 'Arrange the following galaxies based on their size, from smallest to largest.',
            },
            action: {
                type: 'order',
                options: [
                    { name: 'Andromeda Galaxy', value: 'Andromeda Galaxy' },
                    { name: 'Milky Way Galaxy', value: 'Milky Way Galaxy' },
                    { name: 'Triangulum Galaxy', value: 'Triangulum Galaxy' },
                    { name: 'Messier 87 (M87)', value: 'Messier 87 (M87)' },
                ],
            },
        },
    ],
};
