"use client";
import React from "react";

export default function MealPlans() {
  return (
    <section className="relative w-full">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="bg.jpg"
          alt="Diet meal background"
          className="w-full h-full object-cover"
        />
        <div className="" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 text-center text-white">
        {/* Section Title with blue accent line */}
        <div className="mb-10">
          <span className="block w-24 h-1 bg-blue-600 mx-auto mb-3" />
          <h2 className="text-blue-600 font-bold text-2xl tracking-wide">DIET MEAL PLANS</h2>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* I WEEK PLAN */}
          <div className="px-4">
            <h3 className="text-green-600 font-bold text-xl mb-3">I WEEK PLAN</h3>
            <p className="max-w-sm mx-auto leading-relaxed">
              3 meals Monday to Saturday fulfilling your nutritional demands of the body
            </p>
            <p className="font-bold mt-4">Rps 12000</p>
          </div>

          {/* BASIC PLAN */}
          <div className="px-4">
            <h3 className="text-green-600 font-bold text-xl mb-3">BASIC PLAN</h3>
            <p className="max-w-sm mx-auto leading-relaxed">
              3 meals Monday to Friday for a whole month fulfilling all your body requirement
            </p>
            <p className="font-bold mt-4">Rps 30000</p>
          </div>

          {/* PRO PLAN */}
          <div className="px-4">
            <h3 className="text-green-600 font-bold text-xl mb-3">PRO PLAN</h3>
            <p className="max-w-sm mx-auto leading-relaxed">
              3 meals plus snacks to satisfy your food cravings for a month
            </p>
            <p className="font-bold mt-4">Rps 37000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
