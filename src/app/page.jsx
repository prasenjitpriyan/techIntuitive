import Features from "@/components/Features";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <main className="bg-myColors-50 scroll-smooth">
      <Hero />
      <h1 className="text-center py-20 sm:pt-48 text-5xl font-semibold text-myColors-400">
        Features
      </h1>
      <Features />
      <h1 className="text-center py-20 text-5xl font-semibold text-myColors-400">
        Recent Posts
      </h1>
      <RecentPosts />
    </main>
  );
}
