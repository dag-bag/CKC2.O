const list_of_grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function haveSimilarities(array1: string[], array2: string[]): boolean {
    for (const str1 of array1) {
        for (const str2 of array2) {
            if (areStringsSimilar(str1, str2)) {
                return true; // Found similarities
            }
        }
    }
    return false; // No similarities found
}

export function areStringsSimilar(str1: string, str2: string): boolean {
    return str1 === str2;
}


export const gradeConvertor = (grades: string | string[] | undefined) => {
    if (!grades) {
        return list_of_grades;
    }
    if (typeof grades == "string") {
        return grades.split(",");
    }
    if (Array.isArray(grades)) {
        return grades.length == 0 ? list_of_grades : grades;
    }
};


export const dynamicallyTemplateTypeProvider = (
    name: "courses" | "videos" | "comics" | "nacs" | "lives",
    live_type?: "live" | "upcoming" | "recorded"
) => {
    switch (name) {
        case "courses":
            return "course";
        case "videos":
            return "video";
        case "lives":
            return live_type == "live"
                ? "current:live"
                : live_type == "upcoming"
                    ? "upcoming:live"
                    : "recorded:live";
        case "comics":
            return "comic";
        case "nacs":
            return "nac";
    }
};
