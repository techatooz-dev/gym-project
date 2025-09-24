import React from 'react';

const Icon = ({ name, className = '' }) => {
  switch (name) {
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 10.59V7a1 1 0 0 0-2 0v6a1 1 0 0 0 .29.71l3 3a1 1 0 1 0 1.42-1.42z" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M9 2a2 2 0 0 0-2 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2zm0 2h6v2H9z" />
        </svg>
      );
    case 'advice':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 8a7 7 0 0 1 14 0v1H5z" />
        </svg>
      );
    case 'recovery':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2a10 10 0 1 0 10 10h-2A8 8 0 1 1 12 4V2zm1 5h-2v6h6v-2h-4z" />
        </svg>
      );
    default:
      return null;
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-5">
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
