import type TypeQlist from "@/types/qlist";
import { Slide, Action, Quiz } from "../types/quiz";
const answerFormentConvertor = (
    answer: string,
    options: { name: string; value: string }[],
    type: "textinput" | "select" | "multiselect" | "order" | "boolean"
) => {
    console.log(answer)
    if (type == "textinput") return answer;
    if (type == "select") return options[parseInt(answer) - 1]?.value;
    if (type == "multiselect")
        return answer
            .split(",")
            .map((answer) => options[parseInt(answer) - 1]?.value);
    if (type == "order")
        return answer
            .split(",")
            .map((index) => (options as any)[parseInt(index) - 1].value);
};





export const parser = (qlist: TypeQlist): Quiz => {
    const slides: Slide[] = qlist.qlides.map((qlide) => {
        return {
            // action
            action: {
                type: qlide.type as any,
                // action : options
                options: qlide.options
                    ? qlide.options.length == 0
                        ? undefined
                        : qlide.options.map(({ name, value }) => ({ name, value }))
                    : [],
                // action : textinput
                input:
                    qlide.type == "textinput"
                        ? {
                            placeholder: qlide.placeholder,
                        }
                        : undefined,
            } as Action,

            // answer
            answer: answerFormentConvertor(
                qlide.answer,
                qlide?.options as any,
                qlide.type as any
            ) as any,


            // question

            question: {
                text: qlide.question,
                imageUrl: qlide.image
                    ? qlide.image.url
                    : undefined,
                audioUrl: "",
            },

            // duration
            duration: qlide?.duration as number,
        };
    });

    return {
        slides: randomizeArrayOrder(slides).slice(0, qlist.visible),
        title: qlist.title,
        id: qlist.id.toString(),
        visible: qlist.visible
    };
};


function randomizeArrayOrder(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}