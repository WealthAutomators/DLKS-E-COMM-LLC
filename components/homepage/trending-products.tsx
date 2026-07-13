"use client";

import { homepageTrendingSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function TrendingProducts() {
  const products = getProductsBySlugs(homepageTrendingSlugs);

  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <Container>
        <SectionHeading title="Trending Products" viewMoreLink="/shop" />
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
