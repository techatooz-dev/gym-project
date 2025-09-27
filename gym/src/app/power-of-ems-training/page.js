import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Power of EMS Training | Pro EMS Fit',
  description: 'Electro Muscle Stimulation (EMS) Training: deeper muscle activation, time efficiency, fat loss, posture improvement, recovery and performance advantages.'
}

const Dot = () => <span className="mt-[7px] h-2 w-2 rounded-full bg-[#76C043] flex-shrink-0" />
const SectionTitle = ({ children }) => (
  <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-12`}>{children}</h2>
)

function Page() {
  return (
    <main className="bg-white text-black">
      {/* Intro / Hero */}
      <section className="relative overflow-hidden bg-[#76C043] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-28 relative">
          <div className="max-w-3xl space-y-8">
            <h1 className={`${anton.className} uppercase leading-[0.85] tracking-tight text-[52px] sm:text-[72px] xl:text-[96px] bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70`}>Power of EMS Training</h1>
            <div className="space-y-5 text-sm sm:text-base leading-7 md:leading-8 text-white/75">
              <p><strong className="text-white">Introduction</strong></p>
              <p>EMS (Electro Muscle Stimulation) Training is a revolutionary fitness method that enhances the effectiveness of every workout. By sending safe, low-frequency electrical impulses directly to the muscles, EMS achieves deeper muscle activation and superior results compared to traditional training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pt-32 md:pt-40" id="how-it-works">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionTitle>How EMS Training Works</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-7 md:leading-8 text-black/70">
              <p><span className="font-semibold text-black">Special Suit with Electrodes:</span> During each session, clients wear a specially designed EMS suit equipped with electrodes.</p>
              <p><span className="font-semibold text-black">Muscle Activation:</span> These electrodes send impulses that mimic the natural signals from the brain, causing muscles to contract.</p>
              <p><span className="font-semibold text-black">Combined with Movement:</span> While the suit stimulates the muscles, guided exercises are performed to maximize results.</p>
              <p><span className="font-semibold text-black">Time Efficiency:</span> A 20-minute EMS session is equivalent to 2–3 hours of conventional strength training.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                {[['20','Minutes'],['2x','Weekly'],['95%','Fiber Activation'],['≈3h','Equivalent']].map(m => (
                  <div key={m[0]} className="flex flex-col items-start rounded-2xl px-5 py-4 bg-[#f5f9f2] ring-1 ring-black/10">
                    <span className="text-2xl font-bold text-black leading-none">{m[0]}</span>
                    <span className="text-[11px] uppercase tracking-wide text-black/60 mt-1">{m[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-xl ring-1 ring-black/10 bg-white">
              <img src="/EMS-fitness-training.jpeg" alt="EMS training" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap text-[11px] uppercase tracking-wide">
                {['Efficient','Deep Activation','Low Impact','Adaptive'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-32 md:pt-44" id="benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTitle>Benefits of EMS Training</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-10">
            {[ 
              ['Full Muscle Fiber Activation', [
                'Activates up to 95% of muscle fibers simultaneously.',
                'Engages deeper muscles that are often missed during normal workouts.'
              ]],
              ['Fast & Time-Saving', [
                'Just two 20-minute sessions per week deliver visible results.',
                'Perfect for busy individuals with limited time.'
              ]],
              ['Fat Loss & Body Sculpting', [
                'Boosts metabolism, burns calories, and reduces body fat.',
                'Tones and shapes muscles while tightening skin.'
              ]],
              ['Posture & Back Care', [
                'Strengthens stabilizing muscles, improving posture.',
                'Reduces back pain and corrects muscular imbalances.'
              ]],
              ['Safe & Gentle', [
                'Low-impact on joints and ligaments.',
                'Suitable for beginners, seniors, and rehabilitation training.'
              ]],
              ['Athletic Performance & Recovery', [
                'Improves strength, speed, and endurance.',
                'Supports faster recovery after intense workouts.'
              ]]
            ].map(section => (
              <div key={section[0]} className="p-6 md:p-7 rounded-3xl bg-white shadow-sm ring-1 ring-black/10">
                <p className="font-semibold text-black mb-4 text-lg md:text-xl">{section[0]}</p>
                <ul className="space-y-2 text-sm md:text-base text-black/70 leading-6">
                  {section[1].map(line => <li key={line} className="flex items-start gap-2"><Dot /><span>{line}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="pt-32 md:pt-44" id="who">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionTitle>Who Can Benefit?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Athletes','Improve power, agility, and overall performance.'],
              ['Professionals','Stay fit despite a busy schedule.'],
              ['Beginners','Start training effectively without heavy weights.'],
              ['People in Rehab','Rebuild muscle safely after injury.'],
              ['Fitness Enthusiasts','Add EMS as a next-level upgrade to traditional training.']
            ].map(item => (
              <div key={item[0]} className="group relative p-6 rounded-3xl bg-white shadow-sm ring-1 ring-black/10 hover:shadow-md transition-shadow">
                <p className="font-semibold text-black mb-2 text-sm md:text-base">{item[0]}</p>
                <p className="text-black/60 text-xs md:text-sm leading-5">{item[1]}</p>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-[#76C043]/5 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="pt-32 md:pt-44 mb-6" id="why">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <SectionTitle>Why Choose EMS Training?</SectionTitle>
          <p className="text-black/70 text-sm md:text-base leading-7 md:leading-8 mb-8">EMS Training is not just a workout — it’s a smarter way to train. With scientifically proven benefits, it compresses hours of effort into minutes while delivering visible results. Whether your goal is fat loss, muscle tone, recovery, or peak performance, EMS helps you achieve it efficiently.</p>
          <p className="text-base md:text-lg font-semibold text-black flex items-center justify-center gap-2">⚡ <span>20 minutes. Twice a week. Real transformation.</span></p>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="pt-28 md:pt-40 pb-40" id="cta">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className={`${anton.className} uppercase leading-[0.9] text-4xl md:text-5xl xl:text-6xl mb-8`}>Start Your EMS Journey</h2>
          <p className="text-black/70 text-sm md:text-base leading-7 md:leading-8 max-w-2xl mx-auto mb-10">Book a trial session and experience high-efficiency training that fits real-world schedules without sacrificing results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:ems@proemsfit.com" className="group inline-flex items-center justify-center rounded-xl bg-black text-white text-sm font-medium px-8 py-4 hover:bg-black/80 transition-colors">Email Us<span className="ml-2 text-base">📧</span></a>
            <a href="tel:+1234567890" className="group inline-flex items-center justify-center rounded-xl bg-[#76C043] text-black text-sm font-medium px-8 py-4 hover:bg-[#66a838] transition-colors">Call Now<span className="ml-2 text-base">📞</span></a>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default Page
