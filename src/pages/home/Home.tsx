import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
//import Navbar from '../../components/Navbar'
import { FC } from "react";
import Hero from "./hero";
import Services from "./ClinicalServices";
import Opc from "./opc";
import Ourpatners from "./ourpatners";
import Features from "./features";
type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Opc />
      <Ourpatners />
      <Footer />
    </>
  );
};

export default Home;
