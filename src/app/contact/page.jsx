import Image from "next/image";
import React from "react";
import blog from "@/assets/images/blog.png";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <React.Fragment>
      <form action="https://fabform.io/f/xxxxx" method="post">
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <Image
                      src={blog}
                      height={2000}
                      width={2000}
                      alt="ContactUs tailwind section"
                      className="w-full h-full lg:rounded-l-2xl  bg-blend-multiply bg-myColors-700"
                    />
                    <h1 className="font-manrope text-myColors-900 text-4xl font-bold leading-10 absolute top-11 left-11">
                      Contact us
                    </h1>
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-myColors-50 rounded-lg p-6 block">
                        <Link
                          href="javascript:;"
                          className="flex items-center mb-6"
                        >
                          <FaPhone className="h-8 w-8 text-myColors-400" />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            +91-9038332076
                          </h5>
                        </Link>
                        <Link
                          href="https://veilmail.io/irish-geoff"
                          className="flex items-center mb-6"
                        >
                          <MdMarkEmailRead className="h-8 w-8 text-myColors-400" />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            prasenjitpriyan@icloud.com
                          </h5>
                        </Link>
                        <Link href="javascript:;" className="flex items-center">
                          <FaLocationDot className="h-8 w-8 text-myColors-400" />
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            57, Haltu P. Majumder Road, Kolkata-700078
                          </h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-myColors-50 p-5 lg:p-11 rounded-r-2xl">
                <h2 className="text-myColors-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                  Send Us A Message
                </h2>
                <input
                  type="text"
                  className="w-full h-12 text-myColors-600 placeholder-myColors-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-myColors-200 focus:outline-none pl-4 mb-10"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full h-12 text-myColors-600 placeholder-myColors-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-myColors-200 focus:outline-none pl-4 mb-10"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="w-full h-12 text-myColors-600 placeholder-myColors-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-myColors-200 focus:outline-none pl-4 mb-10"
                  placeholder="Phone"
                />
                <div className="mb-10">
                  <h4 className="text-myColors-500 text-lg font-normal leading-7 mb-4">
                    Preferred method of communication
                  </h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input
                        id="radio-group-1"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-myColors-500 checked:bg-myColors-100"
                      />
                      <label
                        htmlFor="radio-group-1"
                        className="flex items-center cursor-pointer text-myColors-500 text-base font-normal leading-6"
                      >
                        <span className="border border-myColors-300 rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-group-2"
                        type="radio"
                        name="radio-group"
                        className="hidden checked:bg-no-repeat checked:bg-center checked:border-myColors-500 checked:bg-myColors-100"
                      />
                      <label
                        htmlFor="radio-group-2"
                        className="flex items-center cursor-pointer text-myColors-500 text-base font-normal leading-6"
                      >
                        <span className="border border-myColors-300  rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                        Phone
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full h-12 text-myColors-600 placeholder-myColors-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-myColors-200 focus:outline-none pl-4 mb-10"
                  placeholder="Message"
                />
                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-myColors-800 bg-myColors-600 shadow-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </React.Fragment>
  );
};

export default ContactPage;
