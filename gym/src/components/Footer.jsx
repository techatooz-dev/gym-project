"use client";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    // Mobile-only accordion state (default closed)
    const [mobileUsefulOpen, setMobileUsefulOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileContactOpen, setMobileContactOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email) return;
        // Placeholder action – integrate with your backend / service (Mailchimp, etc.)
        console.log("Newsletter signup:", email);
        setEmail("");
    }

    return (
    <footer className="relative z-20 text-[14px] md:text-[15px] leading-relaxed bg-[#23A7D8] text-white font-normal">
            {/* Main footer content */}
            <div className="mx-auto max-w-7xl px-6 py-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.9fr_1fr]">
                {/* Column 1: Logo + description + social + newsletter */}
                <div className="flex flex-col">
                    <div className="mb-5 md:-ml-2 lg:-ml-4">
                        <Image
                            src={site.footerLogo?.src || site.logo.src}
                            alt={site.footerLogo?.alt || site.logo.alt}
                            width={site.footerLogo?.width || 200}
                            height={site.footerLogo?.height || 70}
                            className="h-auto w-auto"
                        />
                    </div>
                    {/* <p className="leading-relaxed text-white/85 max-w-sm mb-8">
                        Electrical muscle stimulation is a revolutionary way of getting rid of extra fat – it provides
                        integrated electro muscle stimulation that burns fat more efficiently than a regular workout routine.
                    </p> */}

                    <div className="mb-6">
                        <div className="flex justify-center md:justify-start">
                            <SectionHeading>Follow Us</SectionHeading>
                        </div>
                        <div className="flex items-center gap-3 mt-3 justify-center md:justify-start">
                            <SocialIcon href="https://facebook.com" label="Facebook" icon={<FacebookIcon />} />
                            <SocialIcon href="https://twitter.com" label="Twitter" icon={<TwitterIcon />} />
                            <SocialIcon href="https://instagram.com" label="Instagram" icon={<InstagramIcon />} />
                            <SocialIcon href="https://youtube.com" label="YouTube" icon={<YouTubeIcon />} />
                        </div>
                    </div>




                    <div>
                        <p className="mb-3 text-[14px] md:text-[15px]">Stay updated with our latest news and offers</p>
                        <form onSubmit={handleSubmit} className="flex w-full max-w-md rounded-md overflow-hidden border border-white bg-white/5 focus-within:border-white focus-within:ring-2 focus-within:ring-white/70 transition">
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent px-4 py-3 text-base placeholder:text-base placeholder:text-white focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="group bg-white hover:bg-white active:bg-[#76C043] px-6 flex items-center justify-center gap-1 text-sm font-semibold text-gray-900 transition"
                                aria-label="Subscribe"
                            >
                                <ArrowIcon className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Column 2: Useful Links */}
                <div>
                    {/* Mobile heading with toggle (+ / -) */}
                    <button
                        type="button"
                        className="md:hidden w-full text-left font-semibold tracking-wide text-[15px] uppercase pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-white/70 flex items-center justify-between"
                        aria-expanded={mobileUsefulOpen}
                        aria-controls="footer-useful-links"
                        onClick={() => setMobileUsefulOpen((v) => !v)}
                    >
                        <span>Useful Links</span>
                        <span aria-hidden className="text-white text-xl leading-none">{mobileUsefulOpen ? "−" : "+"}</span>
                    </button>

                    {/* Desktop heading (unchanged) */}
                    <div className="hidden md:block">
                        <SectionHeading>Useful Links</SectionHeading>
                    </div>

                    <ul
                        id="footer-useful-links"
                        className={`mt-5 space-y-2 ${mobileUsefulOpen ? "block" : "hidden"} md:block`}
                    >
                        <BulletItem><FooterLink href="/">Home</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/why-choose-us">Why Choose Us</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/classes">Classes</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/services">Services</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/benefits">Benefits</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/contact-us">Contact Us</FooterLink></BulletItem>
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div>
                    {/* Mobile heading with toggle (+ / -) */}
                    <button
                        type="button"
                        className="md:hidden w-full text-left font-semibold tracking-wide text-[15px] uppercase pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-white/70 flex items-center justify-between"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="footer-our-services"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                        <span>Our Services</span>
                        <span aria-hidden className="text-white text-xl leading-none">{mobileServicesOpen ? "−" : "+"}</span>
                    </button>

                    {/* Desktop heading (unchanged) */}
                    <div className="hidden md:block">
                        <SectionHeading>Our Services</SectionHeading>
                    </div>

                    <ul
                        id="footer-our-services"
                        className={`mt-5 space-y-2 ${mobileServicesOpen ? "block" : "hidden"} md:block`}
                    >
                        <BulletItem><FooterLink href="/ems-sessions">EMS Sessions</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/power-of-ems-training">Power EMS Training</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/physiotherapy-sessions">Physiotherapy Sessions</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/wellness-programs">Wellness Programs</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/pain-reliefwith-ems">Pain Relief with EMS</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/sprained-ankle-recovery">Sprained Ankle Recovery</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/spinal-back-pain-management">Spinal & Back Pain Management</FooterLink></BulletItem>
                        <BulletItem><FooterLink href="/knee-shoulder-therapy">Knee & Shoulder Therapy</FooterLink></BulletItem>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    {/* Mobile heading with toggle (+ / -) */}
                    <button
                        type="button"
                        className="md:hidden w-full text-left font-semibold tracking-wide text-[15px] uppercase pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-white/70 flex items-center justify-between"
                        aria-expanded={mobileContactOpen}
                        aria-controls="footer-contact"
                        onClick={() => setMobileContactOpen((v) => !v)}
                    >
                        <span>Get In Touch</span>
                        <span aria-hidden className="text-white text-xl leading-none">{mobileContactOpen ? "−" : "+"}</span>
                    </button>

                    {/* Desktop heading (unchanged) */}
                    <div className="hidden md:block">
                        <SectionHeading>Get In Touch</SectionHeading>
                    </div>

                    <ul
                        id="footer-contact"
                        className={`mt-5 space-y-5 leading-relaxed ${mobileContactOpen ? "block" : "hidden"} md:block`}
                    >
                        <li className="flex items-start gap-3"><span className="contact-icon mt-0.5 inline-flex h-10 w-10 flex-none shrink-0 items-center justify-center rounded-md bg-[#76C043] text-white"><ClockIcon /></span> <p>9 AM – 9 PM | Monday – Saturday</p></li>
                        <li className="flex items-start gap-3"><span className="contact-icon mt-0.5 inline-flex h-10 w-10 flex-none shrink-0 items-center justify-center rounded-md bg-[#76C043] text-white"><PhoneIcon /></span> <p>0321-7847385 , 0321-4980835</p></li>
                        <li className="flex items-start gap-3"><span className="contact-icon mt-0.5 inline-flex h-10 w-10 flex-none shrink-0 items-center justify-center rounded-md bg-[#76C043] text-white"><EmailIcon /></span> <p><a href="mailto:info@proemsfit.com" className="hover:underline">info@proemsfit.com</a></p></li>
                        <li className="flex items-start gap-3"><span className="contact-icon mt-0.5 inline-flex h-10 w-10 flex-none shrink-0 items-center justify-center rounded-md bg-[#76C043] text-white"><LocationIcon /></span> <p>34-C Block, Bank Square, Model Town, Lahore</p></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#23A7D8] border-t border-white/10">
                <div className="text-center mx-auto max-w-7xl px-6 py-5 flex flex-col-reverse gap-2 md:flex-row md:items-center md:justify-between text-white">
                    <p>© 2025 Proemsfitness. All Rights Reserved.</p>
                    <p>Developed<span aria-label="love"></span> by <span className="font-semibold text-white">Tech Solutionor</span></p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }) {
    return (
        <Link
            href={href}
            className="relative inline-block px-2 py-1 -mx-2 rounded-sm hover:text-white/90 focus:text-white/90 focus:outline-none transition-colors duration-150"
        >
            {children}
        </Link>
    );
}

function SectionHeading({ children }) {
    return (
        <h3 className="font-semibold tracking-wide text-[15px] md:text-[16px] uppercase pb-2 relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-56 after:max-w-full after:bg-white/70">{children}</h3>
    );
}

function BulletItem({ children }) {
    return (
        <li className="flex gap-3 items-start group leading-snug">
            <span className="mt-2 h-2 w-2 rounded-full bg-white ring-1 ring-white/40 group-hover:scale-125 transition-transform" />
            <span className="text-white">{children}</span>
        </li>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#76C043] hover:bg-[#5fa239] transition-colors text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Link>
    );
}

function ArrowIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...props}>
            <path d="M5 12.75h10.19l-4.72 4.72a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 1 0-1.06 1.06l4.72 4.72H5a.75.75 0 0 0 0 1.5Z" />
        </svg>
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

function EmailIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
            <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.2-.5 6.82 5.11a.75.75 0 0 0 .96 0L19.8 5h-14.6Zm14.8 2.31-5.76 4.32a3.25 3.25 0 0 1-3.96 0L4.5 7.31v11.19c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7.31Z" />
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
