import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-myColors-50 scroll-smooth">
      <Hero />
      <Features />
    </main>
  );
}
