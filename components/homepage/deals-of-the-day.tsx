"use client";

import { dealsEndTime, homepageDealsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function DealsOfTheDay() {
  const deals = getProductsBySlugs(homepageDealsSlugs);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_55%)]" />
      <Container className="relative">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center rounded-lg bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Flash Deals
            </span>
            <SectionHeading
              title="Limited-Time Offers"
              subtitle="Floating savings on curated tech and lifestyle essentials."
              className="mb-0"
            />
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white/70 px-4 py-3 backdrop-blur-md">
            <span className="text-sm font-medium text-muted-foreground">Ends in</span>
            <CountdownTimer endTime={dealsEndTime} />
          </div>
        </div>
        <Carousel slidesToShow={4} className="px-8 [&_[data-product-card]]:shadow-lg [&_[data-product-card]]:shadow-primary/5">
          {deals.map((product) => (
            <div key={product.id} className="px-1 py-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
