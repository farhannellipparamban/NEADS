import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SolidWasteContent from "../content/SolidWasteContent";
import LiquidWasteContent from "../content/LiquidWasteContent";
import WaterSupplyContent from "../content/WaterSupplyContent";
import IrrigationContent from "../content/IrrigationContent";
import WaterResourcesContent from "../content/WaterResourcesContent";
import IECContent from "../content/IECContent";

const operations = [
  {
    id: "solid-waste",
    title: "Solid Waste Management",
    content: SolidWasteContent,
  },
  {
    id: "liquid-waste",
    title: "Liquid Waste Management",
    content: LiquidWasteContent,
  },
  {
    id: "water-supply",
    title: "Water Supply Scheme (WSS)",
    content: WaterSupplyContent,
  },
  {
    id: "irrigation",
    title: "Irrigation and Environmental Management",
    content: IrrigationContent,
  },
  {
    id: "water-resources",
    title: "Water Resources and Development",
    content: WaterResourcesContent,
  },
  { id: "iec", title: "IEC Programme", content: IECContent },
];

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const Dropdown = ({ operation, isOpen, onToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (document.activeElement) {
      document.activeElement.blur();
    }
    onToggle(operation.id);
  };

  return (
    <div
      className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ scrollMarginTop: "120px" }}
    >
      {/* Dropdown Button */}
      <button
        className="w-full text-left flex justify-between items-center px-6 py-5 text-xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200 focus:outline-none"
        onClick={handleClick}
      >
        {operation.title}
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Dropdown Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="px-6 pb-6"
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            {Array.isArray(operation.content) &&
              operation.content.map((item, index) => (
                <div key={index} className="mb-8">
                  {item.title && (
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-2">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="whitespace-pre-line text-gray-700 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                  {Array.isArray(item.images) && item.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {item.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md group"
                        >
                          <img
                            src={img}
                            alt={`Image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Objectives */}
                  {Array.isArray(item.objectives) &&
                    item.objectives.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                          Objectives:
                        </h4>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          {item.objectives.map((objective, i) => (
                            <li key={i}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {/* Outcomes */}
                  {Array.isArray(item.outcomes) && item.outcomes.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">
                        Outcomes:
                      </h4>
                      <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        {item.outcomes.map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Activities */}
                  {Array.isArray(item.activities) &&
                    item.activities.length > 0 && (
                      <div className="mt-8 space-y-6">
                        {item.activities.map((activity, i) => (
                          <div key={i}>
                            {activity.title && (
                              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                                • {activity.title}
                              </h4>
                            )}
                            {activity.description && (
                              <p className="ml-4 text-gray-700 leading-relaxed mb-2 whitespace-pre-line">
                                {activity.description}
                              </p>
                            )}
                            {Array.isArray(activity.images) &&
                              activity.images.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-2">
                                  {activity.images.map((img, k) => (
                                    <div
                                      key={k}
                                      className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md group"
                                    >
                                      <img
                                        src={img}
                                        alt={`Activity image ${k + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const [openOperation, setOpenOperation] = useState(null);

  const handleToggle = (id) => {
    setOpenOperation((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center">
          <SectionTitle
            title="Areas of Operations"
            subtitle="Explore Our Key Focus Areas"
          />
        </header>

        {/* Dropdown Sections */}
        <div className="space-y-6">
          {operations.map((operation) => (
            <Dropdown
              key={operation.id}
              operation={operation}
              isOpen={openOperation === operation.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
