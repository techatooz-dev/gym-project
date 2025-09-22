import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

function WhyHappy() {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-8 py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className={`${anton.className} text-3xl md:text-6xl uppercase text-[#111827] mb-10`}>Why Our Clients Are Happy</h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <HappyCard title="Life-Changing Results">
            At Pro EMS Fit, clients experience transformations that go far beyond physical appearance. From relieving chronic pain to achieving complete body reshaping, our EMS programs create visible, long-lasting improvements in health, posture, and strength. Each session is designed to bring measurable progress, helping clients move closer to their personal goals with every step.
          </HappyCard>

          <HappyCard title="Boosted Confidence & Energy">
            True change is not only about how you look — it’s about how you feel. Our clients report feeling more active, more motivated, and more confident in their daily routines. By unlocking new levels of energy and self-belief, Pro EMS Fit empowers clients to approach both their personal and professional lives with positivity and strength.
          </HappyCard>

          <HappyCard title="Faster Recovery">
            Whether it’s recovering from injuries, overcoming stiffness, or improving mobility, EMS therapy accelerates the healing process. Our advanced methods target deep muscle fibers, improve circulation, and reduce inflammation, allowing clients to get back to their best selves in record time. Pro EMS Fit ensures recovery is not just quicker but also safer.
          </HappyCard>

          <HappyCard title="Time-Efficient Training">
            We understand how valuable time is in today’s busy world. That’s why our EMS sessions are designed to deliver maximum results in just 20 minutes. Clients achieve the equivalent of hours of traditional training in a fraction of the time, making fitness achievable even for the busiest professionals. No wasted hours, only powerful, focused outcomes.
          </HappyCard>

          <HappyCard title="A Trusted Community">
            Pro EMS Fit is not just about workouts; it’s about belonging. Every client becomes part of a supportive community where trainers care, clients motivate each other, and everyone shares the journey of transformation. This atmosphere of trust and encouragement makes Pro EMS Fit more than a fitness studio — it makes it a second home.
          </HappyCard>

          <HappyCard title="Technology We Use">
            The technology at Pro EMS Fit is built on advanced, medical-grade EMS machines that deliver safe and controlled electrical impulses to activate deep muscle fibers, improve blood circulation, and reduce joint strain — all while saving time. Backed by scientific research and guided by expert trainers, our EMS sessions are fully customized, efficient, and results-driven, making it a smarter and safer choice for both fitness and recovery.
          </HappyCard>
        </div>
      </div>
    </section>
  );
}

function HappyCard({ title, children }) {
  return (
    <article className="relative  bg-white p-5 ">
      <div className="mb-4 inline-block bg-[#7AC943] px-3 py-2 text-base md:text-lg font-semibold text-[#15410B]">
        {title}
      </div>
      <p className="text-slate-700 leading-7 md:leading-8 text-sm md:text-base">{children}</p>
    </article>
  );
}

export default WhyHappy;
