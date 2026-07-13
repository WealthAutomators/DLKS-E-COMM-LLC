"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, Cpu, Gamepad2, Home, Laptop, PawPrint, Shirt, Smartphone, Sparkles, Baby, Dumbbell, HeartPulse, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const homepageCategorySlugs = [
  "electronics",
  "home-kitchen",
  "bathroom",
  "beauty",
  "sports-outdoors",
  "office-supplies",
  "fashion-accessories",
  "baby-products",
  "pet-supplies",
  "health-wellness",
  "gaming",
  "toys-games",
];

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  electronics: Smartphone,
  "home-kitchen": Utensils,
  bathroom: Home,
  beauty: Sparkles,
  "sports-outdoors": Dumbbell,
  "office-supplies": Laptop,
  "fashion-accessories": Shirt,
  "baby-products": Baby,
  "pet-supplies": PawPrint,
  "health-wellness": HeartPulse,
  gaming: Gamepad2,
  "toys-games": Cpu,
};

export function CategoryCarousel() {
  const homepageCategories = categories.filter((c) => homepageCategorySlugs.includes(c.slug));

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Product Categories"
          subtitle="Browse glass-clear departments spanning tech, home, wellness, and lifestyle."
          centered
        />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepageCategories.map((category, index) => {
            const Icon = iconMap[category.slug] || Sparkles;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="glass-panel group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:bg-white/80 hover:shadow-lg hover:shadow-secondary/10"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold tracking-tight text-primary">
                      {category.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {category.productCount} products
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-secondary" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
