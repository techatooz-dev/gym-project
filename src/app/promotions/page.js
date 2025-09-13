export const metadata = {
  title: "Promotions | Gym",
  description: "See current deals, discounts, and membership offers.",
};

export default function PromotionsPage() {
  return (
    <>
      {/* Hero Section (mirrors Classes page) */}
      <section className="relative w-full h-60 overflow-hidden">
        <img
          src="/Slider-02-3.jpg"
          alt="Participants enjoying a dynamic EMS session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Promotions
          </h1>
        </div>
      </section>
      <main className="container mx-auto px-4 py-10">
        {/* Two-Image Section */}
        <section className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-gray-200 bg-white">
            <img
              src="/Slider-03.jpg"
              alt="EMS coaching session promotional visual"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
            <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-gray-200 bg-white">
              <img
                src="/Why_choose_us-1.jpg"
                alt="Individual performing EMS exercise promotion"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
        </section>
        <p className="text-gray-600 max-w-3xl">
          We’ll showcase limited-time offers and membership plans here.
        </p>
      </main>
    </>
  );
}
