import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
//import Navbar from '../../components/Navbar'
import { FC } from "react";
import Hero from "./hero";
//import Services from "./ClinicalServices";
import Opc from "./opc";
import Features from "./features";
import InsuranceSlider from "./InsuranceSlider";
import ServicesSection from "./ServicesSection";
import Metrics from "./Metrics";
import TestimonialCarousel from "@/components/TestimonialCouresel";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <ServicesSection />
      {/* <Services /> */}
      <Opc />
      <TestimonialCarousel />
      <InsuranceSlider />
      <Footer />
    </>
  );
};

export default Home;
