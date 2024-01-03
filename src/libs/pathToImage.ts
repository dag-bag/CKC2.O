const url = "https://ckc-strapi-production-33d2.up.railway.app"



const pathToImage = (path: string) => {
    if (path) {
        return url + path
    }
    return ""
}