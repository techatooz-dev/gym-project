import React from "react";
import Link from "next/link";

export default function OurServicesSection() {
	const cards = [
		{
			imageSrc: "/EMS-fitness-training.jpeg",
			title: "EMS Sessions",
			price: "Personalized Programs",
			description:
				"At Pro EMS Fit, we offer specialized EMS sessions tailored to your needs. From fitness training with certified physiotherapists to personalized wedding fitness plans with diet guidance, we ensure effective results. For joint pain patients, our EMS programs provide safe, low-impact training without the heavy gym load.",
			href: "/ems-sessions",
		},
		{
			imageSrc: "/EMS-fitness-training.jpeg",
			title: "Sports Performance Training",
			price: "Personalized Programs",
			description:
				"Specialized EMS-based training designed to improve strength, endurance, and flexibility for athletes and active individuals, while reducing the risk of injuries. These programs also enhance performance and support faster recovery, helping you stay at your best.",
			href: "/sports-performance-training",
		},
		{
			imageSrc: "/EMS-fitness-training.jpeg",
			title: "Physiotherapy Sessions",
			price: "Personalized Programs",
			description:
				"Pro EMS Fit provides expert care for a wide range of conditions, including musculoskeletal disorders such as frozen shoulder, neck or knee pain, and disc bulge. Our team also supports patients with neurological disorders like stroke, cerebral palsy, vertigo, and facial palsy. In addition,",
			href: "/physiotherapy-sessions",
		},
		{
			imageSrc: "/EMS-fitness-training.jpeg",
			title: "Wellness Programs",
			price: "Personalized Programs",
			description:
				"At Pro EMS Fit, our wellness programs are designed to support both physical fitness and overall well-being. Whether your goal is weight loss, body toning, posture correction, stress relief, or core strengthening, our customized sessions ensure safe and effective results. ",
			href: "/wellness-programs",
		},
	];
	return (
		<section className="relative z-10 py-16 md:py-20">
			<div className="mb-10 text-center">
				{/* <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-green-500 to-blue-400 bg-clip-text text-transparent tracking-tight animate-fade-in-up">
					OUR SERVICES
				</h2> */}


				<h2 className="text-4xl md:text-5xl font-extrabold text-green-600 tracking-tight animate-fade-in-up">
					OUR SERVICES
				</h2>

				<span className="block w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 mx-auto mt-4 rounded-full animate-fade-in-up" />
			</div>
			<div className="mt-10 grid gap-10 max-w-7xl mx-auto px-4 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{cards.map((card, i) => (
					<div
						key={i}
						className="group bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col p-0 relative overflow-hidden animate-fade-in-up"
					>
						{/* Full-width image at the top */}
						<div className="w-full h-48 bg-gray-100 overflow-hidden flex-shrink-0">
							<img src={card.imageSrc} alt={card.title} className="w-full h-full object-cover" />
						</div>
						<div className="flex flex-col flex-1 px-6 py-6">
							<h3 className="text-xl font-bold text-blue-700 mb-2 text-center">{card.title}</h3>
							{/* <p className="text-green-700 font-semibold mb-2">{card.price}</p> */}
							<p className="text-gray-500 text-sm mb-4 text-center line-clamp-3">{card.description}</p>
							<Link
								legacyBehavior={false}
								href={card.href}
								className="mt-auto inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-green-600 transition-colors text-sm"
							>
								View Details
							</Link>
						</div>
					</div>
				))}
			</div>
			{/* No ALL PRODUCTS button */}
		</section>
	);
}
