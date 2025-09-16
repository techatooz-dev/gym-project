export const metadata = {
  title: "Benefits | Gym",
  description: "Discover the benefits of joining our gym.",
};

export default function BenefitsPage() {
  return (
    <>
      {/* Hero Section (same as Classes page) */}
      <section className="relative w-full h-60 overflow-hidden">
        <img
          src="/Slider-01-2.jpg"
          alt="EMS training equipment closeup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Benefits
          </h1>
        </div>
      </section>

      {/* Page content */}
      <main className="container mx-auto px-4 py-10">
        {/* Two feature articles */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Card 1 */}
          <article>
            <div className="w-full aspect-[16/11] rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm mb-6">
              <img
                src="/emsfitness.jpg"
                alt="EMS training outdoors with masks during covid"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">Ems fitness and covid-19</h3>
            <p className="text-gray-700 leading-relaxed">
              During covid apart from following SOPS we are dealing on individual client basis with no contact between client and trainer
            </p>
          </article>

          {/* Card 2 */}
          <article>
            <div className="w-full aspect-[16/11] rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm mb-6">
              <img
                src="/imunity.jpg"
                alt="Healthy juice and fruits for immunity boost"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">Immunity booster</h3>
            <p className="text-gray-700 leading-relaxed">
              Help yourself , boost immunity by reducing extra calories by ems resistance training
            </p>
          </article>
        </section>

        {/* Additional two sections below, matching layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-14">
          {/* Card 3 */}
          <article>
            <div className="w-full aspect-[16/11] rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm mb-6">
              <img
                src="/fit at older.jpg"
                alt="Active seniors stretching in a fitness class"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">Fit at older age</h3>
            <p className="text-gray-700 leading-relaxed">
              Low‑impact EMS sessions help maintain mobility, balance and muscle tone while being gentle on joints—ideal for staying active as you age.
            </p>
          </article>

          {/* Card 4 */}
          <article>
            <div className="w-full aspect-[16/11] rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm mb-6">
              <img
                src="/fitnessandsp.jpg"
                alt="Athletes training with battle ropes in a gym"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">FITNESS AND SPORTS</h3>
            <p className="text-gray-700 leading-relaxed">
              Boost performance and conditioning by activating more muscle fibers in less time. EMS complements sports training with efficient full‑body engagement.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
