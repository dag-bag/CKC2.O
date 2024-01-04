const extImage = (thumbnailObj: any) => {
    const url = thumbnailObj?.at(0)?.url ?? ""
    console.log(url)
    return "https://ckc-strapi-production-33d2.up.railway.app" + url;
};

export default extImage;