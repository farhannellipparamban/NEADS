// src/pages/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SectionTitle from "../components/SectionTitle";
import SolidWasteContent from "../content/SolidWasteContent";
import LiquidWasteContent from "../content/LiquidWasteContent";
import WaterSupplyContent from "../content/WaterSupplyContent";
import IrrigationContent from "../content/IrrigationContent";
import WaterResourcesContent from "../content/WaterResourcesContent";
import IECContent from "../content/IECContent";

const operations = [
  { id: "solid-waste", title: "Solid Waste Management", content: SolidWasteContent },
  { id: "liquid-waste", title: "Liquid Waste Management", content: LiquidWasteContent },
  { id: "water-supply", title: "Water Supply Scheme (WSS)", content: WaterSupplyContent },
  { id: "irrigation", title: "Irrigation and Environmental Management", content: IrrigationContent },
  { id: "water-resources", title: "Water Resources and Development", content: WaterResourcesContent },
  { id: "iec", title: "IEC Programme", content: IECContent },
];

// Dropdown Component
const Dropdown = ({ operation, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (isOpen) {
      const fullHeight = el.scrollHeight;

      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            el.style.height = "auto";
          },
        }
      );

      // smooth scroll
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      const currentHeight = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: currentHeight, opacity: 1 },
        {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
          onComplete: () => {
            el.style.height = "0px";
            el.style.opacity = "0";
          },
        }
      );
    }
  }, [isOpen]);

  return (
    <div
      className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
      style={{ scrollMarginTop: "100px" }}
    >
      {/* Header */}
      <button
        onClick={() => onToggle(operation.id)}
        className="w-full flex justify-between items-center px-6 py-5 text-xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200"
      >
        {operation.title}
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Animated Content */}
      <div
        ref={contentRef}
        className="px-6 pb-6 overflow-hidden"
        style={{
          height: 0,
          opacity: 0,
        }}
      >
        {isOpen && (
          <div>
            {Array.isArray(operation.content) &&
              operation.content.map((item, index) => (
                <div key={index} className="mb-10">
                  {item.title && (
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-4">
                      {item.title}
                    </h3>
                  )}

                  {item.description && (
                    <p className="whitespace-pre-line text-gray-700 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}

                  {/* Images */}
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
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Objectives */}
                  {Array.isArray(item.objectives) && item.objectives.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">
                        Objectives:
                      </h4>
                      <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        {item.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
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
                  {Array.isArray(item.activities) && item.activities.length > 0 && (
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
                                    className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md group"
                                  >
                                    <img
                                      src={img}
                                      alt={`Activity image ${k + 1}`}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const Projects = () => {
  const [openOperation, setOpenOperation] = useState(null);

  const handleToggle = (id) => {
    setOpenOperation((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <SectionTitle
            title="Areas of Operations"
            subtitle="Explore Our Key Focus Areas"
          />
        </header>

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
