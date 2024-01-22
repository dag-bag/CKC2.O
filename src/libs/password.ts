import { strapi } from "./strapi";
export const ForgetPassword = async (email: string) => {
    const response = await strapi.forgotPassword({ email })
    return response
}
export const ChangePasswordWithTokan = async (code: string, password: string, passwordConfirmation: string) => {
    const response = await strapi.resetPassword({ code, password, passwordConfirmation })
    return response
}