import React from "react";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function DietMeal() {
  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className={`${anton.className}  text-[96px] md-text-[46px] font-extrabold tracking-tight text-gray-900`}>
            DIET MEAL PLANS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* 1. Weight Loss */}
          <div className="p-6 md:p-7 shadow-lg text-white h-full min-h-[220px] flex flex-col" style={{ backgroundColor: "#25B7E6" }}>
            <h3 className="text-xl md:text-2xl font-extrabold mb-3">
              1. Weight Loss Meal Plan
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-95">
              A calorie-controlled plan focused on balanced nutrition with lean proteins, fiber-rich
              vegetables, and whole grains. Designed to promote fat loss while maintaining muscle
              strength and energy levels for EMS training.
            </p>
          </div>

          {/* 2. Muscle Gain */}
          <div className="p-6 md:p-7 shadow-lg text-white h-full min-h-[220px] flex flex-col" style={{ backgroundColor: "#8BC34A" }}>
            <h3 className="text-xl md:text-2xl font-extrabold mb-3">
              2. Muscle Gain Meal Plan
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-95">
              High in protein and complex carbohydrates, this plan fuels muscle growth and recovery.
              Includes nutrient-dense meals and healthy fats to support strength building, endurance,
              and faster post-workout recovery.
            </p>
          </div>

          {/* 3. Wellness & Maintenance */}
          <div className="p-6 md:p-7 shadow-lg text-white h-full min-h-[220px] flex flex-col" style={{ backgroundColor: "#25B7E6" }}>
            <h3 className="text-xl md:text-2xl font-extrabold mb-3">
              3. Wellness & Maintenance Meal Plan
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-95">
              High in protein and complex carbohydrates, this plan fuels muscle growth and recovery.
              Includes nutrient-dense meals and healthy fats to support strength building, endurance,
              and faster post-workout recovery.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3  text-black font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          style={{ backgroundColor: "#8BC34A" }} >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
