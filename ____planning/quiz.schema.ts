export interface Quiz {
    title: string;
    slides: Slide[];
}

interface Slide {
    id: string;
    question: {
        text?: string;
        mediaUrl: string;
        type: "text" | "video" | "audio" | "image";
    };
    action: SlideAction;
}

type SlideAction = SelectAction | BooleanAction | InputAction | SelectMultipleAction;

interface SelectAction {
    type: "select";
    select: Select;
}

interface BooleanAction {
    type: "boolean";
}

interface InputAction {
    type: "input";
    input: Input;
}

interface SelectMultipleAction {
    type: "select-multiple";
    selectMultiple: SelectMultiple;
}

interface Select {
    answer: string;
    defaultSelected: string;
    options: SelectOption[];
}

interface SelectOption {
    name: string;
    value: string;
}

interface Input {
    placeholder: string;
}

interface SelectMultiple {
    answers: string[];
    defaultSelected: string;
    options: SelectOption[];
}
