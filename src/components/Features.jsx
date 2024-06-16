import React from "react";
import Image from "next/image";
import Link from "next/link";
import javascript from "@/assets/images/javascript.png";
import typescript from "@/assets/images/typescript.png";
import react from "@/assets/images/react.png";
import next from "@/assets/images/next.png";

const Features = () => {
  return (
    <React.Fragment>
      <section className="overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Link href="#_">
              <Image
                src={javascript}
                alt="Pic"
                width={1000}
                height={1000}
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              />
            </Link>

            <Link href="#_">
              {" "}
              <Image
                src={typescript}
                alt="Pic"
                width={1000}
                height={1000}
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              />{" "}
            </Link>
            <Link href="#_">
              {" "}
              <Image
                src={react}
                alt="Pic"
                width={1000}
                height={1000}
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              />{" "}
            </Link>
            <Link href="#_">
              {" "}
              <Image
                src={next}
                alt="Pic"
                width={1000}
                height={1000}
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              />{" "}
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Features;
