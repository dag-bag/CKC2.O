"use client";
import { useState } from "react";
import Card from "@/blocks/UI/Card";
import { Accordion } from "@mantine/core";
const ActivityPreparation = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="my-5">
      <Card title="Activity Preparation">
        <Accordion value={value} onChange={setValue}>
          {supplies.map((item) => {
            const isActive = value == item.title;
            return (
              <Accordion.Item
                key={item.title}
                value={item.title}
                className={isActive ? "!bg-white" : undefined}
              >
                <Accordion.Control>
                  <div className="flex items-center justify-between pr-5">
                    <h5 className="font-heading">
                      {item.title}{" "}
                      {item.type == "printout" && (
                        <button className="text-sm italic px-2 bg-gray-100 rounded-full">
                          Printout
                        </button>
                      )}
                    </h5>
                    <h6 className="font-heading font-medium text-sm text-gray-500">
                      {item.quantity}
                    </h6>
                  </div>
                </Accordion.Control>
                <Accordion.Panel>
                  <section>
                    <p className=" text-gray-800">{item.description}</p>
                  </section>
                  {item?.products?.length !== 0 && (
                    <section className="mt-3 flex gap-2">
                      <button className="text-sm italic px-5 py-1 bg-gray-100 rounded-full border">
                        Buy from CKC Marketplace
                      </button>
                      <button className="text-sm italic px-5 py-1 bg-gray-100 rounded-full border">
                        Download Printout
                      </button>
                    </section>
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
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
