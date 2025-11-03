import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import aboutImg from "../assets/img/about.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-50 text-gray-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative text-center px-6 z-10 max-w-5xl"
        >
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            Established 2018
          </motion.div> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            About US
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed">
            Empowering communities through sustainable development and
            innovation-driven impact.
          </p>
        </motion.div>
      </section>

      {/* ===== Who We Are ===== */}
      <section className="py-24 lg:py-32 -mt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              title="Who We Are"
              subtitle="National Empowerment and Development Agency"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Community development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Since 2018
                    </h3>
                    <p className="text-blue-100">
                      Building sustainable communities
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl"></div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                The National Empowerment and Development Agency (NEADS) is a
                non-governmental organization registered under the Societies
                Registration Act, XXI of 1860, in December 2018.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                We focus on fostering inclusive and sustainable community
                development through initiatives in water and sanitation,
                environmental conservation, and gender equity.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Our participatory approach ensures that local voices shape our
                strategies, while our multidisciplinary team brings expertise in
                water management, livelihoods, and innovation to create lasting
                change.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <div className="p-5 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-1">Inclusive</h4>
                  <p className="text-sm text-blue-700">
                    Community-driven solutions
                  </p>
                </div>
                <div className="p-5 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-1">Sustainable</h4>
                  <p className="text-sm text-green-700">
                    Long-term impact focus
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Mission, Vision, Values ===== */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <SectionTitle
              title="Our Guiding Principles"
              subtitle="The foundation of everything we do"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                title: "Our Mission",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "blue",
                text: "To empower communities by promoting sustainable and inclusive development practices that enhance quality of life and environmental resilience.",
              },
              {
                title: "Our Vision",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                color: "indigo",
                text: "A society where every individual contributes to and benefits from sustainable growth and empowerment.",
              },
              {
                title: "Our Values",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                color: "purple",
                text: [
                  "Integrity",
                  "Inclusiveness",
                  "Sustainability",
                  "Innovation",
                  "Collaboration",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center`}
                >
                  <svg
                    className={`w-8 h-8 text-${item.color}-400`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={item.icon}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-2xl lg:text-3xl font-bold mb-4 text-${item.color}-300`}
                >
                  {item.title}
                </h3>
                {Array.isArray(item.text) ? (
                  <ul className="space-y-2">
                    {item.text.map((t, j) => (
                      <li
                        key={j}
                        className="text-lg text-gray-200 flex items-center gap-2"
                      >
                        <span
                          className={`w-2 h-2 rounded-full bg-${item.color}-400`}
                        ></span>{" "}
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className={`text-${item.color}-100 leading-relaxed text-lg`}
                  >
                    {item.text}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Core Focus Areas ===== */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              title="Our Core Focus"
              subtitle="Driving impactful change through sustainable development"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {[
              {
                title: "Water & Sanitation",
                icon: "💧",
                desc: "Clean water access & safe sanitation.",
              },
              {
                title: "Environmental Conservation",
                icon: "🌿",
                desc: "Protecting ecosystems & biodiversity.",
              },
              {
                title: "Gender Equity",
                icon: "⚖️",
                desc: "Empowering women & promoting equality.",
              },
              {
                title: "Community Development",
                icon: "🏘️",
                desc: "Inclusive growth for all communities.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
