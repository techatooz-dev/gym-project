export const metadata = {
  title: "Services | Gym",
  description: "Explore our EMS training services and personalized programs.",
};

export default function ServicesPage() {
  const Card = ({ title, body, image, align = 'left', accent = 'bg-lime-500' }) => {
    const isCenter = align === 'center';
    return (
      <div className={`relative ${isCenter ? 'text-center' : ''}`}>
        <div className={`inline-block ${accent} text-white font-semibold rounded-sm px-4 py-1 mb-4`}>{title}</div>
        <p className={`text-gray-700 leading-relaxed max-w-prose mb-5 ${isCenter ? 'mx-auto text-center' : ''}`}>{body}</p>
        <img
          src={image}
          alt={title}
          className={`w-full h-58 md:h-76 object-cover rounded-sm shadow ${isCenter ? 'mx-auto' : ''}`}
        />
      </div>
    );
  };
  const ImageGallery = ({ items }) => (
    <section className="mt-16 md:mt-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-6">Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx + 1}`}
            className="w-full aspect-[4/3] object-cover rounded-md shadow"
          />
        ))}
      </div>
    </section>
  );

  return (
    <main className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-gray-900">
      {/* Header */}
      <header className="relative pb-10 md:pb-12 text-center">
        <h1 className="text-sky-500 tracking-tight font-extrabold uppercase text-4xl md:text-6xl">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          At Pro EMS Fit, we bring you advanced EMS technology combined with expert physiotherapy and
          fitness training to help you recover faster, perform better, and live pain‑free. Explore our
          specialized services below.
        </p>



        {/* arrow image section right after intro */}
        <section className="my-6 md:my-8 flex justify-center">
          <img src="/firstarro.png" alt="section arrow" className="w-80 md:w-142 h-auto" />
        </section>
      </header>




      {/* Services in a clean grid (no lines) */}
      <section className="space-y-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <Card
            title="EMS Sessions"
            body="Experience the power of Electrical Muscle Stimulation (EMS), a modern fitness and recovery technique designed to activate deep muscle fibers, improve circulation, and boost strength in less time than traditional."
            image="/first.png"
            align="center"
          />
          <Card
            title="Sports Performance Training"
            body="Enhance your athletic performance with customized EMS-based training programs. Our sessions focus on speed, agility, endurance, and strength—helping athletes reach their peak potential safely and effectively."
            image="/second.png"
            align="center"
          />
        </div>






        {/* arrow image section right after intro */}
        <section className="my-6 md:my-8 flex justify-center">
          <img src="/arro.png" alt="section arrow" className="w-80 md:w-142 h-auto" />
        </section>







        <div className="max-w-3xl mx-auto text-center">
          <Card
            title="Physiotherapy Sessions"
            body="Recover with professional physiotherapy tailored to your needs. Our experts combine EMS with manual therapy to improve mobility, relieve stiffness, and accelerate the healing process."
            image="/third.jpg"
            align="center"
          />
        </div>





 {/* arrow image section right after intro */}
        <section className="my-6 md:my-8 flex justify-center">
          <img src="/firstarro.png" alt="section arrow" className="w-80 md:w-142 h-auto" />
        </section>





        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <Card
            title="Wellness Programs"
            body="Our holistic wellness plans combine EMS, physical therapy, and guided workouts to promote overall health, reduce stress, and maintain long-term body balance."
            image="/forth.jpg"
            align="center"
          />
          <Card
            title="Pain Relief with EMS"
            body="Say goodbye to chronic pain! EMS therapy targets deep tissues to relieve discomfort caused by injuries, overuse, or medical conditions—restoring your comfort and mobility naturally."
            image="/fiveth.jpg"
            align="center"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <Card
            title="Sprained Ankle Recovery"
            body="Specialized EMS sessions help reduce swelling, restore movement, and strengthen muscles around the ankle, speeding up your recovery and preventing future injuries."
            image="/seven.png"
            align="center"
            accent="bg-sky-500"
          />
          <Card
            title="Spinal & Back Pain Management"
            body="Designed for individuals suffering from back pain, our EMS‑based therapy improves posture, reduces muscle tension, and supports spinal health with targeted muscle activation."
            image="/eight.jpg"
            align="center"
            accent="bg-sky-500"
          />
        </div>
      </section>

      {/* Image gallery */}
      {/* <ImageGallery
        items={[
          '/EMS.jpg',
          '/Sports.png',
          '/Physiotherapy.png',
          '/Wellness.jpeg',
          '/pain.png',
          '/spenal.jpg',
          '/backpain.jpeg',
        ]}
      /> */}
    </main>
  );
}
