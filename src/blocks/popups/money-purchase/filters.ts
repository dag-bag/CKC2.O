import toast from "react-hot-toast";
import { strapi } from "@/libs/strapi";
const findPromocode = async (promocode: string) => {
    const response = await strapi.find("promocodes", {
        filters: {
            promocode,
        },
        populate: ["users"]
    });
    return response.data as any;
};

const getUsedPromocodes = async (userId: number) => {
    const response = await strapi.find("promocode-usages", {
        filters: {
            userId,
        },
    });
    return response.data as any;
};

export const getPromocodeData = async (userId: number, promocode: string) => {
    const [used_promocodes, promocodes] = await Promise.all([
        getUsedPromocodes(userId),
        findPromocode(promocode),
    ]);

    const used_promocodes_list = await used_promocodes.map(
        (data: any) => data.promocode
    );

    const perfact_promocode = await promocodes.filter(
        (data: any) => !used_promocodes_list.includes(data.promocode)
    );

    return perfact_promocode
};


export const getCouponStatus = (
    from: string,
    to: string,
    type: "percentage" | "flat",
    value: number,
    price: number,
    users: any[],
    id: number
): any => {
    const endDate = new Date(to).getTime();
    const currentDate = new Date().getTime();
    const startDate = new Date(from).getTime();

    if (currentDate < startDate) {
        toast.error("Invalid");
        console.log("invalid:not-started");
        return null;
    }

    if (currentDate >= startDate && currentDate <= endDate) {
        if (users.length == 0) {
            toast.success("Applied");
            return type == "percentage"
                ? applyPercentageDiscount(price, value)
                : applyFlatDiscount(price, value);
        } else {
            if (users.map((user) => user.id).includes(id)) {
                toast.success("Applied");
                return type == "percentage"
                    ? applyPercentageDiscount(price, value)
                    : applyFlatDiscount(price, value);
            } else {
                toast.error("Invalid");
                console.log("invalid:unexpected-user");
                return null;
            }
        }
    }

    if (currentDate > endDate) {
        toast.error("Invalid");
        console.log("invalid:expired");
        return null;
    }
};

const applyPercentageDiscount = (price: number, percentage: number): number => {
    if (percentage < 0 || percentage > 100) {
        return price;
    }

    const discount = (percentage / 100) * price;
    return discount;
};

const applyFlatDiscount = (price: number, flat: number): number => {
    if (flat < 0) {
        throw new Error("Flat discount should be a non-negative value.");
    }

    return price - flat;
};





