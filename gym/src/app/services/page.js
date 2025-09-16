export const metadata = {
  title: "Services | Gym",
  description: "Explore our EMS training services and personalized programs.",
};

export default function ServicesPage() {
  const sections = [
    {
      id: 'ems-sessions',
      title: 'EMS Sessions',
      image: '/EMS.jpg',
      accent: 'bg-sky-600',
      body: `At Pro EMS Fit, we offer specialized EMS sessions tailored to your needs. From fitness training with certified physiotherapists to personalized wedding fitness plans with diet guidance, we ensure effective results. For joint pain patients, our EMS programs provide safe, low-impact training without the heavy gym load.`
    },
    {
      id: 'sports-performance',
      title: 'Sports Performance Training',
      image: '/Sports.png',
      accent: 'bg-lime-500',
      body: `Specialized EMS-based training designed to improve strength, endurance, and flexibility for athletes and active individuals, while reducing the risk of injuries. These programs also enhance performance and support faster recovery, helping you stay at your best.`
    },
    {
      id: 'physiotherapy',
      title: 'Physiotherapy Sessions',
      image: '/Physiotherapy.png',
      accent: 'bg-cyan-600',
      body: `Pro EMS Fit provides expert care for a wide range of conditions, including musculoskeletal disorders such as frozen shoulder, neck or knee pain, and disc bulge. Our team also supports patients with neurological disorders like stroke, cerebral palsy, vertigo, and facial palsy. In addition, we offer specialized rehabilitation for sports injuries, from ACL tears to dislocations, ensuring safe recovery and improved performance.`
    },
    {
      id: 'wellness-programs',
      title: 'Wellness Programs',
      image: '/Wellness.jpeg',
      accent: 'bg-emerald-500',
      body: `At Pro EMS Fit, our wellness programs are designed to support both physical fitness and overall well-being. Whether your goal is weight loss, body toning, posture correction, stress relief, or core strengthening, our customized sessions ensure safe and effective results. Beyond fitness, our focus is on long-term wellness. These programs help improve energy levels, mobility, and posture, while also reducing daily stress and strengthening your body from within.`
    },
    {
      id: 'pain-relief',
      title: 'Pain Relief with EMS',
      image: '/pain.png',
      accent: 'bg-orange-500',
      body: `EMS therapy provides safe and effective relief from conditions like tennis elbow, where continuous strain and repetitive movements cause pain, stiffness, and restricted mobility. Controlled electrical stimulation activates deep muscle fibers, improves circulation, decreases inflammation, and accelerates the healing process for better flexibility, strength and comfort.`
    },
    {
      id: 'sprained-ankle',
      title: 'Sprained Ankle Recovery',
      image: '/spenal.jpg',
      accent: 'bg-indigo-500',
      body: `EMS sessions accelerate sprained ankle healing by reducing swelling, increasing circulation and reactivating weakened supporting muscles. This controlled approach restores balance, stability and joint function while preventing stiffness and reducing reinjury risk.`
    },
    {
      id: 'spinal-back',
      title: 'Spinal & Back Pain Management',
      image: '/backpain.jpeg',
      accent: 'bg-rose-500',
      body: `Back and neck pain from poor posture, long sitting or disc issues benefit from EMS stimulation that eases tension, engages deep stabilizers and supports improved alignment to reduce discomfort and prevent recurrence.`
    },
    {
      id: 'knee-shoulder',
      title: 'Knee & Shoulder Therapy',
      image: '/theripy.jpg',
      accent: 'bg-teal-600',
      body: `Joint pains like knee injuries or frozen shoulder limit daily movement. EMS provides controlled activation that enhances mobility, reduces stiffness and improves circulation. With physiotherapy guidance, recovery becomes faster, safer and longer lasting.`
    }
  ];
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
            Our Services
          </h1>
        </div>
      </section>
      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-20 text-gray-800">
        {/* <header className="mb-14 md:mb-20 flex items-end justify-between flex-wrap gap-6">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight relative inline-block pr-8 leading-tight">
            <span className="relative z-10">OUR SERVICES</span>
            <span className="absolute -left-2 top-3 w-24 h-4 md:w-36 md:h-5 bg-blue-600/15 rounded" />
          </h1>
          <div className="hidden md:block h-10 w-40 bg-lime-500/70 rounded-sm" />
        </header> */}
        <div className="space-y-20 md:space-y-28">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className={`grid md:grid-cols-12 gap-10 md:gap-12 items-start`}>
                {/* Image (smaller, consistent) */}
                <div className={`${i % 2 === 0 ? 'md:col-span-5' : 'md:col-span-5 md:order-2'} relative group`}> 
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-white ring-1 ring-black/5 h-60 md:h-72 flex items-center justify-center">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
                {/* Text Card */}
                <div className={`${i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:order-1'} relative`}> 
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-5">
                      <span className={`h-8 w-1.5 md:h-9 md:w-2 rounded ${s.accent}`} />
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{s.title}</h2>
                    </div>
                    <p className="leading-relaxed text-gray-700 text-base md:text-lg max-w-prose">{s.body}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
