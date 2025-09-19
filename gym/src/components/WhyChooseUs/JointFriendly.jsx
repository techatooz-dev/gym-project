import React from "react";

function JointFriendly() {
  return (
    <section id="joint-friendly" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Highlight Statement */}
        <div className="rounded-3xl bg-white p-6 text-center text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 md:text-4xl">Joint‑Friendly Workouts</h2>
          <p className="mt-2 text-sm md:text-base">No heavy lifting. Zero joint strain. 100% safe for all ages.</p>
          <p className="mx-auto mt-2 max-w-3xl text-sm md:text-base">
            Our programs keep your body moving without stressing sensitive joints. Whether you’re recovering
            from injury, managing arthritis, or prefer low‑impact fitness, these workouts make exercise enjoyable and pain‑free.
          </p>
        </div>

        {/* Why Choose grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Low‑Impact Training", desc: "Controlled, gentle movements that don’t stress your joints." },
            { title: "Safe for Seniors", desc: "Programs designed for older adults to stay active safely." },
            { title: "Rehab‑Friendly", desc: "Suitable for knee, shoulder, or back issue recovery." },
            { title: "Strength & Flexibility", desc: "Tone muscles, improve posture, and stay mobile." },
            { title: "Everyday Energy", desc: "Feel more active, confident, and pain‑free daily." },
            { title: "Physio Oversight", desc: "Guided progressions to protect joints and improve form." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                    <path d="M16.25 5.75l-7.5 7.5L3.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Icon chips */}
        <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: "🦵", label: "Knee‑Friendly", desc: "Adapted squats, step‑ups, easy stretches" },
            { icon: "💪", label: "Shoulder‑Safe", desc: "Controlled resistance, safe ROM" },
            { icon: "🦴", label: "Spine Supportive", desc: "Core & posture work" },
            { icon: "🧘", label: "Low Impact", desc: "Yoga‑inspired flows & stability" },
            { icon: "🫀", label: "Heart‑Healthy", desc: "Low‑intensity cardio" },
          ].map((chip) => (
            <div key={chip.label} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl">{chip.icon}</div>
              <div>
                <div className="text-sm font-semibold text-gray-800">{chip.label}</div>
                <div className="text-xs text-gray-600">{chip.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <blockquote className="text-gray-700">
              “At 62, I thought my exercise days were behind me because of my knee pain. But after starting these joint‑friendly
              workouts, I can finally move without fear. My posture improved, my balance feels stronger, and the best part is — I can
              play with my grandkids without any pain!”
            </blockquote>
            <div className="mt-3 text-sm font-semibold text-gray-800">— Margaret S., 62</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <blockquote className="text-gray-700">
              “I’ve had shoulder issues for years and avoided the gym. These simple, guided exercises gave me back my confidence. No more
              heavy lifting, just smart movements that work!”
            </blockquote>
            <div className="mt-3 text-sm font-semibold text-gray-800">— David R., 55</div>
          </div>
        </div>

        {/* Sample activities */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Sample Workout Activities</h3>
            <p className="mt-1 text-sm text-gray-600">Safe, sustainable, and effective for all ages</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              "Seated Strength Exercises",
              "Water Aerobics",
              "Resistance Band Training",
              "Chair Yoga & Balance",
              "Walking & Light Cardio",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JointFriendly;
