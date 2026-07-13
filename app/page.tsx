import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollections } from "@/components/homepage/featured-collections";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { FloatingPromoCards } from "@/components/homepage/floating-promo-cards";
import { BestSellers } from "@/components/homepage/best-sellers";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { LifestyleBanner } from "@/components/homepage/lifestyle-banner";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <NewArrivals />
      <FloatingPromoCards />
      <BestSellers />
      <CategoryCarousel />
      <LifestyleBanner />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
