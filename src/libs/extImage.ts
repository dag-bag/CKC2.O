const extImage = (thumbnailObj: any) => {
    const url = thumbnailObj?.at(0)?.url ?? ""
    // return "https://ckc-strapi-production-33d2.up.railway.app" + url;
    return url
};

export default extImage;