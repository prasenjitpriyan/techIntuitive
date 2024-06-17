"use client";

import React, { useState } from "react";
import { Button, Select, TextInput } from "flowbite-react";
import PostCard from "@/components/PostCard";

const BlogPages = () => {
  const [blogs, setBlogs] = useState([
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/assets/images/blog.png",
      category: "javascript",
    },
  ]);

  return (
    <section className="flex flex-col md:flex-row bg-myColors-50 border-t border-myColors-500">
      <div className="p-5 border-b md:border-r md:min-h-screen border-myColors-500">
        <form className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-8">
            <label className="whitespace-nowrap font-semibold">Search:</label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              color={"failure"}
              className="w-[60%]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="font-semibold">Sort:</label>
            <Select
              id="sort"
              className="bg-myColors-50 border border-myColors-300 text-myColors-900 text-sm rounded-lg focus:ring-myColors-500 focus:border-myColors-500 block w-[60%] dark:bg-myColors-700 dark:border-myColors-600 dark:placeholder-myColors-400 dark:focus:ring-myColors-500 dark:focus:border-myColors-500"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="font-semibold">Category:</label>
            <Select
              id="category"
              className="bg-myColors-50 border border-myColors-300 text-myColors-900 text-sm rounded-lg focus:ring-myColors-500 focus:border-myColors-500 block w-[60%] dark:bg-myColors-700 dark:border-myColors-600 dark:placeholder-myColors-400 dark:focus:ring-myColors-500 dark:focus:border-myColors-500"
            >
              <option value="uncategorized">Unsorted</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="javascript">JavaScript</option>
              <option value="javascript">TypeScript</option>
            </Select>
          </div>
          <Button
            type="submit"
            className="bg-myColors-400 hover:bg-myColors-500"
          >
            Apply Filters
          </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-myColors-400 font-semibold sm:border-b border-myColors-500 p-3">
          Posts results:
        </h1>
        <div className="flex flex-wrap gap-5 py-10 justify-center">
          {blogs.map((blog) => (
            <PostCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPages;
