import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const colorMap = {
  blue: {
    from: "from-blue-500",
    to: "to-blue-100",
    icon: "text-blue-600",
    hoverFrom: "from-blue-600/70",
    hoverTo: "to-blue-800/80",
  },
  green: {
    from: "from-green-500",
    to: "to-green-100",
    icon: "text-green-600",
    hoverFrom: "from-green-600/70",
    hoverTo: "to-green-800/80",
  },
  pink: {
    from: "from-pink-500",
    to: "to-pink-100",
    icon: "text-pink-600",
    hoverFrom: "from-pink-600/70",
    hoverTo: "to-pink-800/80",
  },
  yellow: {
    from: "from-yellow-500",
    to: "to-yellow-100",
    icon: "text-yellow-600",
    hoverFrom: "from-yellow-500/70",
    hoverTo: "to-yellow-700/80",
  },
  orange: {
    from: "from-orange-500",
    to: "to-orange-100",
    icon: "text-orange-600",
    hoverFrom: "from-orange-600/70",
    hoverTo: "to-orange-800/80",
  },
  lime: {
    from: "from-lime-500",
    to: "to-lime-100",
    icon: "text-lime-600",
    hoverFrom: "from-lime-600/70",
    hoverTo: "to-lime-800/80",
  },
  purple: {
    from: "from-purple-500",
    to: "to-purple-100",
    icon: "text-purple-600",
    hoverFrom: "from-purple-600/70",
    hoverTo: "to-purple-800/80",
  },
  red: {
    from: "from-red-500",
    to: "to-red-100",
    icon: "text-red-600",
    hoverFrom: "from-red-600/70",
    hoverTo: "to-red-800/80",
  },
};

const focuses = [
  {
    title: "Water & Sanitation",
    color: "blue",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    desc: "Ensuring clean water access and sanitation infrastructure for every community.",
  },
  {
    title: "Environmental Conservation",
    color: "green",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    desc: "Promoting sustainable practices to protect our ecosystems and natural resources.",
  },
  {
    title: "Gender Equity",
    color: "pink",
    icon: "M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z",
    desc: "Empowering women through inclusive programs and equal opportunity initiatives.",
  },
  {
    title: "Community Development",
    color: "yellow",
    icon: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
    desc: "Building resilient communities through participatory planning and local governance.",
  },
  {
    title: "Renewable Energy",
    color: "orange",
    icon: "M12 4V1m0 22v-3m11-8h-3M4 12H1m16.95 7.05l2.12 2.12M4.93 4.93L2.81 2.81m14.14 0l2.12 2.12M4.93 19.07l-2.12 2.12M12 8a4 4 0 100 8 4 4 0 000-8z",
    desc: "Advancing clean and renewable energy solutions for sustainable development.",
  },
  {
    title: "Waste Management",
    color: "lime",
    icon: "M6 19c0 1.1.9 2 2 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
    desc: "Encouraging efficient waste segregation, recycling, and zero-waste communities.",
  },
  {
    title: "Education & Skill Training",
    color: "purple",
    icon: "M12 3L1 9l11 6 9-5.09V17h2V9L12 3zM11 12.07L3.24 8.26 11 4.45v7.62z",
    desc: "Enhancing human potential through quality education and vocational training.",
  },
  {
    title: "Health & Nutrition",
    color: "red",
    icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.55C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    desc: "Improving community health outcomes through awareness, nutrition, and wellness programs.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* -------- Hero Section -------- */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 text-center text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering communities through sustainable development, innovation,
            and inclusion.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="#focus-areas"
              className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Explore Focus Areas
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* -------- Focus Areas -------- */}
      <section id="focus-areas" className="py-16 md:py-20 relative -mt-10">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle
            title="Our Key Focus Areas"
            subtitle="Making a Difference Across Sectors"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
          >
            {focuses.map((focus, idx) => {
              const colors = colorMap[focus.color];
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.25 },
                  }}
                  className={`group relative p-8 rounded-3xl bg-gradient-to-br ${colors.from} ${colors.to} shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 overflow-hidden`}
                >
                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.hoverFrom} ${colors.hoverTo} opacity-0 group-hover:opacity-95 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center text-center transition-colors duration-500">
                    <div
                      className={`w-16 h-16 mb-4 rounded-2xl bg-white/90 group-hover:bg-white/20 flex items-center justify-center shadow-md transition-all duration-500`}
                    >
                      <svg
                        className={`w-8 h-8 ${colors.icon} group-hover:text-white transition-colors duration-500`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={focus.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                      {focus.title}
                    </h3>
                    <p className="mt-3 text-gray-600 group-hover:text-gray-100 transition-colors duration-500 text-sm md:text-base leading-relaxed">
                      {focus.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
