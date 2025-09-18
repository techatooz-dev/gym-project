import Image from "next/image";
import Link from "next/link";

export default function Physiotherapy() {
  return (
    <div className="bg-gray-900">
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Row 1: image card, title card, blue info card */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-12 items-stretch">
          {/* Image card (left) */}
          <div className="md:col-span-4">
            <div className="bg-slate-200 rounded-3xl p-2 h-full">
              <div className="relative w-full h-64 md:h-full overflow-hidden rounded-2xl">
                <Image src="/Physiotherapy.png" alt="Physiotherapy" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* White title card (center) */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 h-full flex items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                Physiotherapy Sessions
              </h1>
            </div>
          </div>

          {/* Blue info card (right) */}
          <div className="md:col-span-3">
            <div className="bg-sky-500 text-white rounded-3xl p-6 md:p-7 h-full">
              <p className="text-sm sm:text-base leading-relaxed">
                Personalized, evidence-based care to restore mobility, reduce pain, and help you move with confidence.
                Our sessions combine hands-on therapy with targeted exercises for lasting results.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: wide green card */}
        <div className="mt-4 md:mt-6 grid md:grid-cols-12">
          <div className="md:col-start-4 md:col-span-9">
            <div className="bg-green-600 rounded-3xl p-6 md:p-7 text-white">
              <p className="text-sm sm:text-base leading-relaxed">
                Through a structured assessment and tailored plan, our therapists address the root cause of discomfort.
                We focus on posture, joint mechanics, and strength to improve everyday function. Whether you’re managing
                a chronic condition or recovering from injury, we’ll guide you toward better movement and less pain.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/contact-us" className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded shadow hover:bg-sky-700">
            Book Appointment
          </Link>
          <Link href="/services" className="inline-flex items-center px-6 py-3 border border-slate-300 rounded hover:bg-white hover:text-black text-white">
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}
