// fetchData.ts
import { strapi } from "@/libs/strapi";

interface BaseAction {
  type: string;
  populate?: string[];
  fields?: string[];
}

interface GetAction extends BaseAction {
  type: "GET";
}

interface GetOneAction extends BaseAction {
  type: "GET_ONE";
  payload: number;
}

export type Action = GetAction | GetOneAction;

const fetchData = async <T>(
  entity: string,
  action: Action,
  defaultPopulate: string[] = []
): Promise<T[]> => {
  try {
    const resPopulate = action.populate || defaultPopulate;

    switch (action.type) {
      case "GET":
        const resAll = await strapi.find(entity, {
          populate: resPopulate,
          fields: action.fields || [],
        });
        return resAll.data;

      case "GET_ONE":
        const resOne = await strapi.findOne(entity, action.payload, {
          populate: resPopulate,
          fields: action.fields || [],
        });
        return resOne ? resOne.data : {};

      default:
        return [];
    }
  } catch (error) {
    console.error(`Error fetching ${entity.toLowerCase()}s:`, error);
    throw new Error("Something Went Wrong");
  }
};

export { fetchData };
