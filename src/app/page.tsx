import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import HoverSection from "@/components/HoverSection";
import Instructor from "@/components/Instructor";
import MovingCards from "@/components/MovingCards";
import Scroll from "@/components/Scroll";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white h-max bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <FeaturedCourses/>
      <Scroll/>
      <MovingCards/>
      <HoverSection/>
      <Instructor/>
    </main>
  );
}
