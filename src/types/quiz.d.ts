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
    visible: number
    id: string,
    title: string,
    slides: Slide[]
}


