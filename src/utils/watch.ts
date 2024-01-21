import { strapi } from "@/libs/strapi"
import toast from "react-hot-toast";
const WATCHED = "watcheds"

export const markComplete = async ({ watch_id, explorationTime }: any, callback: () => void) => {
    try {
        await strapi
            .update(WATCHED, watch_id, {
                watch_progress: explorationTime,
                completed: true,
            }).then(callback);
    }
    catch (err) {
        toast.error("error")
        console.log("error:while-marking-module-complete")
    }
}

export const updateWatch = async (watch_id: string, counter: number) => {
    return await strapi.update(WATCHED, watch_id, {
        watch_progress: counter,
    });
}

export const createWatch = async (moduleId: string, courseId: string, userId: string, callback: () => void) => {
    try {
        await strapi.create(WATCHED, {
            type: "course",
            user_id: userId,
            watch_progress: 0,
            course_id: courseId,
            content_id: moduleId,
            watched_date: new Date().toISOString(),
        }).then(callback)
    } catch (error) {
        toast.error("error")
        console.log("error:while-creating-module-entry")
    }
}