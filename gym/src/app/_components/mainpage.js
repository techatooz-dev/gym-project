"use client";
import HeroSlider from "@/components/Home/HeroSlider";
import OurServicesSection from "@/components/Home/OurServicesSection";
import ProductCard from "@/components/ProductCard";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import LatestArticles from "@/components/LatestArticles";
import MealPlans from "@/components/MealPlans";
import ClientsCarousel from "@/components/Home/ClientsCarousel";
import QandA from "@/components/Home/QandA";
import ImageSection from "@/components/Home/imagesection";
import { products } from "@/data/products";
import { useState } from "react";
import Physiotherapy from "@/components/Home/physiotherapy";
import Footer from "@/components/Footer";
import Ourteam from "@/components/Home/Ourteam";
import Reviews from "@/components/Home/Reviews";
import ExpertCare from "@/components/Home/ExpertCare";
import PowerEMS from "@/components/Home/PowerEMS";
import DietMeal from "@/components/Home/DietMeal";
import PainRelefe from "@/components/Home/PainRelefe";
import Spraind from "@/components/Home/Spraind";
import Vedio from "@/components/Home/Vedio";

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
      <ExpertCare />
      <PowerEMS />
      {/* <OurServicesSection /> */}
      {/* Diet Meal Plans (below products) */}
      {/* <MealPlans /> */}
      <ClientsCarousel />
      {/* <ImageSection /> */}
      <Vedio />
      <QandA />
      <WhyChooseUsSection />
      <DietMeal />
       <Physiotherapy />
      <PainRelefe />
      <Spraind />
       {/* <Ourteam /> */}
      <Reviews />  
      {/* <LatestArticles /> */}
      
    </main>
  );
}
