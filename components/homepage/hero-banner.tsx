"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroSlides } from "@/data/homepage";
import { company } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute -left-24 top-28 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-highlight/15 blur-3xl" />

      <Container className="relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {company.tagline}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
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
              <Button asChild size="lg" variant="secondary" className="min-w-[180px]">
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Floating glass accent cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-panel absolute -right-2 top-8 z-10 hidden rounded-2xl p-3 sm:block lg:-right-6"
          >
            <div className="h-16 w-16 overflow-hidden rounded-xl bg-muted">
              <Image
                src="/products/wireless-earbuds-1.jpg"
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-muted shadow-2xl shadow-primary/15 sm:aspect-[5/6]">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-white/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -12, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel-strong absolute -bottom-4 left-4 flex max-w-[240px] items-center gap-3 rounded-2xl p-4 sm:left-0 sm:bottom-10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <Star className="h-4 w-4 fill-current" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">★ Trusted Marketplace</p>
              <p className="text-xs text-muted-foreground">Premium products, seamless delivery</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
