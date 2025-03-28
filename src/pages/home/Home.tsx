import Footer from "@/components/footer";
import Header from "@/components/header";
//import Header from '../../components/header'
import { FC } from "react";
import { Link } from "react-router";
import Hero from "./hero";
import Services from "./clinical-services";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Header />
      {/* <div>
        <Link to="/about">About</Link>
        Home
      </div> */}
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
