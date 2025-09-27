import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Sports Performance Training | Pro EMS Fit',
  description: 'Athlete-focused speed, strength, agility & resilience development with structured progression.'
}

// Small UI helpers
const Dot = () => <span className="mt-[7px] h-2 w-2 rounded-full bg-[#76C043] flex-shrink-0" />
const Pill = ({ label }) => (
  <div className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs tracking-wide uppercase backdrop-blur-sm">{label}</div>
)

function Page() {
  return (
    <main className="bg-white text-black">
      {/* Distinct Hero: dark gradient with layered grid + stat pillars */}
      <section className="relative overflow-hidden bg-[#76C043] text-white">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 30%,#76C043 0,transparent 55%),radial-gradient(circle at 80% 70%,#76C043 0,transparent 60%)'}} />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              {/* <div className="flex flex-wrap gap-3 mb-2">
                {['Speed','Agility','Power','Resilience'].map(p=> <Pill key={p} label={p} />)}
              </div> */}
              <h1 className={`${anton.className} uppercase leading-[0.85] tracking-tight text-[54px] sm:text-[72px] xl:text-[108px] bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70`}>Sports Performance<span className="block">Training</span></h1>
              <p className="max-w-xl text-white/70 text-sm sm:text-base leading-7 md:leading-8">Structured athlete development blending neuromuscular efficiency, metabolic conditioning and movement economy. Built for competitive edges that compound over seasons.</p>
              <div className="flex flex-wrap gap-5 pt-4">
                { [
                  {v:'+2.1x',l:'Acceleration Gain Potential'},
                  {v:'90%',l:'Movement Efficiency Focus'},
                  {v:'12w',l:'Periodized Macro Cycle'},
                  {v:'24/7',l:'Recovery Guidance'}
                ].map(s=> (
                  <div key={s.v} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-white leading-none">{s.v}</span>
                    <span className="text-white/60 text-[11px] tracking-wide mt-2 max-w-[120px] uppercase">{s.l}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-8">
                <a href="#plans" className="rounded-xl bg-[#76C043] hover:bg-[#66a838] text-black font-medium text-sm px-6 py-3 transition-colors">Explore Plans</a>
                <a href="#path" className="rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 text-sm font-medium px-6 py-3 transition-colors">Development Path</a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img src="/Fitness-training.jpg" alt="Explosive training" className="w-full h-[560px] object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d0f10] to-transparent h-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why / Pillars split on light background with diagonal accent */}
      <section id="why" className="relative -mt-16 md:-mt-24 z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[40px] bg-white shadow-lg ring-1 ring-black/5 px-8 md:px-14 py-14 md:py-16">
            <div className="absolute -right-24 -top-24 w-80 h-80 bg-[#76C043]/10 rounded-full blur-3xl" />
            <div className="grid lg:grid-cols-12 gap-14 items-start relative">
              <div className="lg:col-span-7">
                <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-8`}>Why This System?</h2>
                <p className="text-black/75 text-sm md:text-base leading-7 md:leading-8 mb-8">Beyond random drills—this framework synchronizes force production, reactive agility and energy system efficiency while managing tissue load and adaptation windows.</p>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-black/80">
                  { [
                    'Enhance acceleration & lateral quickness',
                    'Unlock strength & explosive output',
                    'Extend high-intensity repeatability',
                    'Lower soft tissue injury risk',
                    'Refine sport-specific transfer',
                    'Build competitive composure'
                  ].map(i => (
                    <li key={i} className="flex items-start gap-2"><Dot /><span>{i}</span></li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 space-y-8">
                <h3 className="text-sm font-medium tracking-wider text-black/60 uppercase">Performance Pillars</h3>
                <div className="grid grid-cols-2 gap-5">
                  { [
                    {t:'Neuromuscular',d:'Rate coding & fiber recruitment efficiency.'},
                    {t:'Elastic Power',d:'Stored energy utilization & stiffness control.'},
                    {t:'Movement IQ',d:'Decision speed & biomechanical economy.'},
                    {t:'Recovery Sync',d:'Load management & adaptation timing.'}
                  ].map(p => (
                    <div key={p.t} className="p-4 rounded-2xl bg-black/[0.03] ring-1 ring-black/10">
                      <p className="font-semibold text-black text-sm mb-1">{p.t}</p>
                      <p className="text-[11px] leading-5 text-black/60">{p.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Path Timeline */}
      <section id="path" className="pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-14`}>Development Path</h2>
          <div className="relative pl-6 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-[3px] before:bg-gradient-to-b before:from-[#76C043] before:to-[#76C043]/20">
            { [
              {h:'Assessment & Screening',d:'Movement, force, asymmetry and energy profile baselining.'},
              {h:'Foundational Patterning',d:'Motor control, core integration & eccentric strength.'},
              {h:'Force & Velocity Development',d:'Linear & lateral acceleration with resisted and assisted modalities.'},
              {h:'Elastic & Reactive Power',d:'Plyometric progressions, RSI enhancement & spatial reactivity.'},
              {h:'Game Transfer & Peak',d:'Chaotic constraints, tactical conditioning & deload taper.'}
            ].map((s,i)=> (
              <div key={s.h} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[26px] top-1 h-4 w-4 rounded-full bg-[#76C043] ring-4 ring-white" />
                <h3 className="font-semibold text-base md:text-lg text-black mb-1">{i+1}. {s.h}</h3>
                <p className="text-sm md:text-base text-black/65 leading-6 max-w-2xl">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Panel: Focus Areas + Media */}
      <section id="focus" className="pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-8`}>Focus Modules</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-sm md:text-base">
                { [
                  ['Acceleration Mechanics','Projection posture & force orientation refinement.'],
                  ['Multi-Plane Agility','Reactive decel & COD pattern fluency.'],
                  ['Force Production','Max strength & RFD periodization.'],
                  ['Power Conversion','Ballistic & contrast pair integration.'],
                  ['Capacity & Repeatability','HIIT & alactic-aerobic bridging.'],
                  ['Mobility Integrity','Dynamic control & joint durability.']
                ].map(m => (
                  <div key={m[0]} className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
                    <p className="font-medium text-black mb-1">{m[0]}</p>
                    <p className="text-black/60 text-xs md:text-sm leading-5">{m[1]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-[44px] overflow-hidden shadow-xl">
                <img src="/Sports.png" alt="Athlete sprint drill" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-6 flex gap-3 flex-wrap">
                  { ['Explosive','Reactive','Efficient','Adaptive'].map(t => <Pill key={t} label={t} />) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Grid */}
      <section id="who" className="pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-10`}>Who It Serves</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            { [
              ['Professional Athletes','Micro-advantage refinement & high-output maintenance.'],
              ['Student Competitors','Skill democratization & foundational robustness.'],
              ['Performance Enthusiasts','Advanced structure beyond general fitness.'],
              ['Rehab Returners','Controlled load ramp & asymmetry reduction.'],
              ['Off-Season Rebuilders','Capacity base + force restoration.'],
              ['Pre-Season Primers','Speed exposure & tactical conditioning.'],
              ['Skill Developers','Motor pattern bandwidth expansion.'],
              ['Total Upgrade Track','Full-cycle neurological & metabolic evolution.']
            ].map(a => (
              <div key={a[0]} className="group relative p-6 rounded-3xl bg-gradient-to-br from-white to-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                <p className="font-semibold text-black mb-2 text-sm md:text-base">{a[0]}</p>
                <p className="text-black/60 text-xs md:text-sm leading-5">{a[1]}</p>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-[#76C043]/5 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Tiles */}
      <section id="benefits" className="pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-12`}>Outcome Advantages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            { [
              'Faster reaction acquisition loops',
              'Higher elastic return efficiency',
              'Extended high-intensity duration',
              'Improved joint resilience & control',
              'Cognitive composure under fatigue',
              'Optimized recovery kinetics'
            ].map(b => (
              <div key={b} className="p-6 rounded-3xl bg-white shadow-sm ring-1 ring-black/10 flex gap-3">
                <Dot /><span className="text-black/80 text-sm leading-6">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans: new split layout with featured highlight card */}
      <section id="plans" className="pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-14 items-start mb-14">
            <div className="flex-1">
              <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-8`}>Training Packages</h2>
              <p className="text-black/70 max-w-xl text-sm md:text-base leading-7 md:leading-8 mb-6">Progressive dosage calibrated to phase goals. Upgrade or deload seamlessly within the adaptive framework.</p>
              <ul className="space-y-3 text-sm md:text-base text-black/70">
                { [
                  'Macro & micro cycle alignment',
                  'Objective velocity & jump tracking',
                  'Load / fatigue autoregulation',
                  'Integrated recovery directives'
                ].map(i => <li key={i} className="flex items-start gap-2"><Dot /><span>{i}</span></li>)}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 flex-1 w-full">
              {[
                ['Intro Session','Free','/ 60m','Baseline screening & experience trial',true],
                ['Single Session','$50','/ 60m','Targeted speed / power or conditioning focus',false],
                ['Monthly Plan','$350','/ 12 sessions','Periodized hybrid progression & review',true],
                ['Elite Package','$600','/ unlimited','Unlimited access + personalized technical layer',false]
              ].map(p => (
                <div key={p[0]} className={`relative flex flex-col rounded-3xl p-6 bg-white ring-1 ring-black/10 shadow-sm ${p[4] ? 'border-2 border-[#76C043]' : ''}`}>
                  <h3 className="text-lg font-semibold mb-1">{p[0]}</h3>
                  <div className="flex items-end gap-1 mb-4"><span className="text-3xl font-bold text-black">{p[1]}</span><span className="text-xs text-black/50 mb-[3px]">{p[2]}</span></div>
                  <p className="text-sm text-black/70 leading-6 flex-1">{p[3]}</p>
                  <button className={`mt-6 inline-flex items-center justify-center rounded-xl text-sm font-medium px-5 py-2 transition-colors ${p[4] ? 'bg-[#76C043] text-black hover:bg-[#66a838]' : 'bg-black text-white hover:bg-black/80'}`}>Enroll</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="pt-28 md:pt-36 pb-40">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-8`}>Book Your Training</h2>
          <p className="text-black/70 text-sm md:text-base leading-7 md:leading-8 max-w-2xl mx-auto mb-10">Accelerate your performance trajectory—secure your assessment or lock in a full development block today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sports@performancetraining.com" className="group inline-flex items-center justify-center rounded-xl bg-black text-white text-sm font-medium px-8 py-4 hover:bg-black/80 transition-colors">Email Us<span className="ml-2 text-base">📧</span></a>
            <a href="tel:+1234567890" className="group inline-flex items-center justify-center rounded-xl bg-[#76C043] text-black text-sm font-medium px-8 py-4 hover:bg-[#66a838] transition-colors">Call Now<span className="ml-2 text-base">📞</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
