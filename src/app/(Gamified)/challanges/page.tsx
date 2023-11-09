"use client";
import clsx from "clsx";
import Link from "next/link";
import { Tabs } from "@mantine/core";
import { BiSearchAlt } from "react-icons/bi";
import Container from "@/blocks/UI/PageContainer";

import Card from "@/blocks/UI/Card";

const BedgesPage = () => {
  const SeeMoreButton = <button>see more</button>;
  return (
    <Container gridType="single">
      {/* hero */}
      <div className="h-[330px] bg-cyan-50 rounded-xl center flex-col">
        <h1 className="text-3xl font-heading font-bold">Challanges</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* filter */}
      <div className="flex items-center justify-between my-4">
        <div className="w-[300px] h-[50px] drop-shadow-md-- bg-gray-100  flex gap-3 items-center rounded-full px-5">
          <BiSearchAlt color="gray" size={25} />
          <input
            placeholder="Search Question"
            className="bg-transparent w-full border-none outline-none text-md"
            type="text"
          />
        </div>
      </div>

      <Card title="Ongoing Challanges" right={SeeMoreButton}>
        <div className="grid grid-cols-3 gap-5 ">
          <Content type="Join" />
          <Content type="Join" />
          <Content type="Join" />
        </div>
      </Card>

      <Card title="Completed Challanges" right={SeeMoreButton} className="mt-5">
        <div className="grid grid-cols-3 gap-5 ">
          <Content type="Join" />
          <Content type="Join" />
          <Content type="Join" />
        </div>
      </Card>

      {/* <div className="space-y-5">
        <Tabs defaultValue="challanges">
          <Tabs.List>
            <Tabs.Tab className="font-heading" value="challanges">
              Challanges
            </Tabs.Tab>
            <Tabs.Tab className="font-heading" value="completed_challages">
              Completed Challanges
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="challanges">
            <div className="grid grid-cols-3 gap-5 my-5">
              <Content type="Join" />
              <Content type="Join" />
              <Content type="Join" />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="completed_challages">
            <div className="grid grid-cols-3 gap-5 my-5">
              <Content />
              <Content />
              <Content />
            </div>
          </Tabs.Panel>
        </Tabs>
      </div> */}
    </Container>
  );
};

export default BedgesPage;

import { BsDot, BsCalendar } from "react-icons/bs";

const Content = ({ type }: any) => {
  return (
    <Link href={"/challanges/slug"} className=" rounded-xl p-2 font-heading">
      <div className="h-[200px] bg-blue-50 border border-blue-500 rounded-xl"></div>

      <div className="p-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 flex items-center  mt-2 gap-1 ">
            <BsCalendar size={15} />
            <span className="text-gray-800 font-medium">12 Nov to 10 Dec</span>
          </p>
          <p className="text-sm flex items-center border py-1 px-2 rounded-xl bg-green-100">
            Difficuty Level <BsDot /> Medium
          </p>
        </div>

        <h3 className="font-medium text-[18px] leading-7  my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h3>

        <div className="grid grid-cols-2 mt-1">
          <p className="text-sm text-gray-800 flex items-center  ">
            Grade <BsDot />
            <span className="text-gray-800 font-medium">6th</span>
          </p>

          <p className="text-sm text-gray-800 bg-gray-100 p-2 rounded-full center">
            Credits <BsDot />
            <span className="text-gray-800 font-medium">0</span>
          </p>
        </div>

        {type && (
          <button
            className={clsx(
              "font-heading bg-blue-500 text-white w-full py-2 mt-2 rounded-md capitalize"
            )}
          >
            {type}
          </button>
        )}
      </div>
    </Link>
  );
};
