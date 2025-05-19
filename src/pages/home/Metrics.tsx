import AnimatedCounter from "@/components/Animatedcounter";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Metrics = () => {
  return (
    <div className="max-w-7xl mx-[2%] md:mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="https://www.businessdailyafrica.com/resource/image/4835778/portrait_ratio1x1/1600/1600/dc5dce77e68b7280b9179c2a564d6fb8/jw/nai-hospital.jpg"
          alt="People in group therapy"
          className="rounded-xl shadow-md"
        />
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-center mx-10 md:text-left"
      >
        <h2 className="text-5xl font-semibold text-red-900 mb-4 font-serif">About the Hospital</h2>
        <p className="text-gray-700 mb-6">
          Opened in 1954, The Nairobi Hospital has excelled in medical expertise, service provision and has deservedly earned recognition throughout East Africa and beyond as an advanced diagnostic, treatment and referral centre. Expansive investment in latest technology and medical equipment has enabled us establish leadership in medical procedures both in Kenya and outside.
        </p>

        <div className="space-y-4">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center items-center gap-4"
          >
            <AnimatedCounter targetNumber={70} suffix="+" />
            <p className="text-gray-600">
              Years of experience in patient care dedicated to
              providing the highest quality of care.
            </p>
          </motion.div>
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="border-b border-red-100 pl-4"
            />
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="flex items-center gap-4 justify-center"
          >
            <AnimatedCounter targetNumber={74} suffix="%" />
            <p className="text-gray-600">
              Our patient satisfaction rate shows quality, compassion, and attention. Our post-visit surveys reflect trust, comfort, and confidence in our care.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Metrics;
