import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import blog from "@/assets/images/next.png";

const BlogPage = () => {
  return (
    <section className="min-h-screen bg-myColors-50">
      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          Title
        </h1>
        <Link href={"/"} className="self-center mt-5">
          <Button color="gray" pill size="xs">
            Hello
          </Button>
        </Link>
        <Image
          width={2000}
          height={1000}
          src={blog}
          alt=""
          className="pt-10 max-h-[600px] w-full object-cover"
        />
        <div className="flex justify-between py-5 border-b border-myColors-500 mx-auto w-full max-w-6xl text-xs">
          <span>{new Date().toLocaleDateString()}</span>
          <span className="'italic">10 mins read</span>
        </div>
        <div className="py-5 max-w-6xl mx-auto w-full post-content">
          <p className="text-justify text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officiis error ab facere pariatur ullam, quisquam cum obcaecati nam
            consequuntur autem ex veniam, asperiores ad quod, voluptate
            temporibus quasi animi. Tempore nostrum aliquid officiis impedit
            iusto amet dicta accusamus repellat voluptatum sed commodi ipsa
            assumenda culpa sunt, ab minus eos in quam quasi laudantium animi
            quae. Asperiores quam dicta inventore! Adipisci error laboriosam
            debitis quidem ratione. Sunt dolore esse sequi minima possimus
            repudiandae modi nihil, qui id ipsam dolorem sed exercitationem
            consectetur fuga quasi harum sint et atque facilis eum. Labore
            deleniti debitis dolorum nisi doloremque beatae blanditiis ipsum
            itaque quasi aliquid reprehenderit aperiam magni similique corporis
            suscipit, vel consectetur veritatis est eveniet adipisci id.
            Corporis animi deserunt porro iure. Cumque fuga ratione unde vitae
            numquam ullam enim ut quas repellendus, voluptatum sequi ab fugit
            veniam! Nulla quisquam laboriosam obcaecati facilis tenetur aut
            quam? Hic sequi quaerat sit nemo deserunt. Molestiae beatae veniam
            deleniti natus atque qui repudiandae libero eum voluptatibus rem,
            animi debitis quidem quia veritatis ipsum asperiores quam hic minus.
            Modi libero, adipisci veritatis officiis cumque vero sed.
            Reprehenderit voluptatum eaque labore? Odit commodi distinctio error
            facilis enim totam? Reiciendis officiis magni aspernatur, esse
            tempore distinctio dignissimos excepturi qui id corrupti minus
            molestiae veritatis quasi et accusamus ipsum! Ducimus error, earum
            repudiandae, optio maiores cupiditate sed molestias veritatis
            exercitationem esse nulla quas quibusdam excepturi aspernatur
            accusantium eaque tenetur praesentium a nisi corporis eius ipsa
            laudantium. Quasi, hic quis? Suscipit illo ratione rerum id autem
            culpa, nisi asperiores assumenda ipsa sequi quisquam numquam tempore
            blanditiis aperiam voluptate ex ab consectetur reprehenderit
            exercitationem ipsum a. Pariatur sequi aut perspiciatis sed? Quo
            earum obcaecati modi asperiores sapiente nisi corrupti omnis
            nesciunt saepe, libero, voluptatibus molestias voluptatum excepturi!
            Aperiam quasi in earum ratione ullam consequuntur, architecto harum
            adipisci at. Eos, ratione aliquam!
          </p>
        </div>
        <div className="max-w-4xl mx-auto w-full"></div>
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl mt-5">Recent articles</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center"></div>
        </div>
      </main>
    </section>
  );
};

export default BlogPage;
