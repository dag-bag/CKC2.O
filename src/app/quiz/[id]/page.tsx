"use client";

type actionType =
  | "boolean"
  | "select"
  | "select-with-image"
  | "multi-select"
  | "multi-with-image";

type option = {
  name: string;
  value: string;
  answer: boolean;
  imageURL?: string;
};

type booleanPayload = {
  answer: boolean;
};

type selectsPayload = {
  options: option[];
};

type action = {
  type: actionType;
  payload: booleanPayload | selectsPayload;
};

type slide = {
  id: string;
  name: string;
  action: action;
};

type quiz = {
  title: string;
  desc: string;
  slides: slide[];
};

const animalQuiz: quiz = {
  title: "Animal Quiz",
  desc: "Test your knowledge about animals",
  slides: [
    {
      id: "q1",
      name: "Is a dolphin a mammal?",
      action: {
        type: "boolean",
        payload: {
          answer: true,
        },
      },
    },
    {
      id: "q2",
      name: "Which of the following animals is a herbivore?",
      action: {
        type: "select",
        payload: {
          options: [
            { name: "Lion", value: "lion", answer: false },
            { name: "Elephant", value: "elephant", answer: true },
            { name: "Tiger", value: "tiger", answer: false },
            { name: "Cheetah", value: "cheetah", answer: false },
          ],
        },
      },
    },
    {
      id: "q3",
      name: "What is the largest big cat species?",
      action: {
        type: "select-with-image",
        payload: {
          options: [
            {
              name: "Lion",
              value: "lion",
              answer: false,
              imageURL: "lion.jpg",
            },
            {
              name: "Tiger",
              value: "tiger",
              answer: true,
              imageURL: "tiger.jpg",
            },
            {
              name: "Jaguar",
              value: "jaguar",
              answer: false,
              imageURL: "jaguar.jpg",
            },
            {
              name: "Leopard",
              value: "leopard",
              answer: false,
              imageURL: "leopard.jpg",
            },
          ],
        },
      },
    },
    {
      id: "q4",
      name: "Do snakes have eyelids?",
      action: {
        type: "boolean",
        payload: {
          answer: false,
        },
      },
    },
    // Add more quiz slides as needed
  ],
};

interface SlideUIGeneratorProps {
  slides: slide[];
  slideIndex: number;
  handleResponse: (value: string) => void;
}

const SlideUIGenerator = ({
  slides,
  slideIndex,
  handleResponse,
}: SlideUIGeneratorProps) => {
  const { name, action } = slides[slideIndex];
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg w-[500px] max-w-[500px]">
      <p>
        {slideIndex} / {slides.length - 1}
      </p>
      <h1 className="text-2xl font-heading mt-3">{name}</h1>
      <div className="mt-5">
        {action.type == "boolean" && (
          <BooleanOptions
            handleResponse={handleResponse}
            payload={action.payload as booleanPayload}
          />
        )}

        {action.type == "select" && (
          <SelectOptions
            handleResponse={handleResponse}
            {...(action.payload as selectsPayload)}
          />
        )}

        {action.type == "select-with-image" && (
          <SelectOptionsWithImage
            handleResponse={handleResponse}
            {...(action.payload as selectsPayload)}
          />
        )}
      </div>
    </div>
  );
};

interface BooleanOptionsProps {
  handleResponse: (value: string) => void;
  payload: booleanPayload;
}

const BooleanOptions = ({ handleResponse }: BooleanOptionsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          handleResponse("true");
        }}
      >
        true
      </Button>

      <Button
        onClick={() => {
          handleResponse("false");
        }}
      >
        false
      </Button>
    </div>
  );
};

interface SelectOptionsProps {
  options: selectsPayload["options"];
  handleResponse: (value: string) => void;
}

const SelectOptions = ({ options, handleResponse }: SelectOptionsProps) => {
  return (
    <div className="flex gap-2">
      {options.map((option, index) => (
        <Button
          onClick={() => {
            handleResponse(option.value);
          }}
          key={index}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};
const SelectOptionsWithImage = ({
  options,
  handleResponse,
}: SelectOptionsProps) => {
  return (
    <div className="flex gap-2">
      {options.map((option, index) => (
        <Button
          onClick={() => {
            handleResponse(option.value);
          }}
          imageURL={option.imageURL}
          key={index}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};

const Button = ({ children, imageURL, onClick }: any) => (
  <button
    onClick={onClick}
    className="capitalize px-5 py-2 border-2  rounded-xl"
  >
    {imageURL && (
      <Image
        alt="image"
        width={100}
        height={100}
        className="mb-2"
        src={"/avatars/asian-man.png"}
      />
    )}
    <span> {children}</span>
  </button>
);

import { useLocalStorage } from "@mantine/hooks";
import Image from "next/image";
import { useState } from "react";
export default function Quiz() {
  const [storage, setStorage] = useLocalStorage({
    key: "quiz",
    defaultValue: undefined,
  });

  const [state, setState] = useState(0);
  const handleNextSlide = () => {
    setState(animalQuiz.slides.length - 1 > state ? state + 1 : state);
  };
  const handleResponse = (value: string) => {
    setStorage(storage ? [...storage, value] : ([value] as any));
    handleNextSlide();
  };

  return (
    <div className="grid  center w-full h-full bg-gray-100">
      <SlideUIGenerator
        slideIndex={state}
        slides={animalQuiz.slides}
        handleResponse={handleResponse}
      />
    </div>
  );
}
