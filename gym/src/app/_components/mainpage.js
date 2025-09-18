"use client";
import HeroSlider from "@/components/HeroSlider";
import OurServicesSection from "@/components/OurServicesSection";
import ProductCard from "@/components/ProductCard";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LatestArticles from "@/components/LatestArticles";
import MealPlans from "@/components/MealPlans";
import ClientsCarousel from "@/components/ClientsCarousel";
import QandA from "@/components/QandA";
import ImageSection from "@/components/imagesection";
import { products } from "@/data/products";
import { useState } from "react";
import Physiotherapy from "@/components/physiotherapy";
import Footer from "@/components/Footer";
import Ourteam from "@/components/Ourteam";
import Reviews from "@/components/Reviews";

export default function Page() {
  // Product data imported from centralized module.

  const [showAllProducts, setShowAllProducts] = useState(false);

  const visibleProducts = showAllProducts ? products : products.slice(0, 6);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero now flows with document */}
      <div className="w-full h-[calc(100vh-4rem)] md:h-[80vh] max-h-[900px] min-h-[480px]">
        <HeroSlider />
      </div>

      <OurServicesSection />
      {/* Diet Meal Plans (below products) */}
      {/* <MealPlans /> */}
      <ClientsCarousel />
      <WhyChooseUsSection />
      <QandA />
      <ImageSection />
      <Physiotherapy />
      <Ourteam />
      <Reviews />
      {/* <LatestArticles /> */}
      
    </main>
  );
}
