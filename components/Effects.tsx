"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global, site-wide micro-interactions:
 *  - scroll reveal for `.reveal` elements
 *  - soft cursor glow
 *  - magnetic buttons (`.magnetic`)
 *  - 3D tilt cards (`.tilt`)
 * Everything respects prefers-reduced-motion.
 */
export default function Effects() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.setProperty("--d", `${(i % 6) * 70}ms`);
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return () => cleanups.forEach((c) => c());
    }

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return () => cleanups.forEach((c) => c());

    // Cursor glow
    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    let gx = 0, gy = 0, tx = 0, ty = 0, raf = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      if (glow) glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    cleanups.push(() => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    });

    // Magnetic buttons
    document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      };
      const leave = () => (el.style.transform = "");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    });

    // Tilt cards + spotlight
    document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        el.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * 5}deg) rotateY(${(px - 0.5) * 6}deg)`;
      };
      const leave = () => (el.style.transform = "");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return (
    <>
      <svg className="grain" aria-hidden="true">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}
