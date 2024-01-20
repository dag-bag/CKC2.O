
interface body {
    email: string
}
import { strapi } from "@/libs/strapi"

export const POST = async (req: Request) => {
    const body: body = await req.json()
    try {
        if (!isYahooOrGmail(body.email)) {
            return Response.json({
                ok: false,
                message: "We only accept gmail or yahoo mails"
            })
        }

        const existed_user = await strapi.find<any>("users", {
            filters: {
                email: body.email
            }
        })


        if ((existed_user as any).length) {
            return Response.json({
                ok: false,
                message: "Email is already verified go login"
            })
        }

        return Response.json({
            ok: true,
            email: body.email,
            message: "Valid email",
        }, { status: 200 })

    }
    catch (error: any) {
        return Response.json({
            ok: false,
            message: error.message
        }, { status: 200 })
    }

}

function isYahooOrGmail(email: string): boolean {
    const yahooRegex = /^[a-zA-Z0-9._%+-]+@yahoo\.com$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return yahooRegex.test(email) || gmailRegex.test(email);
}   