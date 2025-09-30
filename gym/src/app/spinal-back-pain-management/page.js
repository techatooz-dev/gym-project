import React from 'react'
// import styles from './page.module.css'
import { FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiMuscleUp } from "react-icons/gi";
function SpinalPainManagement() {
  const treatments = [
    {
      id: 1,
      title: "Posture Correction",
      description: "Expert guidance for proper spinal alignment",
      icon: <FaStar className='text-[#76c043] text-[20px] mb-2'/>
    },
    {
      id: 2,
      title: "EMS Therapy",
      description: "Advanced electrical muscle stimulation",
      icon: <AiFillThunderbolt className='text-[#76c043] text-[20px] mb-2'/>
    },
    {
      id: 3,
      title: "Core Strengthening",
      description: "Targeted exercises for spinal support",
      icon: <GiMuscleUp className='text-[#76c043] text-[20px] mb-2'/>
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-[#76C043] text-white py-20 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-white px-2 py-1 rounded">Spinal Back Pain</span>
          </h1>
          <span className="block text-2xl font-semibold text-white mb-2">Management & Relief</span>
          <p className="text-lg opacity-90 mb-2">Advanced solutions for chronic back pain using innovative techniques</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0d3b23] text-center">Our Expertise in Back Pain Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                <span className="mb-4">{item.icon}</span>
                <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0d3b23] text-center">Comprehensive Care Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#76C043] flex flex-col items-center">
              <h3 className="font-bold mb-2 text-[#76C043] text-xl">01</h3>
              <p className="text-gray-700">Professional Assessment</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#76C043] flex flex-col items-center">
              <h3 className="font-bold mb-2 text-[#76C043] text-xl">02</h3>
              <p className="text-gray-700">Customized Treatment Plan</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#76C043] flex flex-col items-center">
              <h3 className="font-bold mb-2 text-[#76C043] text-xl">03</h3>
              <p className="text-gray-700">Regular Progress Monitoring</p>
            </div>
          </div>
        </section>

        <section className="bg-[#76C043] text-white rounded-xl p-8 text-center shadow mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Address Your Back Pain?</h2>
          <p className="mb-8 text-lg">Schedule a consultation with our spine specialists</p>
          <button className="bg-white text-[#76C043] px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#e6f7d6] transition-all duration-300">
            Book Your Session
            <span className="ml-2 text-xl">→</span>
          </button>
        </section>
      </div>
    </div>
  )
}

export default SpinalPainManagement

