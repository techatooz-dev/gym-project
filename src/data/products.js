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
    slug: "Fitness-training-suit-shirt",
    imageSrc: "/Fitness-training.jpg",
    title: "Fitness training suit shirt",
    price: "Rs7,000.00",
    description: "Advanced EMS suit supporting efficient full-body muscle activation sessions.",
  },
  {
    slug: "Hallus-valgus-thumb-correction-splint",
    imageSrc: "/Hallus-valgus.jpg",
    title: "Hallus valgus thumb correction splint",
    price: "Rs899.00",
    description: "Durable gel-based ice pack for portable cooling relief.",
  },
  {
    slug: "Hand-exercise-ball",
    imageSrc: "/Hand-exercise.jpg",
    title: "Hand exercise ball",
    price: "Rs4,200.00",
    description: "Versatile heating pad ideal for easing muscular tension and improving circulation.",
  },
  // Additional placeholder items (to be replaced with dynamic data later)
  {
    slug: "Hand-gripper",
    imageSrc: "/Hand-gripper-1.jpg",
    title: "Hand gripper",
    price: "Rs3,800.00",
    description: "Handheld massager offering deep tissue relief on the go.",
  },
  {
    slug: "Peanut-ball",
    imageSrc: "/Peanut-ball.jpg",
    title: "Peanut-ball",
    price: "Rs1,200.00",
    description: "Performance compression sleeve aiding circulation and support.",
  },
  {
    slug: "Theraband",
    imageSrc: "/Theraband.jpg",
    title: "Theraband",
    price: "Rs2,000.00",
    description: "Multi-strength bands for versatile training routines.",
  },
  {
    slug: "Trampoline",
    imageSrc: "/Trampoline.jpg",
    title: "Trampoline",
    price: "Rs1,500.00",
    description: "Textured roller to improve mobility and muscle recovery.",
  },
  {
    slug: "Twister",
    imageSrc: "/Twister.jpg",
    title: "Twister",
    price: "Rs1,000.00",
    description: "Non-slip cushioned mat built for comfort and stability.",
  },
  {
    slug: "Vinyl dumbbells",
    imageSrc: "/Vinyl-dumbbells.jpg",
    title: "Vinyl dumbbells",
    price: "Rs2,900.00",
    description: "Tracks hydration levels with integrated indicator.",
  },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}