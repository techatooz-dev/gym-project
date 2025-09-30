import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
function SprainedAnkleRecovery() {
  // Define data arrays outside of JSX
  const sprainTypes = [
    { grade: "Grade 1", desc: "Mild stretching and microscopic tearing" },
    { grade: "Grade 2", desc: "Partial tearing of the ligament" },
    { grade: "Grade 3", desc: "Complete tear of the ligament" }
  ];

  const causes = [
    "Walking or running on uneven surfaces",
    "Sports injuries",
    "Improper footwear",
    "Sudden changes in direction"
  ];

  const symptoms = [
    "Pain when bearing weight",
    "Swelling and bruising",
    "Restricted range of motion",
    "Instability in the ankle"
  ];

  const recoveryPhases = [
    {
      phase: "Immediate Care",
      time: "48-72 Hours",
      steps: ["Rest", "Ice", "Compression", "Elevation"]
    },
    {
      phase: "Sub-Acute",
      time: "3-7 Days",
      steps: ["Controlled mobility", "Gentle movements", "Support walking"]
    },
    {
      phase: "Rehabilitation",
      time: "1-6 Weeks",
      steps: ["Stretching", "Strengthening", "Balance training"]
    },
    {
      phase: "Return",
      time: "6-12 Weeks",
      steps: ["Functional training", "Agility drills", "Final evaluation"]
    }
  ];

  const preventionTips = [
    "Warm up properly before activity",
    "Wear proper footwear",
    "Strengthen ankle muscles",
    "Avoid uneven terrain",
    "Use ankle braces if needed"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-[#76C043] text-white py-20 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className=" text-white px-2 py-1 rounded">Sprained Ankle Recovery</span>
          </h1>
          <p className="text-xl opacity-90 mb-2">Complete Guide to Healing and Prevention</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What is Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#0d3b23] flex items-center">
              <span className="mr-2 text-[#76C043]">✅</span> What is a Sprained Ankle?
            </h2>
            <p className="text-gray-700 mb-8">
              A sprained ankle occurs when the ligaments that support the ankle stretch or tear due to sudden twisting, rolling, or turning of the foot.
            </p>
            {/* Types of Sprains */}
            <div className="grid md:grid-cols-3 gap-6">
              {sprainTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#76C043]">
                  <h3 className="font-bold mb-2 text-[#0d3b23]">{type.grade}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Causes & Symptoms */}
  <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0d3b23]">
              <FaUserDoctor className='mr-5 text-[#76c043]'/> Common Causes
            </h2>
            <ul className="space-y-3">
              {causes.map((cause, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#76c043] mr-2">•</span>
                  {cause}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0d3b23]">
              <FaSearch className='mr-5 text-[#76c043]'/> Symptoms
            </h2>
            <ul className="space-y-3">
              {symptoms.map((symptom, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#76c043] mr-2">•</span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-[#0d3b23]">
            <FaClock className='mr-5 text-[#76c043]'/> Recovery Timeline
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoveryPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#0d3b23] mb-2">{phase.phase}</h3>
                <p className="text-sm text-[#76c043] mb-4">{phase.time}</p>
                <ul className="space-y-2">
                  {phase.steps.map((step, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-[#76c043] mr-2">✓</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-[#0d3b23]">
              <FaBrain className='mr-5 text-[#76c043]'/> Prevention Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {preventionTips.map((tip, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <span className="text-[#76c043] mr-3">✓</span>
                  <p className="text-[#0d3b23]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#76C043] text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="mb-8 text-lg">Our specialists are ready to assist in your recovery journey</p>
          <button className="bg-white text-[#76C043] px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#e6f7d6] transition-all duration-300">
            Schedule Consultation
          </button>
        </section>
      </div>
    </div>
  )
}

export default SprainedAnkleRecovery
