import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
    return (
        <footer className="relative z-20 text-slate-800 text-sm bg-white">
            {/* Top grid */}
            <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand + Newsletter + Insights merged */}
                <div className="space-y-4 max-w-2xl lg:col-span-2">
                    <div className="flex items-center gap-2">
                        <Image
                            src={site.footerLogo?.src || site.logo.src}
                            alt={site.footerLogo?.alt || site.logo.alt}
                            width={site.footerLogo?.width || 160}
                            height={site.footerLogo?.height || 60}
                            className="h-auto w-auto"
                        />
                    </div>
                    <p className="leading-relaxed text-slate-600">
                        EMS-driven training designed for modern lifestyles.
                        Burn fat faster and build lean, strong muscle.
                        Protect your joints with safe, low-impact sessions.
                        Achieve visible results in just 20 minutes per workout.
                        Train smarter, stay consistent, and transform your body.
                    </p>
                    {/* <div>
                        <h3 className="inline-block text-white bg-green-500 px-2 py-1 rounded-md font-semibold mb-2">Insights</h3>
                        <ul className="mt-2 space-y-2 text-slate-700">
                            <li><Link href="/why-choose-us" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Why EMS Works</Link></li>
                            <li><Link href="/benefits" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Benefits</Link></li>
                            <li><Link href="/classes" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Classes</Link></li>
                            <li><Link href="/contact-us" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div> */}
                    <div>
                        <h4 className="text-blue-600 font-semibold mb-2">Newsletter</h4>
                        {/* <form className="flex w-full max-w-sm rounded-full overflow-hidden bg-blue-50 ring-1 ring-blue-200">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none"
                                required
                            />
                            <button
                                type="button"
                                className="px-4 md:px-5 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                SUBSCRIBE
                            </button>
                        </form> */}
                    </div>
                    <div>
                        <Link href="mailto:info@proemsfitness.com" className="font-semibold text-blue-600 hover:text-blue-700">
                            info@proemsfitness.com
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 text-lg text-blue-600">
                        <SocialIcon href="https://youtube.com" label="YouTube" icon={<YouTubeIcon />} />
                        <SocialIcon href="https://linkedin.com" label="LinkedIn" icon={<LinkedInIcon />} />
                        <SocialIcon href="https://instagram.com" label="Instagram" icon={<InstagramIcon />} />
                        <SocialIcon href="https://facebook.com" label="Facebook" icon={<FacebookIcon />} />
                    </div>
                </div>

                {/* Removed previous Insights column and merged into brand */}

                {/* Services */}
                <div className="relative lg:pl-8 lg:ml-6 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:bottom-2 lg:before:w-[2px] lg:before:bg-gradient-to-b lg:before:from-green-500 lg:before:via-green-500/80 lg:before:to-green-500 lg:before:rounded">
                    <h3 className="text-white rounded-md bg-green-500 px-2 py-1 font-semibold tracking-wide mb-3">Services</h3>
                    <ul className="space-y-2 text-slate-700">
                        <li><Link href="/services#ems-sessions" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">EMS Sessions</Link></li>
                        <li><Link href="/services#sports-performance" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Sports Performance Training</Link></li>
                        <li><Link href="/services#physiotherapy" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Physiotherapy Sessions</Link></li>
                        <li><Link href="/services#wellness-programs" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Wellness Programs</Link></li>
                        <li><Link href="/services#pain-relief" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Pain Relief with EMS</Link></li>
                        <li><Link href="/services#spinal-back" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Back & Spine Management</Link></li>
                        <li><Link href="/services#knee-shoulder" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Knee & Shoulder Therapy</Link></li>
                    </ul>
                </div>

                {/* Insights (replaces Support) */}
                <div className="relative lg:pl-8 lg:ml-6 lg:before:content-[''] lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:bottom-2 lg:before:w-[2px] lg:before:bg-gradient-to-b lg:before:from-green-500 lg:before:via-green-500/80 lg:before:to-green-500 lg:before:rounded">
                    <h3 className="text-white rounded-md bg-green-500 px-2 py-1 font-semibold tracking-wide mb-3">Insights</h3>
                    <ul className="space-y-2 text-slate-700">
                        <li><Link href="/why-choose-us" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Why EMS Works</Link></li>
                        <li><Link href="/benefits" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Benefits</Link></li>
                        <li><Link href="/classes" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Classes</Link></li>
                        <li><Link href="/contact-us" className="block px-2 py-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            {/* Studio locations row */}
            <div className="mx-auto max-w-7xl px-6 pb-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <LocationCard
                        title="Address"
                        lines={[
                            "Location",
                            "34-C block, Bank Square, Model Town, Lahore",
                            "By appointment only",

                        ]}
                    />
                    <LocationCard
                        title="Timing & Contact"
                        lines={[
                            "Monday to Saturday: 9:00 AM – 9:00 PM",
                            "By appointment only",
                            "WhatsApp: +92 321 7847385",
                            "Phone: +92 321 4980835"

                        ]}

                    />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 bg-blue-600">
                <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-slate-700">
                    <p className="text-white">Copyright © 2025 Proemsfitness. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        {/* <Link href="#" className="px-2 py-1 rounded-md text-white transition-colors hover:bg-blue-500 hover:text-white">Privacy Policy</Link> */}
                        {/* <span aria-hidden>•</span> */}
                        {/* <Link href="#" className="px-2 py-1 rounded-md text-white transition-colors hover:bg-blue-500 hover:text-white">Terms</Link> */}
                        <span aria-hidden>•</span>
                        <p>Made with <span className="text-white" aria-label="love">❤</span> by <span className="font-semibold text-slate-900 text-white">Tech Solutionor</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function LocationCard({ title, lines }) {
    return (
        <div className="rounded-2xl bg-white border border-gray-200 p-5 border-l-4 border-l-green-500">
            <h4 className="text-gray-900 font-semibold mb-2">{title}</h4>
            <ul className="space-y-1 text-gray-900">
                {lines.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
        </div>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="transition-colors hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Link>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
        </svg>
    );
}
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.4.6 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z" />
        </svg>
    );
}
function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.53 1.51.99.46.46.75.9.99 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.26 4.26 0 0 1-.99 1.51 4.26 4.26 0 0 1-1.51.99c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.26 4.26 0 0 1-1.51-.99 4.26 4.26 0 0 1-.99-1.51c-.16-.46-.35-1.26-.4-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.53-1.05.99-1.51.46-.46.9-.75 1.51-.99.46-.16 1.26-.35 2.43-.4 1.27-.06 1.65-.07 4.85-.07Zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.78.34 3.95.66 3.07.99 2.3 1.48 1.6 2.18.9 2.88.41 3.65.08 4.53.34 5.36.13 6.37.07 7.64.01 8.92 0 9.33 0 12c0 2.67.01 3.08.07 4.36.06 1.27.27 2.28.53 3.11.33.88.82 1.65 1.52 2.35.7.7 1.47 1.19 2.35 1.52.83.26 1.84.47 3.11.53 1.28.06 1.69.07 4.36.07s3.08-.01 4.36-.07c1.27-.06 2.28-.27 3.11-.53.88-.33 1.65-.82 2.35-1.52.7-.7 1.19-1.47 1.52-2.35.26-.83.47-1.84.53-3.11.06-1.28.07-1.69.07-4.36s-.01-3.08-.07-4.36c-.06-1.27-.27-2.28-.53-3.11A6.41 6.41 0 0 0 20.89 1.6 6.41 6.41 0 0 0 18.54.53c-.83-.26-1.84-.47-3.11-.53C14.16.01 13.75 0 11.08 0H12Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.44a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z" />
        </svg>
    );
}
function YouTubeIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M23.5 6.2s-.23-1.63-.95-2.34c-.9-.95-1.9-.96-2.36-1C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.19.36c-.46.05-1.46.06-2.36 1-.72.71-.95 2.34-.95 2.34S0 8.17 0 10.13v1.73c0 1.96.49 3.93.49 3.93s.23 1.63.95 2.34c.9.95 2.09.92 2.62 1.02 1.9.18 7.94.36 7.94.36s4.9-.01 8.19-.36c.46-.05 1.46-.06 2.36-1 .72-.71.95-2.34.95-2.34s.49-1.97.49-3.93v-1.73c0-1.96-.49-3.93-.49-3.93ZM9.54 14.76V7.62l6.28 3.57-6.28 3.57Z" />
        </svg>
    );
}
