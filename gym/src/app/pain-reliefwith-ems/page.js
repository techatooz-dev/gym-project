import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { FcDataRecovery } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
function PainReliefEMS() {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#76C043] text-white py-16 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-white bg-sky-500 px-4 py-1 rounded">Pain Relief</span> with<br />EMS Technology
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8">
            Experience the Future of <strong>Pain Management</strong> and <br />
            <strong>Muscle Recovery</strong> Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#76C043] font-bold px-8 py-3 rounded shadow hover:bg-[#e6f7d6] transition">Get Started Today</button>
            <button className="bg-sky-500 text-white font-bold px-8 py-3 rounded shadow hover:bg-[#76C043] transition">Learn More</button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b23] mb-2">Experience Advanced Pain Relief</h2>
            <div className="mx-auto h-1 w-24 bg-[#76C043] rounded mb-4"></div>
            <p className="text-gray-700 text-lg">Transform your recovery process with cutting-edge EMS technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f7fafc] rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="bg-[#76C043] text-white rounded-full p-4 mb-4 text-3xl"><TbTargetArrow /></div>
              <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">Targeted Pain Relief</h3>
              <p className="text-gray-600">Advanced precision technology for specific muscle groups</p>
            </div>
            <div className="bg-[#f7fafc] rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="bg-[#76C043] text-white rounded-full p-4 mb-4 text-3xl"><FcDataRecovery /></div>
              <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">Fast Recovery</h3>
              <p className="text-gray-600">Scientifically proven electrical stimulation methods</p>
            </div>
            <div className="bg-[#f7fafc] rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="bg-[#76C043] text-white rounded-full p-4 mb-4 text-3xl"><GrUserExpert /></div>
              <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">Expert Care</h3>
              <p className="text-gray-600">Personalized treatment by certified professionals</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b23] mb-2">Our Treatment Approach</h2>
            <div className="mx-auto h-1 w-24 bg-[#76C043] rounded mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="text-[#76C043] text-3xl mb-4"><FaStar /></div>
              <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">Pain Management</h3>
              <p className="text-gray-600">Comprehensive solutions for chronic conditions</p>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="text-[#76C043] text-3xl mb-4"><FaStar /></div>
              <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">Athletic Performance</h3>
              <p className="text-gray-600">Enhanced recovery for peak performance</p>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="text-[#76C043] text-3xl mb-4"><FaStar /></div>
              <h3 className="font-semibold text-lg mb-2 text-[#0d3b23]">Rehabilitation</h3>
              <p className="text-gray-600">Customized recovery programs</p>
            </div>
          </div>
        </section>

        <section className="bg-[#76C043] rounded-xl py-12 px-6 text-center text-white shadow mb-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Transformation Today</h2>
            <p className="mb-6 text-lg">Join our satisfied clients and experience the power of EMS therapy</p>
            <button className="bg-white text-[#76C043] font-bold px-8 py-3 rounded shadow hover:bg-[#e6f7d6] transition inline-flex items-center gap-2">
              Schedule Free Consultation
              <span className="text-xl">→</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PainReliefEMS;
