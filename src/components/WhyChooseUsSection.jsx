"use client";
import Link from "next/link";
import React from "react";

export default function WhyChooseUsSection() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl  grid md:grid-cols-2 items-stretch">
                {/* Image (fills entire column, no padding/margin/rounded) */}
                <div className="relative overflow-hidden group">
                    <img
                        src="/Why_choose_us-1.jpg"
                        alt="Training session"
                        className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center  px-10 py-10 bg-gray-50">
                    <span className="block w-40 h-1 bg-blue-700 mb-6" />
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-blue-700 mb-6">
                        WHY CHOOSE US
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                        Electrical muscle stimulation is a revolutionary way of getting rid of extra fat it provides an integrated electro muscle stimulations that burns fat 20 times more efficiently than a regular workout routine. It stimulates 90% of your body muscles instantaneously making it toner and slimmer. It helps you to lose 800 to 1400 calories in a 20 mints in just one personal training session that is equal to a 3 hour normal gym workout .
                    </p>
                    <Link
                        href="/why-choose-us"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 tracking-wide shadow-md transition-colors text-center w-fit"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </section>
    );
}