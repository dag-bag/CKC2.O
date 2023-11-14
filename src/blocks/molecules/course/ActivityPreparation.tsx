import Card from "@/blocks/UI/Card";
const ListItem = ({
  type,
  title,
  quantity,
  products,
}: (typeof supplies)[0]) => {
  return (
    <div className=" even:border-y border-gray-100 px-5 py-2 mb-1 flex items-center justify-between font-heading">
      <div className="flex items-center gap-5">
        <h3 className="text-sm">{title}</h3>
        <div className="flex gap-2">
          {products?.length !== 0 && (
            <button className="text-xs px-3 py-1 bg-gray-100 rounded-full border">
              Buy
            </button>
          )}

          {type == "printout" && (
            <button className="text-xs  px-3 py-1 bg-gray-100 rounded-full border">
              Download
            </button>
          )}
        </div>
      </div>
      <h5 className="text-sm text-gray-600">{quantity}</h5>
    </div>
  );
};

const ActivityPreparation = () => {
  return (
    <div className="my-5">
      <Card
        description="This is title for the Activity Preparation Module"
        title="Activity Preparation"
      >
        {supplies.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </Card>
    </div>
  );
};

export default ActivityPreparation;

const supplies = [
  {
    title: "Big Dipper Star Poster",
    description:
      "High-quality printed poster of the Big Dipper constellation. Suitable for classroom use or personal reference.",
    type: "printout",
    quantity: "Print 25 copies",
    products: [
      {
        name: "Big Dipper Poster",
        productImage: "/big_dipper_poster.png",
        description: "Glossy finish, A3 size",
      },
    ],
  },

  {
    title: "Starry Night Sky Maps",
    description:
      "A collection of various star maps showing different constellations. Ideal for classroom activities or personal exploration.",
    type: "printout",
    quantity: "Print 20 copies",
    products: [
      {
        name: "Starry Night Maps",
        productImage: "/starry_night_maps.png",
        description: "Variety of constellation maps included",
      },
    ],
  },

  {
    title: "Safety Scissors",
    description:
      "Child-safe scissors suitable for classroom activities or projects. Designed for easy and safe use by kids.",
    type: "tool",
    quantity: "40 Pairs",
    products: [],
  },

  {
    title: "Assorted Color Stickers",
    description:
      "Colorful stickers for marking or highlighting specific stars or constellations on maps. Easy to use and distribute.",
    type: "simple",
    quantity: "150 Sheets",
    products: [],
  },

  {
    title: "Assorted Push Pins",
    description:
      "Metallic push pins for pinning maps or posters onto boards or walls. Suitable for displaying star maps.",
    type: "simple",
    quantity: "100 Pins",
    products: [],
  },
];
