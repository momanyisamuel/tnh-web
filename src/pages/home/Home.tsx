import Footer from "@/components/footer";
import Header from "@/components/header";
//import Header from '../../components/header'
import { FC } from "react";
import Hero from "./hero";
import Services from "./ClinicalServices";
import Opc from "./opc";
import Ourpatners from "./ourpatners";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Opc />
      <Ourpatners />
      <Footer />
    </>
  );
};

export default Home;
