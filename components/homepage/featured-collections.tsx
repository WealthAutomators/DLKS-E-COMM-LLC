"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCollections() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Featured Collections"
          subtitle="Premium edits for smarter living, home comfort, focused work, and everyday favorites."
          centered
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={index % 2 === 1 ? "md:mt-14" : ""}
            >
              <Link
                href={collection.href}
                className="group relative block aspect-[16/11] overflow-hidden rounded-3xl bg-muted"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {collection.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-white/80 md:text-base">
                    {collection.subtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent transition-transform group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
