import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { Badge } from "@/components/ui/badge";

export function CustomerReviews() {
  return (
    <section className="bg-muted/50 py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Customer Reviews"
          subtitle="Verified shoppers on the VETX experience — fast, modern, and reliable."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel rounded-3xl p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={`/reviews/review-${((Number(t.id) - 1) % 8) + 1}.jpg`}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium tracking-wide">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <Badge variant="outline" className="border-secondary/30 text-[10px] text-secondary">
                  Verified Purchase
                </Badge>
              </div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
