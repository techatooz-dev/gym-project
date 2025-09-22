import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
    return (
        <footer className="relative z-20 text-sm bg-[#26A3D7] text-white">
            {/* Main footer content */}
            <div className="mx-auto max-w-7xl px-6 py-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {/* Column 1: Logo + description */}
                <div>
                    <div className="mb-4">
                        <Image
                            src={site.footerLogo?.src || site.logo.src}
                            alt={site.footerLogo?.alt || site.logo.alt}
                            width={site.footerLogo?.width || 160}
                            height={site.footerLogo?.height || 60}
                            className="h-auto w-auto"
                        />
                    </div>
                    <p className="leading-relaxed max-w-xs/loose text-white/90">
                        Electrical muscle stimulation is a revolutionary way of getting rid of extra fat
                        it provides an integrated electro muscle stimulations that burns fat 20 times more
                        efficiently than a regular workout routine.
                    </p>
                </div>

                {/* Column 2: Useful Links */}
                <div className="ml-12" >
                    <h3 className="font-semibold tracking-wide uppercase mb-3">Useful Links</h3>
                    <ul className="space-y-2 list-disc list-inside marker:text-white/90">
                        <li><FooterLink href="/">Home</FooterLink></li>
                        <li><FooterLink href="/why-choose-us">Why Choose Us</FooterLink></li>
                        <li><FooterLink href="/classes">Classes</FooterLink></li>
                        <li><FooterLink href="/services">Services</FooterLink></li>
                        <li><FooterLink href="/benefits">Benefits</FooterLink></li>
                        <li><FooterLink href="/contact-us">Contact Us</FooterLink></li>
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div>
                    <h3 className="font-semibold tracking-wide uppercase mb-3">Our Services</h3>
                    <ul className="space-y-2 list-disc list-inside marker:text-white/90">
                        <li><FooterLink href="/ems-sessions">EMS Sessions</FooterLink></li>
                        <li><FooterLink href="/sports-performance-training">Sports Performance Training</FooterLink></li>
                        <li><FooterLink href="/physiotherapy-sessions">Physiotherapy Sessions</FooterLink></li>
                        <li><FooterLink href="/wellness-programs">Wellness Programs</FooterLink></li>
                        <li><FooterLink href="/pain-reliefwith-ems">Pain Relief with EMS</FooterLink></li>
                        <li><FooterLink href="/sprained-ankle-recovery">Sprained Ankle Recovery</FooterLink></li>
                        <li><FooterLink href="/spinal-back-pain-management">Spinal & Back Pain Management</FooterLink></li>
                        <li><FooterLink href="/knee-shoulder-therapy">Knee & Shoulder Therapy</FooterLink></li>
                    </ul>
                </div>

                {/* Column 4: Contact + Social */}
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5"><PhoneIcon /></div>
                        <p className="leading-relaxed">
                            0321-7847385 , 0321-4980835
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5"><ClockIcon /></div>
                        <p className="leading-relaxed">9 AM – 9 PM | Monday – Saturday</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5"><LocationIcon /></div>
                        <p className="leading-relaxed">34-C Block, Bank Square, Model Town, Lahore</p>
                    </div>
                    <div>
                        <p className="font-medium mb-2">Social:</p>
                        <div className="flex items-center gap-2 text-white">
                            <SocialIcon href="https://facebook.com" label="Facebook" icon={<FacebookIcon />} />
                            <SocialIcon href="https://twitter.com" label="Twitter" icon={<TwitterIcon />} />
                            <SocialIcon href="https://instagram.com" label="Instagram" icon={<InstagramIcon />} />
                            <SocialIcon href="https://youtube.com" label="YouTube" icon={<YouTubeIcon />} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#1E8FBE]">
                <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs">
                    <p>Copyright © 2025 Proemsfitness. All Rights Reserved.</p>
                    <div className="flex items-center gap-3">
                        <span aria-hidden>•</span>
                        <p>Made with <span className="" aria-label="love">❤</span> by <span className="font-semibold">Tech Solutionor</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }) {
    return (
        <Link href={href} className="hover:underline underline-offset-2">
            {children}
        </Link>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Link>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.24.19 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
            <path d="M12 1.75A10.25 10.25 0 112 12 10.25 10.25 0 0112 1.75zm0 1.5A8.75 8.75 0 1020.75 12 8.75 8.75 0 0012 3.25zm.75 4a.75.75 0 10-1.5 0v5.06c0 .2.08.39.22.53l3.38 3.38a.75.75 0 101.06-1.06l-3.16-3.16V7.25z"/>
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"/>
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
            <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
            <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.18 11.81-11.81 11.81-2.35 0-4.53-.69-6.36-1.87.33.04.65.05.99.05 1.95 0 3.74-.66 5.16-1.77a4.16 4.16 0 01-3.88-2.88c.25.04.5.07.77.07.37 0 .74-.05 1.08-.14a4.15 4.15 0 01-3.33-4.07v-.05c.56.31 1.19.5 1.86.52a4.15 4.15 0 01-1.85-3.46c0-.77.21-1.49.57-2.11a11.79 11.79 0 008.56 4.34 4.69 4.69 0 01-.1-.95 4.15 4.15 0 017.19-2.84 8.19 8.19 0 002.63-1 4.13 4.13 0 01-1.82 2.29 8.33 8.33 0 002.39-.65 8.94 8.94 0 01-2.07 2.15z"/>
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.4.6 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.53 1.51.99.46.46.75.9.99 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.26 4.26 0 0 1-.99 1.51 4.26 4.26 0 0 1-1.51.99c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.26 4.26 0 0 1-1.51-.99 4.26 4.26 0 0 1-.99-1.51c-.16-.46-.35-1.26-.4-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.53-1.05.99-1.51.46-.46.9-.75 1.51-.99.46-.16 1.26-.35 2.43-.4 1.27-.06 1.65-.07 4.85-.07Zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.78.34 3.95.66 3.07.99 2.3 1.48 1.6 2.18.9 2.88.41 3.65.08 4.53.34 5.36.13 6.37.07 7.64.01 8.92 0 9.33 0 12c0 2.67.01 3.08.07 4.36.06 1.27.27 2.28.53 3.11.33.88.82 1.65 1.52 2.35.7.7 1.47 1.19 2.35 1.52.83.26 1.84.47 3.11.53 1.28.06 1.69.07 4.36.07s3.08-.01 4.36-.07c1.27-.06 2.28-.27 3.11-.53.88-.33 1.65-.82 2.35-1.52.7-.7 1.19-1.47 1.52-2.35.26-.83.47-1.84.53-3.11.06-1.28.07-1.69.07-4.36s-.01-3.08-.07-4.36c-.06-1.27-.27-2.28-.53-3.11A6.41 6.41 0 0 0 20.89 1.6 6.41 6.41 0 0 0 18.54.53c-.83-.26-1.84-.47-3.11-.53C14.16.01 13.75 0 11.08 0H12Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.44a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
            <path d="M23.5 6.2s-.23-1.63-.95-2.34c-.9-.95-1.9-.96-2.36-1C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.19.36c-.46.05-1.46.06-2.36 1-.72.71-.95 2.34-.95 2.34S0 8.17 0 10.13v1.73c0 1.96.49 3.93.49 3.93s.23 1.63.95 2.34c.9.95 2.09.92 2.62 1.02 1.9.18 7.94.36 7.94.36s4.9-.01 8.19-.36c.46-.05 1.46-.06 2.36-1 .72-.71.95-2.34.95-2.34s.49-1.97.49-3.93v-1.73c0-1.96-.49-3.93-.49-3.93ZM9.54 14.76V7.62l6.28 3.57-6.28 3.57Z" />
        </svg>
    );
}
