import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollections } from "@/components/homepage/featured-collections";
import { TrendingProducts } from "@/components/homepage/trending-products";
import { EditorialBanner } from "@/components/homepage/editorial-banner";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { BestSellers } from "@/components/homepage/best-sellers";
import { FeaturesRow } from "@/components/homepage/features-row";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <TrendingProducts />
      <EditorialBanner />
      <DealsOfTheDay />
      <CategoryCarousel />
      <BestSellers />
      <FeaturesRow />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
