"use client";
import { useState } from "react";
import Card from "@/blocks/UI/Card";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";

const keyword_array = [
  "Account",
  "Billing",
  "Shipping",
  "Product",
  "Returns and Refunds",
  "Troubleshooting",
  "Order Status",
  "Privacy and Security",
  "Contact Information",
  "Account Termination",
];

const HelpAndSupport = () => {
  return (
    <div className="pr-5">
      <Card title="Frequently Asked Questions (Videos)">
        <div>
          <SettingIntroduction
            imageSrc="/astro.png"
            title="FAQ's Solutions"
            description="Followings are the solutions of frequently asked question in text and video formet."
          />

          <div>
            <h3 className="font-heading mb-5 text-lg">
              Select and filter FAQs
            </h3>
            <div className="flex flex-wrap gap-2 pb-10 border-b border-gray-200 mb-5">
              {keyword_array.map((keyword) => (
                <button
                  className="px-5 py-2 border rounded-full font-heading text-sm text-gray-800"
                  key={keyword}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <Question key={i} question={faq.question} solution={faq.answer} />
            ))}
          </div>
        </div>
      </Card>

      <Card title="Contact Us" className="mt-5">
        <section className="bg-white font-heading">
          <div>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-blue-500"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default HelpAndSupport;
import { HiPlay } from "react-icons/hi";
const Question = ({ question, solution }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <section>
      <div
        onClick={handleClick}
        className="flex items-center justify-between py-2 cursor-pointer"
      >
        <h3 className="font-heading font-medium">{question}</h3>
        {isCollapsed ? <BiChevronUp /> : <BiChevronDown />}
      </div>
      {isCollapsed && (
        <div>
          <div className="sm:w-[600px] sm:h-[300px] h-[200px] bg-blue-50 rounded-md mb-2 center border">
            <HiPlay size={50} color="gray" />
          </div>
          <p className="text-gray-600  ">{solution}</p>
        </div>
      )}
    </section>
  );
};

const faqData = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a versatile programming  commonly used for web development. It allows you to add interactivity and dynamic behavior to websites.",
    videoUrl: "/",
  },
  {
    question: "How do I declare a variable in JavaScript?",
    answer:
      "You can declare a variable using 'var', 'let', or 'const' followed by the variable name. For example: 'let myVar = 42;' creates a variable named 'myVar' with the value 42.",
    videoUrl: "/",
  },
  {
    question: "What is the difference between 'let', 'const', and 'var'?",
    answer:
      "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' variables cannot be reassigned, 'let' allows reassignment, and 'var' has some scope quirks.",
    videoUrl: "/",
  },
  {
    question: "How do I write a for loop in JavaScript?",
    answer:
      "You can use a 'for' loop like this: 'for (let i = 0; i < 10; i++) { /* Your code here */ }'. It repeats the code inside the loop 10 times.",
  },
  {
    question: "What is an array in JavaScript?",
    answer:
      "An array is a data structure that stores a collection of values. In JavaScript, you can create arrays using square brackets, like 'let myArray = [1, 2, 3];'.",
    videoUrl: "/",
  },
  {
    question: "How can I add an event listener to an HTML element?",
    answer:
      "You can use the 'addEventListener' method to add an event listener to an HTML element. For example: 'document.getElementById('myButton').addEventListener('click', myFunction);'.",
    videoUrl: "/",
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback function is a function that is passed as an argument to another function and is executed at a later time. It is often used for handling asynchronous operations.",
  },
  {
    question: "How can I make an AJAX request in JavaScript?",
    answer:
      "You can use the 'XMLHttpRequest' object or the newer 'fetch' API to make AJAX requests. These methods allow you to send HTTP requests to a server and receive data.",
    videoUrl: "/",
  },
  {
    question: "What is JSON?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate.",
    videoUrl: "/",
  },
  {
    question: "How can I debug my JavaScript code?",
    answer:
      "You can use the browser's built-in developer tools or add 'console.log' statements to your code to print messages to the console. Debuggers like 'debugger;' can also be used to pause execution and inspect variables.",
    videoUrl: "/",
  },
];
