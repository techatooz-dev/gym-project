import React from 'react'
import { Anton } from 'next/font/google'

export const metadata = {
  title: 'Physiotherapy Sessions | Pro EMS Fit',
  description: 'Recover, restore movement, and reduce pain with evidence-based physiotherapy sessions tailored to your needs.'
}

const anton = Anton({ subsets: ['latin'], weight: '400' })

function Bullet({ children, small=false }) {
  return (
    <li className={`flex items-start gap-3 ${small ? 'text-xs md:text-sm' : 'text-sm md:text-base'} text-black/80`}>
      <span className="mt-2 h-2 w-2 rounded-full bg-[#76C043]" />
      <span className="leading-6 md:leading-7">{children}</span>
    </li>
  )
}

function NumberStep({ number, title, children }) {
  return (
    <div className="relative rounded-3xl bg-white shadow-sm ring-1 ring-black/10 p-6 md:p-7 flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <span className="h-11 w-11 rounded-full bg-[#76C043] text-white flex items-center justify-center font-semibold text-lg">{number}</span>
        <h3 className="font-semibold text-lg md:text-xl text-black">{title}</h3>
      </div>
      <div className="pl-[4.35rem] -mt-1 text-black/70 text-sm md:text-base leading-6 md:leading-7">
        {children}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-8xl pb-24 md:pb-32">
          <div className="bg-[#76C043] px-8 md:px-14 py-14 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
            <div className="flex-1">
              <h1 className={`${anton.className} text-white uppercase leading-[0.9] tracking-wide text-[48px] sm:text-[68px] lg:text-[92px]`}>Physiotherapy Sessions</h1>
              <p className="mt-6 max-w-2xl text-black/85 text-sm sm:text-base leading-7 md:leading-8">Restore movement, reduce pain, and rebuild strength with expert one‑on‑one physiotherapy tailored to your condition, goals, and lifestyle.</p>
              <div className="mt-8 flex gap-4">
                <a href="#what" className="rounded-full bg-black text-white text-sm font-medium px-6 py-3 hover:bg-black/80 transition-colors">What is Physiotherapy?</a>
                <a href="#process" className="rounded-full border border-black/25 text-sm font-medium px-6 py-3 hover:bg-black/5 transition-colors">Our Process</a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-[40px] overflow-hidden shadow-xl bg-white/10 ring-1 ring-white/30">
                <img src="/Physiotherapy.png" alt="Physiotherapy session" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Physiotherapy */}
      <section id="what" className="relative -mt-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-white rounded-tr-[48px] shadow-lg ring-1 ring-black/5 px-8 md:px-14 py-12 md:py-14 leading-7 text-sm md:text-base">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-6`}>What is Physiotherapy?</h2>
            <p className="text-black/80">Physiotherapy is a specialized healthcare service that focuses on restoring movement, improving mobility, and reducing pain through evidence-based physical techniques. It helps people of all ages recover from injuries, surgeries, or chronic conditions while improving their quality of life.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Physiotherapy */}
      <section className="pt-28 md:pt-32" id="why">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Why Choose Physiotherapy?</h2>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-black/80">
                {[ 'Non-invasive treatment approach', 'Helps reduce pain without relying on medications', 'Restores strength, flexibility, and balance', 'Improves posture and body mechanics', 'Supports recovery after accidents, injuries, or surgeries', 'Prevents long-term complications by addressing the root cause' ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#76C043]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/10 p-8 md:p-10 flex flex-col">
              <h3 className="font-semibold text-lg md:text-xl text-black mb-4">Key Outcomes</h3>
              <ul className="space-y-3 text-sm md:text-base text-black/80">
                {['Reduced pain & inflammation','Accelerated functional recovery','Improved movement quality','Better joint protection patterns'].map(p => (
                  <li key={p} className="flex gap-3 items-start"><span className="mt-1 h-2 w-2 rounded-full bg-[#76C043]" /><span>{p}</span></li>
                ))}
              </ul>
              <p className="mt-6 text-xs md:text-sm text-black/60">Early physiotherapy intervention often shortens recovery timelines and lowers re‑injury risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Process */}
      <section className="pt-28 md:pt-36" id="process">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-10`}>Our Session Process</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <NumberStep number={1} title="Initial Assessment">
              <ul className="space-y-2">
                <Bullet small>A detailed consultation with our physiotherapist</Bullet>
                <Bullet small>Understanding your medical history, lifestyle, and current concerns</Bullet>
                <Bullet small>Physical evaluation to identify the root cause of discomfort</Bullet>
              </ul>
            </NumberStep>
            <NumberStep number={2} title="Personalized Treatment Plan">
              <ul className="space-y-2">
                <Bullet small>Customized exercises tailored to your condition</Bullet>
                <Bullet small>Manual therapy, stretching, and joint mobilization</Bullet>
                <Bullet small>Guidance on posture correction and movement techniques</Bullet>
              </ul>
            </NumberStep>
            <NumberStep number={3} title="Ongoing Sessions">
              <ul className="space-y-2">
                <Bullet small>Progressive therapy to track recovery</Bullet>
                <Bullet small>Pain management through targeted techniques</Bullet>
                <Bullet small>Strength and flexibility training for long-term benefits</Bullet>
              </ul>
            </NumberStep>
            <NumberStep number={4} title="Home Exercise Guidance">
              <ul className="space-y-2">
                <Bullet small>Easy-to-follow exercises you can continue at home</Bullet>
                <Bullet small>Lifestyle advice to prevent recurring problems</Bullet>
              </ul>
            </NumberStep>
          </div>
          {/* Added illustrative image (bottom of process section) */}
          <div className="mt-14">
            <figure className="rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/10 bg-white/50 backdrop-blur-sm">
              <img
                src="/proccess.webp"
                alt="Physiotherapy guided hand exercise session"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="pt-28 md:pt-36" id="conditions">
        <div className="max-w-8xl">
          <div className="bg-[#76C043] px-8 md:px-16 py-16 md:py-20 flex flex-col gap-10 relative overflow-hidden">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] max-w-4xl`}>Conditions We Treat</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm md:text-base">
              {[ 'Back & neck pain', 'Sports injuries', 'Post-surgical rehabilitation', 'Arthritis & joint stiffness', 'Neurological conditions (e.g., stroke recovery)', 'Muscle weakness or imbalance', 'Work-related injuries' ].map(label => (
                <div key={label} className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-4 flex items-start gap-3 ring-1 ring-white/50 shadow-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#76C043]" />
                  <span className="text-black/80 leading-5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-28 md:pt-36" id="benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Benefits of Our Physiotherapy</h2>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-black/80">
                {[ 'Faster recovery & healing', 'Improved mobility and independence', 'Better posture & alignment', 'Long-lasting pain relief', 'Enhanced overall physical performance' ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#76C043]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/10 p-8 md:p-10 flex flex-col">
              <h3 className="font-semibold text-lg md:text-xl text-black mb-4">Holistic Impact</h3>
              <p className="text-black/70 text-sm md:text-base leading-6 mb-5">Beyond symptom relief, physiotherapy enhances movement literacy, neuromuscular coordination and confidence in daily functional tasks.</p>
              <ul className="space-y-3 text-sm md:text-base text-black/80">
                {['Improves circulation & tissue healing','Reduces compensatory movement patterns','Supports return to work & sport readiness','Builds sustainable self-management habits'].map(p => (
                  <li key={p} className="flex gap-3 items-start"><span className="mt-1 h-2 w-2 rounded-full bg-[#76C043]" /><span>{p}</span></li>
                ))}
              </ul>
              <p className="mt-6 text-xs md:text-sm text-black/60">Progress is continuously reassessed to refine treatment dosage & exercise progression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="pt-28 md:pt-36" id="who">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-8">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]`}>Who Can Benefit?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm md:text-base">
              {[ 'Athletes recovering from injuries', 'Office workers with posture-related pain', 'Elderly individuals seeking mobility improvement', 'Patients after surgery or accidents', 'Anyone experiencing chronic pain or limited movement' ].map(label => (
                <div key={label} className="rounded-2xl border border-black/10 bg-white p-5 flex items-start gap-3 shadow-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#76C043]" />
                  <span className="text-black/75 leading-5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-28 md:pt-40 pb-32" id="book">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Your Health, Our Priority</h2>
          <p className="text-black/75 text-sm md:text-base leading-7 md:leading-8 max-w-2xl mx-auto mb-10">Our physiotherapists combine expertise, compassion, and modern techniques to help you recover and live pain‑free. Book a session to start your personalized recovery journey.</p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@proemsfit.com" className="group inline-flex items-center justify-center rounded-full bg-black text-white text-sm font-medium px-8 py-4 hover:bg-black/80 transition-colors">Email Us<span className="ml-2 text-base">📧</span></a>
            <a href="tel:+1234567890" className="group inline-flex items-center justify-center rounded-full bg-[#76C043] text-white text-sm font-medium px-8 py-4 hover:bg-[#66a838] transition-colors">Call Now<span className="ml-2 text-base">📞</span></a>
          </div> */}
        </div>
      </section>
    </main>
  )
}
