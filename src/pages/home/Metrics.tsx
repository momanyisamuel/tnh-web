import AnimatedCounter from "@/components/Animatedcounter";
import { motion } from "framer-motion";
import westernimg from "@/assets/images/tnh-western.jpg";
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Metrics = () => {
  return (
    <div className="max-w-6xl mx-[5%] md:mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={westernimg}
          alt="Western Entrance Image"
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
        <h2 className="text-3xl font-semibold text-red-900 mb-4">Our Center</h2>
        <p className="text-gray-700 mb-6">
          Outpatient centers offer a range of clinical services provided by
          licensed mental health professionals. These services may involve care
          from clinical psychologists, counselors, psychotherapists,
          psychiatrists, and other healthcare specialists focused on supporting
          clients without the need for overnight stays.
        </p>

        <div className="space-y-4">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <AnimatedCounter targetNumber={25000} suffix="+" />
            <p className="text-gray-600 mt-4">
              Outpatient visitors receive care without overnight admission. This
              includes consultations, lab tests, and minor procedures. We serve
              thousands monthly with fast, expert care.
            </p>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <AnimatedCounter targetNumber={74} suffix="%" />
            <p className="text-gray-600 mt-4">
              Our patient satisfaction rate reflects the quality, compassion,
              and attention we provide. Measured through post-visit surveys, it
              shows how well we meet expectations across services. High
              satisfaction signals trust, comfort, and confidence in our care.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Metrics;
