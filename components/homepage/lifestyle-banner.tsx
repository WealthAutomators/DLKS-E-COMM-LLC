"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { editorialBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LifestyleBanner() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative min-h-[420px] overflow-hidden rounded-[32px] md:min-h-[480px]"
        >
          <Image
            src={editorialBanner.image}
            alt={editorialBanner.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-primary/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8 py-16 md:px-14 md:py-20">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {editorialBanner.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                {editorialBanner.description}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-9 bg-white text-primary hover:bg-secondary hover:text-white"
              >
                <Link href={editorialBanner.ctaLink}>{editorialBanner.ctaText}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
