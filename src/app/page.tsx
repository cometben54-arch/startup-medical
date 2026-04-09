import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductLibrary from "@/components/ProductLibrary";
import Testimonials from "@/components/Testimonials";
import GlobalNetwork from "@/components/GlobalNetwork";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <GlobalNetwork />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <ProductLibrary />
      <Blog />
      <Contact />
    </>
  );
}
