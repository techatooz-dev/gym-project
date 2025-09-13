// Centralized product data so both the homepage and product detail pages can use it.
// In a real app this would come from a database or API.
export const products = [
  {
    slug: "coldpack",
    imageSrc: "/Coldpack.jpg",
    title: "Coldpack",
    price: "Rs999.00",
    description: "Reusable cold pack designed to reduce inflammation and relieve muscle soreness quickly.",
  },
  {
    slug: "electrical-hot-pack",
    imageSrc: "/Electrical.jpg",
    title: "Electrical Hot pack",
    price: "Rs5,500.00",
    description: "Electric heating pack providing consistent therapeutic warmth to support recovery and comfort.",
  },
  {
    slug: "fitness-training-suit-trouser",
    imageSrc: "/Finess-training.jpg",
    title: "Finess training suit trouser",
    price: "Rs2,500.00",
    description: "Comfortable performance trousers engineered for enhanced flexibility during workouts.",
  },
  {
    slug: "ems-training-suit",
    imageSrc: "/Fitness-training.jpg",
    title: "EMS training suit",
    price: "Rs7,000.00",
    description: "Advanced EMS suit supporting efficient full-body muscle activation sessions.",
  },
  {
    slug: "ice-pack",
    imageSrc: "/Hallus-valgus.jpg",
    title: "Ice pack",
    price: "Rs899.00",
    description: "Durable gel-based ice pack for portable cooling relief.",
  },
  {
    slug: "heating-pad",
    imageSrc: "/Hand-exercise.jpg",
    title: "Heating pad",
    price: "Rs4,200.00",
    description: "Versatile heating pad ideal for easing muscular tension and improving circulation.",
  },
  // Additional placeholder items (to be replaced with dynamic data later)
  {
    slug: "portable-massager",
    imageSrc: "/Slider-01-2.jpg",
    title: "Portable massager",
    price: "Rs3,800.00",
    description: "Handheld massager offering deep tissue relief on the go.",
  },
  {
    slug: "compression-sleeve",
    imageSrc: "/Slider-02-3.jpg",
    title: "Compression sleeve",
    price: "Rs1,200.00",
    description: "Performance compression sleeve aiding circulation and support.",
  },
  {
    slug: "resistance-band-set",
    imageSrc: "/Slider-03.jpg",
    title: "Resistance band set",
    price: "Rs2,000.00",
    description: "Multi-strength bands for versatile training routines.",
  },
  {
    slug: "foam-roller",
    imageSrc: "/Slider-04-1.jpg",
    title: "Foam roller",
    price: "Rs1,500.00",
    description: "Textured roller to improve mobility and muscle recovery.",
  },
  {
    slug: "yoga-mat-premium",
    imageSrc: "/Slider-01-2.jpg",
    title: "Premium yoga mat",
    price: "Rs2,200.00",
    description: "Non-slip cushioned mat built for comfort and stability.",
  },
  {
    slug: "smart-water-bottle",
    imageSrc: "/Slider-02-3.jpg",
    title: "Smart water bottle",
    price: "Rs2,900.00",
    description: "Tracks hydration levels with integrated indicator.",
  },
  {
    slug: "ankle-weights",
    imageSrc: "/Slider-03.jpg",
    title: "Ankle weights",
    price: "Rs1,750.00",
    description: "Adjustable weights to intensify lower body exercises.",
  },
  {
    slug: "skipping-rope-pro",
    imageSrc: "/Slider-04-1.jpg",
    title: "Pro skipping rope",
    price: "Rs950.00",
    description: "Speed rope engineered for smooth rotations and durability.",
  },
  {
    slug: "balance-board",
    imageSrc: "/Slider-01-2.jpg",
    title: "Balance board",
    price: "Rs3,100.00",
    description: "Core stability trainer to enhance balance and coordination.",
  },
  {
    slug: "mini-stepper",
    imageSrc: "/Slider-02-3.jpg",
    title: "Mini stepper",
    price: "Rs6,200.00",
    description: "Compact cardio stepper ideal for home workouts.",
  },
  {
    slug: "thera-putty",
    imageSrc: "/Slider-03.jpg",
    title: "Thera putty",
    price: "Rs650.00",
    description: "Rehabilitation putty for grip strength and therapy.",
  },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}