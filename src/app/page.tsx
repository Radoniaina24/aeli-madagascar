import Hero from "@/components/Hero/Hero";
import News from "@/components/News/News";
import Program from "@/components/Program/Program";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Program />
      <Stats />
      <News />
      <Testimonials />
    </div>
  );
}
