"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCollections() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(67,56,202,0.06),transparent_55%)]" />
      <Container className="relative">
        <SectionHeading
          title="Featured Collections"
          subtitle="Four floating edits for smarter living, home refresh, daily rituals, and work & play."
          centered
        />
        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, zIndex: 20 }}
              className={index % 2 === 1 ? "lg:mt-10" : index === 2 ? "lg:-mt-4" : ""}
              style={{ zIndex: 10 - index }}
            >
              <Link
                href={collection.href}
                className="glass-panel group relative block overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/15 lg:-mx-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="glass-panel-strong rounded-2xl p-4">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {collection.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {collection.subtitle}
                    </p>
                    <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-transform group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
