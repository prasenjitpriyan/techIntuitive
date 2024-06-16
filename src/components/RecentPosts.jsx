import React from "react";
import Image from "next/image";
import blog from "@/assets/images/next.png";
import Link from "next/link";
import { MdAccessTimeFilled } from "react-icons/md";

const RecentPosts = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
      <article className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            className="w-full"
            src={blog}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-myColors-900 opacity-25"></div>
          <div className="absolute bottom-0 left-0 bg-myColors-600 px-4 py-2 text-myColors-50 text-sm hover:bg-myColors-50 hover:text-myColors-600 transition duration-500 ease-in-out">
            Photos
          </div>
          <div className="text-sm absolute top-0 right-0 bg-myColors-600 px-4 text-myColors-50 rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-myColors-50 hover:text-myColors-600 transition duration-500 ease-in-out">
            <span className="font-bold">27</span>
            <small>March</small>
          </div>
        </div>
        <div className="px-6 py-4">
          <Link
            href="#"
            className="font-semibold text-lg inline-block hover:text-myColors-600 transition duration-500 ease-in-out"
          >
            Best View in Newyork City
          </Link>
          <p className="text-myColors-500 text-sm">
            The city that never sleeps
          </p>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-sm font-regular text-myColors-900 mr-1 flex flex-row items-center"
          >
            <MdAccessTimeFilled />
            <span className="ml-1">6 mins ago</span>
          </span>
        </div>
      </article>
      <article className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            className="w-full"
            src={blog}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-myColors-900 opacity-25"></div>
          <div className="absolute bottom-0 left-0 bg-myColors-600 px-4 py-2 text-myColors-50 text-sm hover:bg-myColors-50 hover:text-myColors-600 transition duration-500 ease-in-out">
            Photos
          </div>
          <div className="text-sm absolute top-0 right-0 bg-myColors-600 px-4 text-myColors-50 rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-myColors-50 hover:text-myColors-600 transition duration-500 ease-in-out">
            <span className="font-bold">27</span>
            <small>March</small>
          </div>
        </div>
        <div className="px-6 py-4">
          <Link
            href="#"
            className="font-semibold text-lg inline-block hover:text-myColors-600 transition duration-500 ease-in-out"
          >
            Best View in Newyork City
          </Link>
          <p className="text-myColors-500 text-sm">
            The city that never sleeps
          </p>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-sm font-regular text-myColors-900 mr-1 flex flex-row items-center"
          >
            <MdAccessTimeFilled />
            <span className="ml-1">6 mins ago</span>
          </span>
        </div>
      </article>
      <article className="rounded overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            className="w-full"
            src={blog}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-myColors-900 opacity-25"></div>
          <div className="absolute bottom-0 left-0 bg-myColors-600 px-4 py-2 text-myColors-50 text-sm hover:bg-myColors-50 hover:text-myColors-600 transition duration-500 ease-in-out">
            Photos
          </div>
          <div className="text-sm absolute top-0 right-0 bg-myColors-600 px-4 text-myColors-50 rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-myColors-50 hover:text-myColors-600 transition duration-500 ease-in-out">
            <span className="font-bold">27</span>
            <small>March</small>
          </div>
        </div>
        <div className="px-6 py-4">
          <Link
            href="#"
            className="font-semibold text-myColors-900 text-lg inline-block hover:text-myColors-600 transition duration-500 ease-in-out"
          >
            Best View in Newyork City
          </Link>
          <p className="text-myColors-500 text-sm">
            The city that never sleeps
          </p>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-sm font-regular text-myColors-900 mr-1 flex flex-row items-center"
          >
            <MdAccessTimeFilled />
            <span className="ml-1">6 mins ago</span>
          </span>
        </div>
      </article>
    </section>
  );
};

export default RecentPosts;
