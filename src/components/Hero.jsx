import React from "react";
import Image from "next/image";
import Link from "next/link";
import blog from "@/assets/images/blog.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl py-10">
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <Image
          className="h-full w-full object-cover"
          src={blog}
          alt="Winding mountain road"
          width={2000}
          height={2000}
          priority
        />
      </div>

      <div className="max-w-lg bg-myColors-100 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-xl font-medium uppercase text-myColors-800 lg:text-3xl">
            Welcome to Techintutive
          </h2>
          <p className="mt-4 text-myColors-800 text-justify">
            Our Ultimate Destination for Tech News, Reviews, and Insights. Stay
            ahead of the curve with our latest updates and expert analysis.
            Let&apos;s explore the world of technology together!
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block w-full text-center text-lg font-medium text-myColors-100 bg-myColors-400 border-myColors-600 py-4 px-8 hover:bg-myColors-600 md:w-48"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
