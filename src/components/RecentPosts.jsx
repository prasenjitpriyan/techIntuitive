"use client";

import React, { useState } from "react";
import PostCard from "./PostCard";

const RecentPosts = () => {
  const [blogs, setBlogs] = useState([
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/blog.png",
      category: "javascript",
    },
    {
      id: "1",
      title: "JavaScript Arrow Functions vs Regular Functions",
      image: "/blog.png",
      category: "javascript",
    },
  ]);

  return (
    <div className="flex flex-wrap gap-5 py-20 justify-center">
      {blogs.map((blog) => (
        <PostCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default RecentPosts;
