export const metadata = {
  title: "Why Choose Us | Gym",
  description: "Discover what sets our gym apart: expert trainers, flexible classes, and proven results.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-60 overflow-hidden">
        <img
          src="/Slider-07-1.jpg"
          alt="Training equipment and members"
          className="absolute inset-0 w-full h-full bg-contain"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Why Choose Us
          </h1>
        </div>
      </section>
      {/* Page Content */}
      <main className="container mx-auto px-4 py-10">
        {/* The EMS System Section */}
        <section className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">The EMS system</h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
              Electrical muscle stimulation is a revolutionary way of getting rid of extra fat it provides an integrated electro muscle stimulations that burns fat 20 times more efficiently than a regular workout routine. It stimulates 90% of your body muscles instantaneously making it toner and slimmer. It helps you to lose 800 to 1400 calories in a 20 mints in just one personal training session that is equal to a 3 hour normal gym workout.
            </p>
          </div>
          <div className="w-full aspect-[5/3] bg-gray-200 overflow-hidden rounded shadow-md">
            <img
              src="/hdfg.png"
              alt="EMS training session"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        
      </main>
    </>
  );
}
