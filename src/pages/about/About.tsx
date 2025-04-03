import Footer from "@/components/footer";
import Header from "@/components/header";
import { FC } from "react";
import { Link } from "react-router";

type AboutProps = object;

const About: FC<AboutProps> = () => {
  return (
    <>
      <Header />
      <div>
        <Link to="/">Home</Link>
        About
      </div>
      <Footer />
    </>
  );
};

export default About;
