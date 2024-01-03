export interface Option {
    id: number;
    name: string;
    value: string;
}

export interface Question {
    image?: any
    id: number;
    question: string;
    type: 'select' | 'textinput' | 'multiselect' | 'order';
    duration: number | null;
    answer: string;
    placeholder?: string;
    options?: Option[];
}

export interface Quiz {
    id: number;
    title: string;
    desc: string | null;
    visible: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    qlides: Question[];
}


export default Quiz;
