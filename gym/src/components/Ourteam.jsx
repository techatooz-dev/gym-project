import Image from "next/image";
import Link from "next/link";

export default function Ourteam() {
  const team = [
    { name: "Ayesha Khan", role: "Senior Physiotherapist", img: "/COACH-1.jpg" },
    { name: "Omar Malik", role: "Sports Therapist", img: "/EMS.jpg" },
    { name: "Riya Sharma", role: "Rehab Specialist", img: "/Fitness-training.jpg" },
  ];

  const values = [
    "Patient-first, outcome-driven care",
    "Evidence-based treatment protocols",
    "Clear plans and honest guidance",
    "Respectful, friendly studio culture",
    "We bring the latest EMS technology to deliver safe,",
    "Every client receives a custom program based their body",
    "Your health and safety come first,",
    "We focus on long-term fitness, not quick fixes.",
    "We combine physical training with recovery, nutrition tips,",

  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-green-600">
            Our Team, Values & Story
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Get to know the people, principles, and purpose behind our care.
          </p>
        </div>

        {/* Combined section: Team (left), Values (middle), Story (right) */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Our Team */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 h-full">
              <div className="flex items-center justify-between">
                <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded bg-slate-100 text-slate-800">
                  Our Team
                </span>
                <Link href="/why-choose-us" className="text-sky-700 text-sm font-semibold hover:underline">
                  Meet all
                </Link>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((m) => (
                  <div key={m.name} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                    <div className="relative w-full h-40">
                      <Image src={m.img} alt={m.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900">{m.name}</h3>
                      <p className="text-sm text-slate-600">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Value */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl p-6 h-full bg-green-500 text-white">
              <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded bg-white/20">
                Our Value
              </span>
              <h3 className="mt-3 text-2xl font-bold">What we stand for</h3>
              <ul className="mt-4 space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-green-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <span className="text-sm leading-6">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-white/90 text-sm">
                We aim for lasting results through clear communication, consistency, and care.
              </p>
            </div>
          </div>

          {/* Listen to Our Story */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl p-6 h-full bg-sky-600 text-white flex flex-col">
              <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded bg-white/15">
                Listen to Our Story
              </span>
              <div className="mt-4 relative w-full aspect-video overflow-hidden rounded-2xl bg-sky-700">
                <Image src="/emsfitness.jpg" alt="Our Story" fill className="object-cover opacity-90" />
                <a href="/promotions" className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-sky-700 shadow">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </a>
              </div>
              <p className="mt-4 text-sm leading-6">
                From first session to full recovery — hear how our clients rebuilt strength and confidence.
              </p>
              <div className="mt-3">
                <Link href="/promotions" className="inline-flex items-center px-4 py-2 bg-white text-sky-700 font-semibold rounded hover:bg-slate-100">
                  Watch Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
