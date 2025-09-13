export const metadata = {
  title: "Services | Gym",
  description: "Explore our EMS training services and personalized programs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative w-full h-60 overflow-hidden">
        <img
          src="/Slider-04-1.jpg"
          alt="EMS training services overview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Services
          </h1>
        </div>
      </section>
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl space-y-6 text-gray-600">
          <p>
            Our EMS services are designed to deliver efficient, full-body workouts in minimal time. Whether you are looking to build strength, aid rehabilitation, or enhance performance, we have tailored solutions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal EMS Training:</strong> One-on-one coaching focused on your goals.</li>
            <li><strong>Group EMS Sessions:</strong> Energizing small group formats for motivation.</li>
            <li><strong>Rehabilitation Support:</strong> Programs aiding recovery and muscle activation.</li>
            <li><strong>Performance Optimization:</strong> Enhance muscle responsiveness and endurance.</li>
          </ul>
          <p>
            Contact us to schedule a free introductory session and discover how electrical muscle stimulation can help you reach your fitness goals faster.
          </p>
        </div>
      </main>
    </>
  );
}
