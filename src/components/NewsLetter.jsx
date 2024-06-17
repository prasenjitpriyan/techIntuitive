import { Button, TextInput } from "flowbite-react";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="min-h-[20svh] bg-myColors-400">
      <div className="flex flex-col justify-center md:justify-between items-center md:flex-row p-5">
        <div className="h-[15svh] flex flex-col justify-center gap-5 items-center md:items-start text-center">
          <h1 className="text-2xl text-myColors-100">
            Sign up to our newsletter
          </h1>
          <p className="text-sm text-myColors-50">
            Stay up to date with the latest news, announcements, and articles
          </p>
        </div>
        <div className="h-[15svh] flex justify-center items-center gap-5">
          <TextInput
            type="text"
            placeholder="Enter your email"
            className="min-w-80"
            color={"failure"}
          />
          <Button className="bg-red-400">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
