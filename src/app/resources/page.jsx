import React from "react";

const ResoursesPage = () => {
  return (
    <section className="min-h-screen bg-myColors-50">
      <h1>
        Certainly! Let&apos;s dive into the resources related to JavaScript,
        TypeScript, React, and Next.js:
      </h1>
      <ul>
        <li>
          React vs. Next.js vs. TypeScript:
          <span>
            React is a JavaScript library for building web user interfaces using
            modular and reusable components. Next.js is a full-blown web
            framework built on React. It provides features like routing,
            server-side rendering (SSR), and more for building production-ready
            web applications. TypeScript is a superset of JavaScript that
            introduces type safety and helps developers build more robust and
            maintainable web apps. The choice between these technologies depends
            on your project&apos;s complexity
          </span>
        </li>
        <li>
          Tutorial: Make a Blog with Next.js, React, and Sanity:
          <span>
            This tutorial guides you through creating a blog using Sanity as the
            content backend and Next.js for rendering web pages
          </span>
        </li>
        <li>
          Server-side Rendering with Next.js, React, and TypeScript:
          <span>
            Learn how to implement SSR using Next.js, React, and TypeScript step
            by step. You can find the code in this GitHub repo
          </span>
        </li>
        <li>
          Example Project:
          <span>
            Check out this simple blog template using Next.js, TypeScript, and
            Tailwind CSS on GitHub.
          </span>
        </li>
        <li>
          Using Next.js with TypeScript:
          <span>
            Next.js allows you to build static and dynamic (server-side) apps
            using React. It comes with handy functionalities like API routes,
            file-system routing, image optimization, and more.
          </span>
        </li>
      </ul>
      <p>
        Feel free to explore these resources to enhance your knowledge and
        skills!
      </p>
    </section>
  );
};

export default ResoursesPage;
