export const showUpgradables = (
    current_plan: string,
    this_plan: string
): any => {
    if (current_plan == "premium") return false;
    if (current_plan == "free") return ["basic", "premium"].includes(this_plan);
    if (current_plan == "basic") return ["premium"].includes(this_plan);
};
