import React, { useEffect, useMemo, useRef } from 'react';

// Simple responsive video component.
// Place your video file in /public (e.g. /promo.mp4) and pass its filename via props if needed.
// Usage: <Vedio src="/promo.mp4" poster="/gym2.jpg" />
// If you have a YouTube/Vimeo public link instead, you can pass embedUrl and it will render an iframe.

export default function Vedio({
  title = 'Inside Our EMS Training Session',
  description = 'A quick look at how a structured EMS workout and guided physiotherapy flow inside our studio.',
  src = '/pro ems fit.mp4', // default placeholder path (ensure the file exists in public/)
  poster = '/',
  autoPlay = true,
  loop = false,
  muted = true,
  // We default to no visible native controls per request; can be overridden if ever needed
  controls = false,
  embedUrl, // e.g. 'https://www.youtube.com/embed/VIDEO_ID?rel=0'
}) {
  const isEmbed = Boolean(embedUrl);

  // Enhance embed URL with autoplay & mute if requested
  const processedEmbedUrl = useMemo(() => {
    if (!isEmbed) return null;
    try {
      const url = new URL(embedUrl);
      // Only add params if not already present
      if (autoPlay && !url.searchParams.has('autoplay')) url.searchParams.set('autoplay', '1');
      if (muted && !url.searchParams.has('mute')) url.searchParams.set('mute', '1');
      if (!url.searchParams.has('playsinline')) url.searchParams.set('playsinline', '1');
      // Helpful for smoother start on some providers
      if (!url.searchParams.has('rel') && /youtube/i.test(url.hostname)) url.searchParams.set('rel', '0');
      // Suppress common player chrome when possible
      if (/youtube/i.test(url.hostname)) {
        if (!url.searchParams.has('controls')) url.searchParams.set('controls', '0');
        if (!url.searchParams.has('modestbranding')) url.searchParams.set('modestbranding', '1');
        if (!url.searchParams.has('showinfo')) url.searchParams.set('showinfo', '0');
        if (!url.searchParams.has('iv_load_policy')) url.searchParams.set('iv_load_policy', '3');
        if (!url.searchParams.has('disablekb')) url.searchParams.set('disablekb', '1');
      }
      return url.toString();
    } catch {
      return embedUrl; // fallback to original if parsing fails
    }
  }, [embedUrl, isEmbed, autoPlay, muted]);

  const videoRef = useRef(null);

  // Programmatic play attempt for browsers that block attribute-only autoplay until play() is called.
  useEffect(() => {
    if (isEmbed) return; // iframe handled via URL params
    if (!autoPlay) return;
    const el = videoRef.current;
    if (!el) return;
    const attemptPlay = () => {
      const p = el.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // If it fails (rare with muted), retry once shortly after.
          setTimeout(() => {
            const p2 = el.play();
            if (p2 && typeof p2.then === 'function') {
              p2.catch(() => {/* give up silently */});
            }
          }, 400);
        });
      }
    };
    // If metadata already loaded, play immediately; else wait
    if (el.readyState >= 2) {
      attemptPlay();
    } else {
      const onCanPlay = () => {
        attemptPlay();
      };
      el.addEventListener('canplay', onCanPlay, { once: true });
      return () => el.removeEventListener('canplay', onCanPlay);
    }
  }, [isEmbed, autoPlay, src]);

  return (
    <section className="relative bg-white py-16" aria-labelledby="video-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-8">
          <h2 id="video-heading" className="text-3xl sm:text-4xl font-extrabold text-green-600 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        <div className="relative group rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200 bg-black">
          {/* 16:9 aspect ratio wrapper */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {isEmbed ? (
              <iframe
                src={processedEmbedUrl || embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            ) : (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={src}
                poster={poster}
                ref={videoRef}
                {...(autoPlay ? { autoPlay: true } : {})}
                {...(loop ? { loop: true } : {})}
                {...(muted ? { muted: true } : {})}
                // Intentionally omitting native controls. To restore, pass controls={true} when using component.
                {...(controls ? { controls: true } : {})}
                preload="auto"
                playsInline
              >
                Sorry, your browser does not support embedded videos.
              </video>
            )}
            {/* Overlay gradient & play hint (for non-autoplay) */}
            {!isEmbed && !autoPlay && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span>High-Intensity • Low Impact • Certified Trainers</span>
          <span className="hidden sm:inline-block">|</span>
          <span>Real Client Sessions</span>
        </div>
      </div>
    </section>
  );
}
