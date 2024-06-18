import React from "react";
import Love from "@/components/Love";
import Link from "next/link";
import blog from "@/assets/images/blog.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-myColors-50">
      <div className="flex flex-col py-10 px-10">
        <div className="text-center flex flex-col gap-2">
          <h1 className="self-center whitespace-nowrap text-xl font-semibold text-myColors-400 flex">
            TechIntuitive
            <Love />
          </h1>
          <p className="text-myColors-700">
            Exploring the World of Generative Design
          </p>
        </div>
        <div className="flex gap-10 pt-10 pb-2 text-myColors-900 justify-center">
          <Link href={"/"}>JavaScript</Link>
          <Link href={"/"}>TypeScript</Link>
          <Link href={"/"}>React</Link>
          <Link href={"/"}>Next</Link>
        </div>
        <hr className="border-myColors-400" />
        <div className="flex flex-col lg:flex-row py-20 gap-5">
          <div className="font-light text-myColors-500">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-myColors-900">
              We didn&apos;t reinvent the wheel
            </h2>
            <p className="mb-4 text-justify">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p className="text-justify">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
            <p className="text-myColors-500 text-justify font-light">
              Welcome to TechIntuitive, your go-to blog for all things
              generative design! Our team of tech-savvy writers are here to
              bring you the latest news, trends, and insights on the innovative
              world of generative design. From exploring cutting-edge algorithms
              to showcasing inspiring projects, we aim to provide you with a
              comprehensive and engaging look into this fascinating field.
              Whether you&apos;re a seasoned professional or a curious beginner,
              TechIntuitive is your hub for all things generative. Stay tuned
              for regular updates and let your creativity flow with us!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width={1000}
              height={1000}
              priority
              className="w-full rounded-lg"
              src={blog}
              alt="Office"
            />

            <Image
              width={1000}
              height={1000}
              priority
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={blog}
              alt="office content 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
