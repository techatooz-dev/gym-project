import React from 'react';
import { FaClock, FaClipboardList, FaUserMd, FaHeartbeat } from 'react-icons/fa';

const Icon = ({ name, className = '' }) => {
  const map = {
    clock: FaClock,
    clipboard: FaClipboardList,
    advice: FaUserMd,
    recovery: FaHeartbeat,
  };
  const Comp = map[name];
  return Comp ? <Comp className={className} /> : null;
};

function Experience() {
  const items = [
    {
      title: 'Faster Results in Less Time',
      body:
        'Our EMS training activates up to 90% of your muscles simultaneously, giving you the benefit of a 2-hour workout in just 20 minutes. Perfect for those with a busy lifestyle.',
      icon: 'clock',
      bubble: 'bg-sky-100 text-sky-600',
    },
    {
      title: 'Personalized Diet Plans',
      body:
        "Alongside EMS training, we provide tailored diet plans to match your goals — whether it's fat loss, muscle gain, or overall fitness. A balanced diet plan ensures you achieve long-lasting results.",
      icon: 'clipboard',
      bubble: 'bg-rose-100 text-rose-600',
    },
    {
      title: 'Expert Advice & Professional Guidance',
      body:
        'Every client receives one-on-one expert advice from certified trainers and physiotherapists. Your workouts are monitored, safe, and fully customized to your needs.',
      icon: 'advice',
      bubble: 'bg-amber-100 text-amber-600',
    },
    {
      title: 'Injury Recovery & Life Plans',
      body:
        'Whether it’s rehabilitation after an injury or maintaining fitness during different life stages, we’ve got you covered. Our programs include pregnancy‑friendly diets and safe body‑shaping routines so you can stay fit with confidence.',
      icon: 'recovery',
      bubble: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <section className="px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading + small green bar */}
        <div className="mb-6">
          <div className="h-2 w-20 bg-lime-500 rounded-sm mb-2" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
            Experience the Difference with EMS Technology
          </h2>
        </div>

        {/* Grid of cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-3 md:px-5">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-100/70 border border-slate-200 shadow-sm p-6 md:p-7"
            >
              <div className={`inline-flex items-center justify-center h-11 w-11 rounded-full ${it.bubble} mb-3`}>
                <Icon name={it.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-2">
                {it.title}
              </h3>
              <p className="text-slate-600 leading-7">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
