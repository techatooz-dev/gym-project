import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

function OurSuccess() {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className={`${anton.className} text-4xl md:text-7xl uppercase tracking-[0.08em] text-[#26A3D7] mb-6`}>
          Our Success Story
        </h2>

        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Left: copy */}
          <div className="md:col-span-7 text-slate-700 leading-7 md:leading-8 space-y-5">
            <p>
              Since our inception in [2018], Pro EMS Fit has been dedicated to transforming lives
              through the power of advanced EMS (Electrical Muscle Stimulation) technology. What began
              as a small rehab and EMS training studio with a clear mission — to merge cutting-edge
              science with personalized care — has now grown into a trusted destination for wellness,
              strength, and results.
            </p>
            <p>
              From the very beginning, our goal has been simple: to provide people with smarter, safer,
              and more effective ways to achieve their health and recovery goals. Over the years, we’ve
              expanded our services, improved our facilities, and built a professional team that
              believes fitness and therapy should be efficient, accessible, and truly life-changing.
            </p>
            <p>
              Today, Pro EMS Fit is more than just a studio — it is a community where science meets
              motivation. We combine physiotherapy, personalized training, advanced EMS technology, and
              expert guidance to ensure every client experiences faster recovery, better strength, and
              lasting results.
            </p>
            <p>
              At the heart of our growth lies our promise of care, trust, and innovation. Each session
              is designed to match individual needs, ensuring maximum benefits in minimum time. With
              countless success stories and happy clients, Pro EMS Fit continues to stand as a place
              where people don’t just train — they rebuild their confidence, energy, and overall
              well-being.
            </p>
          </div>

          {/* Right: visual */}
          <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-md md:max-w-none min-h-[380px] mt-22">
              {/* Green rounded shape behind */}
              <div className="absolute bottom-0 right-0 h-56 w-64 md:h-72 md:w-96 bg-[#7AC943] rounded-tl-[56px] rounded-br-[56px] shadow-md" />
              {/* Image */}
              <div className="absolute -right-2 bottom-0 md:right-0">
                <Image
                  src="/2nd (4).png"
                  alt="Athlete wearing EMS suit training beside EMS machine"
                  width={520}
                  height={520}
                  className="h-auto w-[340px] md:w-[460px] object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSuccess;
