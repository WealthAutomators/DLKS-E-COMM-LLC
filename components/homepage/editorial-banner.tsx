"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { editorialBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function EditorialBanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-primary" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(37,99,235,0.45),transparent_55%),radial-gradient(ellipse_at_85%_30%,rgba(34,211,238,0.28),transparent_50%)]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {editorialBanner.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
            {editorialBanner.description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-9 bg-white text-primary hover:bg-secondary hover:text-white"
          >
            <Link href={editorialBanner.ctaLink}>{editorialBanner.ctaText}</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
