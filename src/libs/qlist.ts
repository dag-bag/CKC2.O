import type TypeQlist from "@/app/(outer)/qlist/type";
import { Slide, Action, Quiz } from "../../quiz";


const answerFormentConvertor = (
    answer: string,
    options: { name: string; value: string }[],
    type: "textinput" | "select" | "multiselect" | "order" | "boolean"
) => {
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



const getImage = (path: string) => {
    return `https://ckc-strapi-production-33d2.up.railway.app${path}`;
};

export const quizParser = (qlist: TypeQlist): Quiz => {
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
                    ? getImage(qlide.image.formats.large.url)
                    : undefined,
                audioUrl: "",
            },

            // duration
            duration: qlide?.duration as number,
        };
    });

    return {
        slides,
        title: qlist.title,
        id: qlist.id.toString(),
    };
};