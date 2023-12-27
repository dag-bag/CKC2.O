import Categorizer from "@/blocks/molecules/categorizer";
import { VIRTUAL_PRODUCTS } from "@/strapi/services/api";
const VirtualShopPage = async () => {
  const data = await VIRTUAL_PRODUCTS({ type: "GET" });
  const avatars = data?.filter((item: any) => item.type === "avatar");
  const banners = data?.filter((item: any) => item.type === "avatar");
  return (
    <div>
      {JSON.stringify(data)}
      <Categorizer title="Avatars">
        <div className="flex gap-4 flex-wrap  p-5">
          {avatars.map((avt: any) => (
            <Link
              href={`/shop/virtual/${avt.id}`}
              key={avt}
              className=" flex-col flex gap-2 bg-white"
            >
              <div className="w-[250px]  center h-[250px] rounded-xl">
                <Image
                  className="overflow-hidden rounded-full"
                  src={"/avatars/asian-man.png"}
                  alt="profile"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
                <h4 className="font-amar text-lg">{avt.title}</h4>
                <div className="flex items-center gap-2 font-heading font-semibold  border-l pl-5 border-gray-200  ">
                  {avt.coins}
                  <Image
                    src={"/assets/coins.png"}
                    alt="coins"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Categorizer>

      <br />
      <Categorizer title="Banners">
        <div className="flex gap-4 flex-wrap  p-5">
          {banners.map((avt: any) => (
            <Link
              href={`/shop/virtual/${avt.id}`}
              key={avt}
              className=" flex-col flex gap-2 bg-white"
            >
              <div className="w-[320px] center h-[250px] rounded-xl">
                <Image
                  src={"/bnr.png"}
                  alt="profile"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
                <h4 className="font-amar text-lg">{avt.title}</h4>
                <div className="flex items-center gap-2 font-heading font-semibold  border-l pl-5 border-gray-200  ">
                  {avt.coins}
                  <Image
                    src={"/assets/coins.png"}
                    alt="coins"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Categorizer>
    </div>
  );
};
export default VirtualShopPage;

const avts = [
  "/avatars/asian-man.png",
  "/avatars/black-man.png",
  "/avatars/punjabi.png",
  "/avatars/student.png",
  "/avatars/western-man.png",
];

const bns = ["/bnr.png", "/bnr.png", "/bnr.png", "/bnr.png"];

import Image from "next/image";
import Link from "next/link";

const sample = [
  {
    imageUrl: "https://example.com/avatar-fantasy-heroes.jpg",
    title: "Fantasy Heroes Pack",
    description: "Unlock a collection of mythical avatars for your profile.",
    coins: 100,
    slug: "fantasy-heroes-avatar-pack",
    type: "avatar",
  },
  {
    imageUrl: "https://example.com/galactic-landscapes-banners.jpg",
    title: "Galactic Landscapes Banners",
    description: "Spruce up your profile with stunning space-themed banners.",
    coins: 150,
    slug: "galactic-landscapes-banners-set",
    type: "banner",
  },
  {
    imageUrl: "https://example.com/animal-friends-avatar-bundle.jpg",
    title: "Animal Friends Bundle",
    description: "Adorable animal avatars to express your personality.",
    coins: 120,
    slug: "animal-friends-avatar-bundle",
    type: "avatar",
  },
  {
    imageUrl: "https://example.com/abstract-art-banners.jpg",
    title: "Abstract Art Banners",
    description: "Add a touch of creativity with these abstract banners.",
    coins: 180,
    slug: "abstract-art-banners-collection",
    type: "banner",
  },
  {
    imageUrl: "https://example.com/sci-fi-explorers-avatar-set.jpg",
    title: "Sci-Fi Explorers Set",
    description: "Unlock futuristic avatars inspired by space exploration.",
    coins: 110,
    slug: "sci-fi-explorers-avatar-set",
    type: "avatar",
  },
  {
    imageUrl: "https://example.com/nature-vibes-banners.jpg",
    title: "Nature Vibes Banner Pack",
    description: "Connect with nature through these serene banner images.",
    coins: 160,
    slug: "nature-vibes-banner-pack",
    type: "banner",
  },
  {
    imageUrl: "https://example.com/retro-gaming-avatar-collection.jpg",
    title: "Retro Gaming Avatar Collection",
    description: "Travel back in time with classic gaming avatars.",
    coins: 130,
    slug: "retro-gaming-avatar-collection",
    type: "avatar",
  },
  {
    imageUrl: "https://example.com/music-lovers-banner-set.jpg",
    title: "Music Lovers Banner Set",
    description: "Express your love for music with vibrant banner designs.",
    coins: 140,
    slug: "music-lovers-banner-set",
    type: "banner",
  },
  {
    imageUrl: "https://example.com/superhero-avatar-pack.jpg",
    title: "Superhero Avatar Pack",
    description: "Become a virtual superhero with these dynamic avatars.",
    coins: 200,
    slug: "superhero-avatar-pack",
    type: "avatar",
  },
];
