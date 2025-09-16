export const metadata = {
  title: "Classes | Gym",
  description: "Explore our class schedule and find the perfect workout for you.",
};

// EMS class offerings data
const classPrograms = [
  {
    id: 'all-coaching',
    title: 'EMS Fitness Class With Coach',
    subtitle: 'For ladies, men & women',
    description:
      'Guided EMS training sessions tailored for every body. Improve strength, posture and conditioning with a certified coach ensuring proper form and safe progression.',
    image: '/COACH-1.jpg',
  },
  {
    id: 'wedding-package',
    title: 'Wedding Fitness Package',
    subtitle: '1‑month personalized program',
    description:
      'Personalized EMS workouts plus a supportive meal framework to help you shape up confidently for your special day while managing time-efficient sessions.',
    image: '/wedding1.webp',
  },
  {
    id: 'joint-pain',
    title: 'EMS fitness class for patient with joint pain',
    subtitle: 'Low impact / weight reduction',
    description:
      'EMS (Electrical Muscle Stimulation) training is a safe and effective solution for people who suffer from joint pain and cannot perform heavy gym workouts. With low-impact electrical impulses, EMS activates muscles without putting extra pressure on the joints. This makes it an ideal option for rehabilitation, pain relief, and overall fitness improvement.',
    image: '/joint-pain.jpg',
  },
  {
    id: 'postpartum',
    title: 'EMS fitness training After delivery',
    subtitle: 'Core & gradual toning',
    description:
      'Post-pregnancy recovery can be challenging, especially when it comes to regaining strength and fitness. EMS (Electrical Muscle Stimulation) training provides a gentle yet effective way for new mothers to get back in shape. With its low-impact approach, EMS targets deep muscle groups, improves core stability, and supports pelvic floor recovery — all without putting stress on the joints or requiring long gym sessionsJust 20 minutes of EMS training can help boost metabolism, tone the body, and restore energy levels, making it a safe and time-efficient option for busy new moms.',
    image: '/EMS-fitness-training.jpeg',
  },
  {
    id: 'pcos-support',
    title: 'Fitness training for PCOS',
    subtitle: 'Metabolic & weight management',
    description:
      'Regular fitness training plays an important role in managing PCOS (Polycystic Ovary Syndrome). Exercise helps reduce insulin resistance, balance hormones, and manage weight effectively. Low-impact workouts, strength training, and cardio activities can improve metabolism, support fat loss, and boost energy levels.With a consistent fitness routine, women with PCOS can not only manage symptoms like weight gain and fatigue but also improve overall health and well-being.',
    image: '/Fitness-training-for-PCOS.jpg',
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-60 overflow-hidden">
        <img
          src="/Slider-08.jpg"
          alt="People training with EMS equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Classes
          </h1>
        </div>
      </section>
      <main className="container mx-auto px-4 py-10">
        {/* Programs Section (Alternating layout, no cards) */}
        <section className="mb-8">
          {/* <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our EMS Class Programs</h2>
            <p className="text-gray-600 leading-relaxed">
              Explore specialized EMS training paths crafted for different life stages and goals. Scroll through or jump via the quick navigation below.
            </p>
          </div> */}
          {/* Quick anchor navigation */}
          <nav className="flex gap-3 overflow-x-auto pb-4 mb-10 -mx-1" aria-label="Program quick navigation">
            {classPrograms.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                {p.title.replace(/EMS /,'')}
              </a>
            ))}
          </nav>
          <div className="space-y-20">
            {classPrograms.map((program, idx) => (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-28"
              >
                <div className={`md:grid md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'md:[&>div:first-child]:order-2' : ''}`}> 
                  {/* Image */}
                  <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-200">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2500ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent mix-blend-multiply" />
                    <span className="absolute top-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                      EMS Program
                    </span>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 mt-4">{program.title}</h3>
                    <p className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-4">{program.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{program.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-5 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-md shadow hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 transition">
                        Book Trial
                      </button>
                      <button className="px-5 py-2.5 bg-white border border-gray-300 text-sm font-medium rounded-md shadow-sm hover:border-blue-400 hover:text-blue-700 transition">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Featured Image Section */}
        {/* <section className="relative w-full mt-20 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
          <img
            src="/Slider-03.jpg"
            alt="High intensity EMS session in progress"
            className="w-full h-[380px] md:h-[460px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow">
              Efficient Full-Body Activation In Just 20 Minutes
            </h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
              Our EMS methodology fuses science-backed muscle stimulation with smart coaching cues so you push safely, recover efficiently and progress faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition">
                Start Your Journey
              </button>
              <button className="px-6 py-3 bg-white/90 hover:bg-white text-gray-800 text-sm font-semibold rounded-md shadow border border-gray-200 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition">
                How It Works
              </button>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
