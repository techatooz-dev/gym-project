import React from 'react'
import { GiKneeCap } from "react-icons/gi";
import { LuBicepsFlexed } from "react-icons/lu";
function KneeShoulderTherapy() {
  const kneeConditions = [
    "Ligament Injuries (ACL, PCL, MCL, LCL tears)",
    "Meniscus Tears",
    "Patellofemoral Pain Syndrome",
    "Osteoarthritis of the Knee",
    "Tendinitis or Bursitis",
    "Post-Surgical Rehab"
  ];

  const shoulderConditions = [
    "Rotator Cuff Injuries",
    "Frozen Shoulder",
    "Shoulder Impingement Syndrome",
    "Dislocations & Instability",
    "Labral Tears",
    "Arthritis of the Shoulder"
  ];

  const treatmentMethods = [
    "Manual Therapy",
    "Therapeutic Exercise",
    "Joint Stabilization",
    "Stretching & Strengthening",
    "Posture Correction",
    "Electrical Stimulation"
  ];

  const benefits = [
    "Relieves Pain & Inflammation",
    "Restores Joint Mobility",
    "Improves Strength & Endurance",
    "Prevents Re-Injury",
    "Enhances Performance",
    "Promotes Joint Health"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-[#76C043] text-white py-20 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-white px-2 py-1 rounded">Knee & Shoulder Therapy</span>
          </h1>
          <p className="text-xl opacity-90 mb-2">Specialized Treatment for Joint Recovery and Performance</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Conditions Grid */}
  <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0d3b23]">
              <GiKneeCap className='mr-5 text-[#76c043]'/> Knee Conditions
            </h2>
            <ul className="space-y-3">
              {kneeConditions.map((condition, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#76c043] mr-2">•</span>
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0d3b23]">
              <LuBicepsFlexed className='mr-5 text-[#76c043]'/> Shoulder Conditions
            </h2>
            <ul className="space-y-3">
              {shoulderConditions.map((condition, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#76c043] mr-2">•</span>
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Treatment Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0d3b23]">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {treatmentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#76c043]">{method}</h3>
                <div className="h-1 w-20 bg-[#76c043] mb-4"></div>
                <p className="text-gray-600">Specialized therapy techniques for optimal recovery</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0d3b23]">Recovery Timeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            { [
              {
                condition: "Minor Strain",
                time: "2-4 Weeks"
              },
              {
                condition: "Ligament Injuries",
                time: "6-12 Weeks"
              },
              {
                condition: "Post-Surgery",
                time: "3-6 Months"
              },
              {
                condition: "Chronic Management",
                time: "Ongoing"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 border-l-4 border-[#76c043]">
                <h3 className="font-semibold mb-2 text-[#0d3b23]">{item.condition}</h3>
                <p className="text-[#76c043]">{item.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0d3b23]">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg flex items-center">
                <span className="text-[#76c043] mr-3">✓</span>
                <span className="text-[#0d3b23]">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#76C043] text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery?</h2>
          <p className="mb-8 text-lg">Schedule a consultation with our therapy specialists</p>
          <button className="bg-white text-[#76C043] px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#e6f7d6] transition-all duration-300">
            Book Appointment
          </button>
        </section>
      </div>
    </div>
  )
}

export default KneeShoulderTherapy
