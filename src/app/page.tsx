import About from "@/components/About";
import BackedBy from "@/components/BackedBy";
import Blog from "@/components/Blog";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero/>
      <About />
      <Technology />
      <UseCases />
      <BackedBy />
      <Blog />
      <FAQs />
      <Footer/>
    </div>
  );
}
