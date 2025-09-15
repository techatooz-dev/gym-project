import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-[#0066A4] text-white text-sm">
            <div className="mx-auto max-w-7xl px-6 py-10 grid  gap-6 sm:gap-16 md:grid-cols-4">
                {/* Brand / About */}
                <div className="space-y-1 max-w-xs">
                    <div className="flex items-center gap-2">
                        <Image
                            src={site.footerLogo?.src || site.logo.src}
                            alt={site.footerLogo?.alt || site.logo.alt}
                            width={site.footerLogo?.width || 160}
                            height={site.footerLogo?.height || 60}
                            className="h-auto w-auto"
                        />
                    </div>
                    <p className="leading-relaxed">
                        Electrical muscle stimulation is a revolutionary way of getting rid of extra fat it provides an integrated electro muscle stimulations that burns fat 20 times more efficiently than a regular workout routine.
                    </p>
                </div>

                {/* Useful Links */}
                <div className="mt-2 md:mt-0 ml-2 md:ml-12">
                    <h3 className="font-bold tracking-wide mb-2 md:mb-3 text-white/90">USEFUL LINKS</h3>
                    <ul className="space-y-1.5 md:space-y-2 list-disc pl-4 md:pl-5 marker:text-white/80">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/why-choose-us" className="hover:underline">Why Choose Us</Link></li>
                        <li><Link href="/classes" className="hover:underline">Classes</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/benefits" className="hover:underline">Benefits</Link></li>
                        <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services (derived from services page sections) */}
                <div>
                    <h3 className="font-bold tracking-wide mb-3 text-white/90">OUR SERVICES</h3>
                    <ul className="space-y-2 list-disc pl-5 marker:text-white/80">
                        <li><Link href="/services#ems-sessions" className="hover:underline">EMS Sessions</Link></li>
                        <li><Link href="/services#sports-performance" className="hover:underline">Sports Performance Training</Link></li>
                        <li><Link href="/services#physiotherapy" className="hover:underline">Physiotherapy Sessions</Link></li>
                        <li><Link href="/services#wellness-programs" className="hover:underline">Wellness Programs</Link></li>
                        <li><Link href="/services#pain-relief" className="hover:underline">Pain Relief with EMS</Link></li>
                        <li><Link href="/services#sprained-ankle" className="hover:underline">Sprained Ankle Recovery</Link></li>
                        <li><Link href="/services#spinal-back" className="hover:underline">Spinal & Back Pain Management</Link></li>
                        <li><Link href="/services#knee-shoulder" className="hover:underline">Knee & Shoulder Therapy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold tracking-wide mb-3 text-white/90">GET IN TOUCH</h3>
                    <ul className="space-y-2 mb-4">
                        <li>Address</li>
                        <li>Structure gym gulberg Lahore</li>
                        <li>Omc hospital jail road Lahore</li>
                        <li><span className="font-semibold">By appointment only</span></li>
                        <li>Call us: <a href="tel:03310491220" className="font-semibold hover:underline">03310491220</a></li>
                    </ul>
                    <div className="flex items-center gap-4 text-lg mt-2">
                        <SocialIcon href="https://facebook.com" label="Facebook" icon={<FacebookIcon />} />
                        <SocialIcon href="https://twitter.com" label="Twitter" icon={<TwitterIcon />} />
                        <SocialIcon href="https://linkedin.com" label="LinkedIn" icon={<LinkedInIcon />} />
                        <SocialIcon href="https://pinterest.com" label="Pinterest" icon={<PinterestIcon />} />
                        <SocialIcon href="https://instagram.com" label="Instagram" icon={<InstagramIcon />} />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black text-white text-xs">
                <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <p className="text-center md:text-left">Copyright © 2025 Proemsfitness. All Rights Reserved.</p>
                    <p className="text-center md:text-right">Made By <span className="text-red-500" aria-label="love">❤</span> <span className="font-semibold">Tech Solutionor</span></p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="hover:text-white/70 transition-colors"
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
function TwitterIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.05 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.16 4.9a4.27 4.27 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 22 5.92Z" />
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
function PinterestIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M12.04 2C6.56 2 4 5.64 4 9.38c0 1.8.68 3.4 2.14 3.99.24.1.46.01.53-.26l.22-.86c.07-.26.04-.35-.15-.58-.42-.5-.68-1.15-.68-2.07 0-2.67 2-5.07 5.21-5.07 2.84 0 4.41 1.74 4.41 4.07 0 3.05-.68 5.62-2.71 5.62-.9 0-1.58-.74-1.37-1.65.26-1.09.76-2.28.76-3.07 0-.71-.38-1.31-1.17-1.31-.93 0-1.68.96-1.68 2.26 0 .82.27 1.37.27 1.37l-1.1 4.65c-.33 1.38-.05 3.07-.03 3.24.02.11.16.14.23.05.1-.13 1.36-1.69 1.79-3.25.12-.43.69-2.68.69-2.68.34.65 1.34 1.22 2.4 1.22 3.16 0 5.3-2.88 5.3-6.74C19.99 5.36 16.97 2 12.04 2Z" />
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
