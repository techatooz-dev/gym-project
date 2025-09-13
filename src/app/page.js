"use client";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LatestArticles from "@/components/LatestArticles";
import MealPlans from "@/components/MealPlans";
import ClientsCarousel from "@/components/ClientsCarousel";
import { products } from "@/data/products";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  // Slightly taller than the viewport to guarantee full-screen cover on all devices
  const sliderHeight = "calc(100vh + 6rem)";
  // Product data imported from centralized module.

  const [showAllProducts, setShowAllProducts] = useState(false);

  const visibleProducts = showAllProducts ? products : products.slice(0, 6);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Fixed Slider (always visible, z-0) */}
      <div
        className="fixed top-0 left-0 w-full z-0"
        style={{ height: sliderHeight }}
      >
        <HeroSlider />
      </div>

      {/* Main Content starts below the slider */}
      <div
        className="relative z-10"
        style={{ paddingTop: sliderHeight }}
      >
        <section className="text-center py-10 mt-18 bg-white">
          <h2 className="text-blue-700 font-bold border-b-2 border-blue-700 inline-block mb-8 text-2xl tracking-wide">
            OUR PRODUCTS
          </h2>
          <div className="mt-10 grid gap-10 max-w-7xl mx-auto px-4 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((p) => (
              <ProductCard
                key={p.slug}
                imageSrc={p.imageSrc}
                title={p.title}
                price={p.price}
                slug={p.slug}
              />
            ))}
          </div>
          {/* All Products button */}
          {!showAllProducts && products.length > 6 && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProducts(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-4 tracking-wide shadow-md transition-colors"
              >
                ALL PRODUCTS
              </button>
            </div>
          )}
        </section>

        {/* Diet Meal Plans (below products) */}
        <MealPlans />
        <ClientsCarousel />
        <WhyChooseUsSection />
        <LatestArticles />
     
      </div>
    </main>
  );
}
