import AnimatedCounter from "@/components/Animatedcounter";
import { motion } from "framer-motion";

const Metrixs = () => {
  return (
    <div className="max-w-6xl mx-[5%] md:mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <img
          src="https://www.businessdailyafrica.com/resource/image/4835778/portrait_ratio1x1/1600/1600/dc5dce77e68b7280b9179c2a564d6fb8/jw/nai-hospital.jpg"
          alt="People in group therapy"
          className="rounded-xl shadow-md"
        />
      </div>

      <div className="text-center mx-10 md:text-left">
        <h2 className="text-3xl font-semibold text-red-900 mb-4">Our Center</h2>
        <p className="text-gray-700 mb-6">
          Outpatient centers offer a range of clinical services provided by
          licensed mental health professionals. These services may involve care
          from clinical psychologists, counselors, psychotherapists,
          psychiatrists, and other healthcare specialists focused on supporting
          clients without the need for overnight stays.
        </p>

        <div className="space-y-4">
          <div>
            <AnimatedCounter targetNumber={25000} suffix="+" />
            <p className="text-gray-600 mt-4">
              Outpatient visitors receive care without overnight admission. This
              includes consultations, lab tests, and minor procedures. We serve
              thousands monthly with fast, expert care.
            </p>
          </div>

          <div>
            <AnimatedCounter targetNumber={74} suffix="%" />
            <p className="text-gray-600 mt-4">
              Our patient satisfaction rate reflects the quality, compassion,
              and attention we provide. Measured through post-visit surveys, it
              shows how well we meet expectations across services. High
              satisfaction signals trust, comfort, and confidence in our care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrixs;
