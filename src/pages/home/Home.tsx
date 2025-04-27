import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
//import Navbar from '../../components/Navbar'
import { FC } from "react";
import Hero from "./hero";
import Services from "./ClinicalServices";
import Opc from "./opc";
import Features from "./features";
import AboutSection from "./AboutSection";
import InsuranceSlider from "./InsuranceSlider";
type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Opc />
      <AboutSection />
      <InsuranceSlider />
      <Footer />
    </>
  );
};

export default Home;
