import Footer from "@/components/footer";
import Header from "@/components/header";
//import Header from '../../components/header'
import { FC } from "react";
import { Link } from "react-router";
import Hero from "./hero";
import Services from "./clinical-services";
import Opc from "./opc";
import Ourpatners from "./ourpatners";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <div>
        <Link to="/about">About</Link>
        Home
        <Link to="/clinics">clinics</Link>
      </div>
      <Hero />
      <Services />
      <Opc />
      <Ourpatners />
      <Footer />
    </>
  );
};

export default Home;
