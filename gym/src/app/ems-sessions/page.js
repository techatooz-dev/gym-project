import React from 'react'
import { Anton } from 'next/font/google'

// Temporary local Anton usage (can be centralized later)
const anton = Anton({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'EMS Sessions | Pro EMS Fit',
  description: 'Discover time-efficient EMS training sessions: benefits, pricing, and how it works.'
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-4xl md:text-5xl font-bold text-black leading-none">{value}</span>
      <span className="text-black/70 text-sm md:text-base mt-2 max-w-[140px]">{label}</span>
    </div>
  )
}

function PriceCard({ title, price, period, highlight = false, children }) {
  return (
    <div className={`relative flex flex-col rounded-3xl p-6 md:p-8 bg-white ring-1 ring-black/10 shadow-sm ${highlight ? 'border-2 border-[#76C043]' : ''}`}>\n      <h3 className={`text-xl font-semibold mb-2 ${highlight ? 'text-[#1a1a1a]' : 'text-black'}`}>{title}</h3>
      <div className="flex items-end gap-1 mb-4">
        <span className="text-4xl font-bold text-black">{price}</span>
        {period && <span className="text-sm text-black/60 mb-1">{period}</span>}
      </div>
      <div className="text-sm text-black/70 leading-6 flex-1">{children}</div>
      <button className={`mt-6 inline-flex items-center justify-center rounded-full text-sm font-medium px-5 py-2 transition-colors ${highlight ? 'bg-[#76C043] text-white hover:bg-[#66a838]' : 'bg-black text-white hover:bg-black/80'}`}>Book Now</button>
    </div>
  )
}

