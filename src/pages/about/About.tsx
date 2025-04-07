import Footer from "@/components/footer";
import Header from "@/components/header";
import { FC } from "react";
import { NavigationTabs } from "./NavigationTabs";

type AboutProps = object;

const About: FC<AboutProps> = () => {
  return (
    <>
      <Header />
      <NavigationTabs />
      <Footer />
    </>
  );
};

export default About;
