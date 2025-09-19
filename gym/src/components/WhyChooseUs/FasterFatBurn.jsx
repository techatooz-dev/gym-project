import React from "react";

function FasterFatBurn() {
  return (
    <section id="faster-fat-burn" className="relative isolate">
      {/* Ribbon headline with math‑style equation */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl p-0 text-gray-700">

          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500">Science‑Backed Efficiency</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-4xl text-gray-800">
              20 mins EMS = 2 hours of conventional workout
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base">
              High‑intensity, time‑compressed muscle activation with joint‑friendly movements. Same effort, smarter output.
            </p>
          </div>

          {/* Comparison bars */}
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* EMS bar */}
              <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>EMS (20 mins)</span>
                  <span>Activation</span>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                  <div className="h-3 w-[92%] rounded-full bg-emerald-600" />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-white ring-1 ring-emerald-700">High motor‑unit recruitment</span>
                  <span className="text-gray-600">92%</span>
                </div>
              </div>

              {/* Conventional bar */}
              <div className="rounded-2xl bg-white p-4 ring-1 ring-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Conventional (120 mins)</span>
                  <span>Activation</span>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                  <div className="h-3 w-[65%] rounded-full bg-gray-400" />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-gray-700 px-2 py-0.5 text-white ring-1 ring-gray-800">Mixed recruitment</span>
                  <span className="text-gray-600">65%</span>
                </div>
              </div>
            </div>
          </div>

          {/* KPI strip */}
          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 gap-3">
            <div className="rounded-2xl bg-emerald-600 p-4 text-center ring-1 ring-emerald-700">
              <div className="text-xl font-semibold text-white">Up to 2x</div>
              <div className="text-[10px] uppercase tracking-wide text-emerald-100">Efficiency</div>
            </div>
            <div className="rounded-2xl bg-fuchsia-600 p-4 text-center ring-1 ring-fuchsia-700">
              <div className="text-xl font-semibold text-white">Joint‑Friendly</div>
              <div className="text-[10px] uppercase tracking-wide text-fuchsia-100">Low impact</div>
            </div>
            <div className="rounded-2xl bg-white p-4 text-center ring-1 ring-gray-200">
              <div className="text-xl font-semibold text-gray-800">20 mins</div>
              <div className="text-[10px] uppercase tracking-wide text-gray-600">Per session</div>
            </div>
          </div>

          {/* Results oriented copy */}
          <div className="mx-auto mt-6 max-w-2xl text-center text-sm">
            Lose fat up to <span className="font-semibold text-gray-900">30% faster</span> than traditional training — when combined with
            a balanced diet and 2 sessions per week.
          </div>

          {/* Footnote / context */}
          <div className="mx-auto mt-3 max-w-2xl text-center text-[11px] leading-5 text-gray-500">
            Figures are illustrative averages based on EMS literature; individual results vary by adherence,
            nutrition, recovery, and baseline fitness.
          </div>
        </div>
      </div>
    </section>
  );
}

export default FasterFatBurn;