export default function Page() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-8xl   pb-24 md:pb-32">
          <div className="bg-[#76C043]  px-8 md:px-14 py-14 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
            <div className="flex-1">
              <h1 className={`${anton.className}  text-white uppercase leading-[0.9] tracking-wide text-[52px] sm:text-[72px] lg:text-[96px]`}>EMS Sessions</h1>
              <p className="mt-6 max-w-xl text-black/80 text-sm sm:text-base leading-7 md:leading-8">High‑efficiency training using Electric Muscle Stimulation to activate deep muscle fibers, improve performance, balance the body and save time.</p>
              <div className="mt-8 grid grid-cols-2 sm:flex gap-8 sm:gap-12">
                <Stat value="90%" label="Muscle fibers activated" />
                <Stat value="20m" label="Per guided session" />
                <Stat value="2x" label="Faster strength gains" />
                <Stat value="1" label="Certified trainer" />
              </div>
              {/* <div className="mt-10 flex gap-4">
                <a href="#pricing" className="rounded-full bg-black text-white text-sm font-medium px-6 py-3 hover:bg-black/80 transition-colors">View Plans</a>
                <a href="#how" className="rounded-full border border-black/20 text-sm font-medium px-6 py-3 hover:bg-black/5 transition-colors">How It Works</a>
              </div> */}
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-[40px] overflow-hidden shadow-xl bg-white/10">
                <img src="/EMS-fitness-training.jpeg" alt="EMS training in action" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EMS */}
      <section className="relative -mt-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-white rounded-tr-[48px] px-8 md:px-14 py-12 md:py-14 leading-7 text-sm md:text-base">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-6`}>What is EMS?</h2>
            <p className="text-black/80">EMS (Electrical Muscle Stimulation) is a modern training method that uses low‑frequency electrical impulses to activate your muscles. This enhances strength, endurance, and recovery in a safe and effective way.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-28 md:pt-32" id="benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Benefits of EMS Training</h2>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-black/80">
                {/*
                  'Activates 90% of muscle fibers during each session',
                  'Improves strength, tone, and endurance',
                  'Supports weight loss and fat reduction',
                  'Reduces back pain and muscle imbalances',
                  'Time-efficient – only 20 minutes per session',
                */}
                {['Activates 90% of muscle fibers during each session',
                'Improves strength, tone, and endurance',
                'Supports weight loss and fat reduction',
                'Reduces back pain and muscle imbalances',
                'Time-efficient – only 20 minutes per session',].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#76C043]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Expanded benefit categories replacing image */}
            <div className="flex-1 rounded-3xl bg-white shadow-sm ring-1 ring-black/10 p-8 md:p-10 flex flex-col">
              <h3 className={`${anton.className} text-2xl md:text-3xl uppercase leading-tight mb-4`}>Core Benefit Pillars</h3>
              <p className="text-black/70 text-sm md:text-base leading-6 mb-6">EMS sessions accelerate adaptation by recruiting deep muscle fibers and improving neuromuscular efficiency in a highly time‑efficient format.</p>
              <div className="grid sm:grid-cols-2 gap-5 text-sm md:text-base">
                {[{
                  title: 'Performance',
                  points: ['Strength & power boost','Improved muscular endurance','Enhanced core stability']
                },{
                  title: 'Body Composition',
                  points: ['Supports fat reduction','Tones & defines muscles','Elevates metabolic demand']
                },{
                  title: 'Posture & Back',
                  points: ['Balances weak areas','Reduces back discomfort','Improves alignment']
                },{
                  title: 'Efficiency',
                  points: ['High impact in 20 min','Low joint stress','Trainer-guided precision']
                }].map(group => (
                  <div key={group.title} className="rounded-2xl border border-black/10 p-4 bg-white/60 backdrop-blur-sm">
                    <p className="font-semibold text-black mb-2">{group.title}</p>
                    <ul className="space-y-1.5 text-black/75 text-xs md:text-sm">
                      {group.points.map(p => (
                        <li key={p} className="flex gap-2 items-start">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#76C043]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs md:text-sm text-black/60">Consistent weekly sessions compound neuromuscular gains while supporting recovery and structural balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pt-28 md:pt-36" id="how">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-6`}>How EMS Sessions Work</h2>
              <p className="text-black/80 text-sm md:text-base leading-7 md:leading-8">During an EMS session, you wear a special suit with electrodes. The trainer guides you through functional movements while impulses stimulate your muscles. This makes your workout highly effective in a shorter time.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm md:text-base">
                {['Warm-up & Suit Setup','Guided Functional Movements','Targeted Muscle Activation','Cool Down & Recovery'].map(step => (
                  <div key={step} className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
                    <p className="font-medium text-black mb-1">{step}</p>
                    <p className="text-black/60 text-xs md:text-sm leading-5">Professional supervision ensures correct form and optimal stimulation.</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Detailed Warm-up & Suit Setup points box (replaces image) */}
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/10 p-8 md:p-10 flex flex-col">
              <h3 className={`${anton.className} text-2xl md:text-3xl uppercase leading-tight mb-4`}>Warm-up & Suit Setup</h3>
              <p className="text-black/75 text-sm md:text-base leading-6 mb-5">The session begins with focused preparation to ensure safety, comfort and optimal muscle activation before the guided movements start.</p>
              <ul className="space-y-3 text-sm md:text-base text-black/80">
                {[
                  'Quick posture & goal check',
                  'Light mobility & activation (2–3 min)',
                  'Suit fitted & electrodes moistened',
                  'Intensity individually calibrated',
                  'Safety, breathing & core cues explained'
                ].map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#76C043]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs md:text-sm text-black/60">Proper setup maximizes muscle fiber recruitment while keeping the experience comfortable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who can join */}
      <section className="pt-28 md:pt-36" id="who">
        <div className="max-w-8xl">
          <div className="bg-[#76C043]  px-8 md:px-16 py-16 md:py-20 flex flex-col gap-10 relative overflow-hidden">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] max-w-3xl`}>Who Can Join?</h2>
            <p className="text-black/85 max-w-3xl text-sm md:text-base leading-7 md:leading-8">EMS training is suitable for people of all ages and fitness levels—athletes seeking an edge, busy professionals wanting efficiency, or individuals in rehabilitation looking for low-impact muscle activation.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm md:text-base">
              {/*
                'Beginners building a base',
                'Athletes enhancing performance',
                'People with limited training time',
                'Post-injury recovery support',
                'Weight management & toning',
                'Core & posture improvement',
                'Balanced muscle activation',
                'General strength & wellness'
              */}
              {['Beginners building a base',
              'Athletes enhancing performance',
              'People with limited training time',
              'Post-injury recovery support',
              'Weight management & toning',
              'Core & posture improvement',
              'Balanced muscle activation',
              'General strength & wellness'].map(label => (
                <div key={label} className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-4 flex items-start gap-3 ring-1 ring-white/50 shadow-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#76C043]" />
                  <span className="text-black/80 leading-5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="pt-28 md:pt-36" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col items-start gap-8 mb-10">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]`}>Session Plans & Pricing</h2>
            <p className="text-black/70 max-w-2xl text-sm md:text-base leading-7 md:leading-8">Choose a plan that fits your goals. Every session is supervised to ensure safety, proper form, and maximum efficiency.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <PriceCard title="Trial Session" price="Free" period="/ 20m" highlight>Perfect for first-timers to experience EMS effectiveness.</PriceCard>
            <PriceCard title="Single Session" price="$40" period="/ 20m">Pay-as-you-go high intensity EMS workout.</PriceCard>
            <PriceCard title="Monthly Plan" price="$250" period="/ 8 sessions" highlight>Structured progression with recovery balance.</PriceCard>
            <PriceCard title="Premium Plan" price="$399" period="/ unlimited">Unlimited guided EMS access for maximum transformation.</PriceCard>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="pt-28 md:pt-40 pb-32" id="book">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Book Your Session</h2>
          <p className="text-black/75 text-sm md:text-base leading-7 md:leading-8 max-w-2xl mx-auto mb-10">Ready to experience the future of fitness? Book your EMS session today and transform your body with just 20 minutes a week!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@emsfitness.com" className="group inline-flex items-center justify-center rounded-full bg-black text-white text-sm font-medium px-8 py-4 hover:bg-black/80 transition-colors">Email Us<span className="ml-2 text-base">📧</span></a>
            <a href="tel:+1234567890" className="group inline-flex items-center justify-center rounded-full bg-[#76C043] text-white text-sm font-medium px-8 py-4 hover:bg-[#66a838] transition-colors">Call Now<span className="ml-2 text-base">📞</span></a>
          </div>
        </div>
      </section> */}
    </main>
  )
}
