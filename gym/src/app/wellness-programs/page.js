import React from 'react'
import { Anton } from 'next/font/google'
import { FaDumbbell, FaAppleAlt, FaBrain, FaBuilding } from 'react-icons/fa'

export const metadata = {
  title: 'Wellness Programs | Pro EMS Fit',
  description: 'Holistic wellness programs integrating physical fitness, nutrition, mental health, and corporate wellness solutions.'
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

function Pillar({ icon, number, title, children, list }) {
  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/10 p-7 md:p-8 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="h-12 w-12 rounded-full bg-[#76C043] text-white flex items-center justify-center text-2xl">
          {icon || number}
        </span>
        <h3 className="font-semibold text-xl text-black leading-tight">{title}</h3>
      </div>
      {children && <p className="text-black/70 text-sm md:text-base leading-6 md:leading-7">{children}</p>}
      {list && (
        <ul className="space-y-2">
          {list.map(item => <Bullet key={item} small>{item}</Bullet>)}
        </ul>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <main className="bg-white text-black">
      {/* Hero / Intro */}
      <section className="relative overflow-hidden">
        <div className="max-w-8xl pb-24 md:pb-32">
          <div className="bg-[#76C043] px-8 md:px-14 py-14 md:py-20 flex flex-col gap-10 items-start">
            <h1 className={`${anton.className} text-white uppercase leading-[0.9] tracking-wide text-[48px] sm:text-[68px] lg:text-[92px]`}>Wellness Programs</h1>
            <div className="max-w-4xl text-sm sm:text-base leading-7 md:leading-8 text-black/85 space-y-5">
              <p>Wellness is more than just being free from illness; it’s about achieving a balanced state of physical, mental, and emotional health. Our Wellness Programs are carefully designed to help individuals and organizations adopt healthier lifestyles, reduce stress, prevent chronic diseases, and improve overall quality of life.</p>
              <p>We combine physiotherapy, fitness, nutrition, and mental well-being practices to create holistic solutions for long-term wellness.</p>
            </div>
            {/* <div className="flex flex-wrap gap-4 mt-4">
              <a href="#physical" className="rounded-full bg-black text-white text-sm font-medium px-6 py-3 hover:bg-black/80 transition-colors">Physical Wellness</a>
              <a href="#nutrition" className="rounded-full border border-black/30 text-sm font-medium px-6 py-3 hover:bg-black/5 transition-colors">Nutritional Wellness</a>
              <a href="#mental" className="rounded-full border border-black/30 text-sm font-medium px-6 py-3 hover:bg-black/5 transition-colors">Mental & Emotional</a>
              <a href="#corporate" className="rounded-full border border-black/30 text-sm font-medium px-6 py-3 hover:bg-black/5 transition-colors">Corporate Wellness</a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="" id="pillars">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <Pillar number={1} icon={<FaDumbbell />} title="Physical Wellness" list={[
              'Customized fitness & exercise plans based on individual goals.',
              'Yoga, Pilates, and stretching for flexibility and relaxation.',
              'Weight management support with guided workouts.',
              'Posture correction and ergonomics advice for daily life.'
            ]}>
              A strong body forms the foundation of a healthy life. Our physical wellness programs focus on improving strength, flexibility, posture, and stamina.
            </Pillar>
            <Pillar number={2} icon={<FaAppleAlt />} title="Nutritional Wellness" list={[
              'Personalized meal plans (weight loss, muscle gain, or balanced diet).',
              'Healthy cooking workshops and nutrition awareness sessions.',
              'Dietary guidance for managing diabetes, hypertension, and obesity.',
              'Detox and immunity-boosting diet programs.'
            ]}>
              Healthy eating is the key to energy and disease prevention. Our nutrition programs are tailored to your lifestyle and medical needs.
            </Pillar>
            <Pillar number={3} icon={<FaBrain />} title="Mental & Emotional Wellness" list={[
              'Stress management techniques for daily life.',
              'Meditation, breathing exercises, and mindfulness practices.',
              'Group therapy and one-on-one counseling support.',
              'Workshops on work-life balance and positive thinking.'
            ]}>
              A healthy mind is just as important as a healthy body. Our programs promote relaxation, focus, and emotional stability.
            </Pillar>
            <Pillar number={4} icon={<FaBuilding />} title="Corporate Wellness" list={[
              'Ergonomic consultations to reduce workplace injuries.',
              'Regular health checkups and screenings.',
              'Fitness challenges, yoga sessions, and wellness events.',
              'Stress relief and motivation workshops.'
            ]}>
              Healthy employees are more productive, engaged, and motivated. Our corporate wellness programs are designed for organizations that care about their workforce.
            </Pillar>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-28 md:pt-36 mb-12" id="benefits">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-white rounded-3xl shadow-sm ring-1 ring-black/10 p-8 md:p-14">
            <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Benefits of Our Wellness Programs</h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-black/80 mb-6">
              {[ 'Increased energy & productivity', 'Improved physical strength & mental clarity', 'Better weight management & disease prevention', 'Reduced stress and anxiety', 'Enhanced overall quality of life' ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#76C043]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs md:text-sm text-black/55">Holistic integration of movement, recovery, nutrition, and mindset fosters sustainable lifestyle change.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="pt-28 md:pt-40 pb-32" id="contact">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-8`}>Start Your Wellness Journey</h2>
          <p className="text-black/75 text-sm md:text-base leading-7 md:leading-8 max-w-2xl mx-auto mb-10">Start your wellness journey today with our expert team! We’ll help you build consistent healthy habits that enhance performance, resilience, and overall quality of life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@proemsfit.com" className="group inline-flex items-center justify-center rounded-full bg-black text-white text-sm font-medium px-8 py-4 hover:bg-black/80 transition-colors">Email Us<span className="ml-2 text-base">📧</span></a>
            <a href="tel:+1234567890" className="group inline-flex items-center justify-center rounded-full bg-[#76C043] text-white text-sm font-medium px-8 py-4 hover:bg-[#66a838] transition-colors">Call Now<span className="ml-2 text-base">📞</span></a>
          </div>
          <div className="mt-8 text-xs md:text-sm text-black/60 space-y-1">
            <p>Visit: [Your Location/Website]</p>
            <p>Email: [Your Email Address]</p>
            <p>Phone: [Your Phone Number]</p>
          </div>
        </div>
      </section> */}
    </main>
  )
}

