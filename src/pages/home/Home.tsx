import { FC } from "react";
import Hero from "./hero";
import Opc from "./opc";
import Features from "./features";
import InsuranceSlider from "./InsuranceSlider";
import ServicesSection from "./ServicesSection";
import Metrics from "./Metrics";
import TestimonialCarousel from "@/components/TestimonialCarousel";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Features />
      <Metrics />
      <ServicesSection />
      <Opc />
      <TestimonialCarousel
        testimonials={[
          {
            name: "Sarah Johnson",
            title: "Patient",
            image: "/assets/testimonials/sarah-johnson.jpg",
            quote:
              "The cardiology team at The Nairobi Hospital saved my life. Their care and expertise are unmatched.",
          },
          {
            name: "John Smith",
            title: "Patient",
            image: "/assets/testimonials/john-smith.jpg",
            quote:
              "I am grateful for the exceptional care I received from the cardiology team.",
          },
        ]}
      />
      <InsuranceSlider />
    </>
  );
};

export default Home;
