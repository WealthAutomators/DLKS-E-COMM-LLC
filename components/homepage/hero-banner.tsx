"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { company } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24 sm:pt-28">
      {/* Soft radial + mesh atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(37,99,235,0.14),transparent_50%),radial-gradient(ellipse_at_80%_10%,rgba(34,211,238,0.12),transparent_45%),radial-gradient(ellipse_at_70%_80%,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-highlight/15 blur-3xl" />

      <Container className="relative grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-secondary">
            {company.tagline}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button asChild size="lg" variant="secondary" className="min-w-[160px]">
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-muted shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -12, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="absolute -bottom-4 left-4 max-w-[220px] rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:left-0 sm:bottom-8"
          >
            <p className="text-sm tracking-wide text-secondary">★★★★★</p>
            <p className="mt-1.5 text-sm font-medium leading-snug text-primary">
              Trusted by thousands of shoppers.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
