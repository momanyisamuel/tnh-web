import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";

type AboutProps = object;

const About: FC<AboutProps> = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center mb-12 ">
          <img
            src="https://cms.thenairobihosp.org/uploads/who_we_are_8fbeb1073c.jpg"
            alt="Auditorium"
            className="rounded-xl w-full h-auto object-cover"
          />
          <div className="bg-red-50 p-6 rounded-xl  dark:border-gray-700 shadow-2xl">
            <h2 className="text-xl font-semibold text-red-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              The Nairobi Hospital is a non-profit organization that is leading
              in medical expertise and service provision, with deservedly earned
              recognition throughout East Africa and beyond as an advanced
              diagnostic, treatment and referral centre. Investment in the
              latest technology and medical equipment has seen us establish
              leadership in medical procedures both in Kenya and beyond.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-4">
              We take pride in our highly qualified professionals who deliver
              our mission every day, translating their knowledge and expertise
              to internationally compliant practices in healthcare provision.
              Courtesy, consideration and unreserved respect towards our
              patients’ privacy, dignity and confidentiality have helped us earn
              their trust and goodwill time and again. Our dedicated nursing
              staff provides professional care within a friendly and comfortable
              environment, ensuring a pleasant and anxiety-free time in hospital
              for our patients and their families.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 ">
          <div className="p-6 border rounded-xl text-center bg-red-50  dark:border-gray-700 shadow-2xl                                                                                                        ">
            <div className="flex items-center justify-center">
              <img
                src="https://cms.thenairobihosp.org/uploads/mission_97f94cb17a.svg"
                alt=""
              />
            </div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Mission</h3>
            <p className="text-gray-700 text-sm">
              To offer exceptional multi-specialty healthcare services by
              harnessing innovative, dynamic & integrational patient-centered
              strategies, towards achieving sustainable growth.
            </p>
          </div>
          <div className="p-6 border rounded-xl text-center bg-red-50  dark:border-gray-700 shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src="https://cms.thenairobihosp.org/uploads/Frame_37f3952532.svg"
                alt=""
              />
            </div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Vision</h3>
            <p className="text-gray-700 text-sm">
              The renowned modern patient-centered healthcare facility in an
              atmosphere of trust, safety and comfort.
            </p>
          </div>
        </div>

        <div className="p-6 border rounded-xl mb-12 bg-red-50  dark:border-gray-700 shadow-2xl">
          <div className="flex items-center justify-center ">
            <img
              src="https://cms.thenairobihosp.org/uploads/Frame_1_d771ee6a40.svg"
              alt=""
            />
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-4 text-center">
            Values
          </h3>
          <ul className="text-gray-700 text-sm space-y-2 mb-6 text-center">
            <li>
              <strong>Dedication:</strong> Efficient service and great value for
              patients and families.
            </li>
            <li>
              <strong>Empathy:</strong> Warm, friendly, and caring environment
              for recovery.
            </li>
            <li>
              <strong>Inspiration:</strong> Empowering staff to achieve
              extraordinary goals and careers.
            </li>
            <li>
              <strong>Quality:</strong> Superior performance and quality to
              strengthen the hospital’s core.
            </li>
            <li>
              <strong>Partnerships:</strong> Strong internal and external
              collaborations.
            </li>
            <li>
              <strong>Integrity & Accountability:</strong> Honoring commitments
              under high accountability.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-red-800 mb-4 text-center">
            Our Quality Statements
          </h3>
          <ul className="text-gray-700 text-sm space-y-1 text-center">
            <li>Energy Management Policy Statement</li>
            <li>Environmental Policy Statement</li>
            <li>Food Safety Policy Statement</li>
            <li>Fire Safety Policy Statement</li>
            <li>Quality Policy Statement</li>
            <li>Occupational Safety and Health Policy Statement</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
