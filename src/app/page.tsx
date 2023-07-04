import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home(): JSX.Element {
  return (
    <main id="hello" className="">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
