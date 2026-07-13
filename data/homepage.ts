import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "The New Standard For Everyday Shopping.",
    description:
      "Discover premium products across every category with a faster, cleaner and more enjoyable shopping experience.",
    ctaText: "Shop Collection",
    ctaLink: "/shop",
    secondaryCtaText: "Discover New Arrivals",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Fast Delivery",
    description: "Free shipping on orders over $75. Most orders arrive in 3–5 business days.",
  },
  {
    id: "2",
    icon: "star",
    title: "Premium Products",
    description: "Every product is carefully selected for design, performance, and lasting value.",
  },
  {
    id: "3",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment details are protected with industry-standard encryption.",
  },
  {
    id: "4",
    icon: "rotate",
    title: "Easy Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
];

export const featuredCollections = [
  {
    id: "1",
    title: "Smart Living",
    subtitle: "Connected tech that simplifies your routine",
    href: "/categories/electronics",
    image: "/categories/electronics.jpg",
  },
  {
    id: "2",
    title: "Home Refresh",
    subtitle: "Refined tools for modern spaces",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
  },
  {
    id: "3",
    title: "Daily Essentials",
    subtitle: "Beauty, wellness, and everyday rituals",
    href: "/categories/beauty",
    image: "/categories/beauty.jpg",
  },
  {
    id: "4",
    title: "Work & Play",
    subtitle: "Gear for desks, workouts, and downtime",
    href: "/categories/office-supplies",
    image: "/categories/office-supplies.jpg",
  },
];

export const floatingPromos = [
  {
    id: "1",
    title: "Weekend Deals",
    subtitle: "Limited-time savings on bestsellers and new drops.",
    href: "/shop?sort=sale",
    image: "/banners/promo-weekend.jpg",
    cta: "Shop Deals",
  },
  {
    id: "2",
    title: "Editor's Picks",
    subtitle: "Curated favorites chosen for quality and design.",
    href: "/shop?sort=featured",
    image: "/banners/promo-editors.jpg",
    cta: "View Picks",
  },
  {
    id: "3",
    title: "Trending Now",
    subtitle: "What shoppers are loving this season.",
    href: "/best-sellers",
    image: "/banners/promo-trending.jpg",
    cta: "See Trends",
  },
];

export const editorialBanner = {
  title: "Designed Around Modern Living.",
  description:
    "Explore products that simplify work, home and everyday life.",
  ctaText: "Browse Products",
  ctaLink: "/shop",
  image: "/banners/lifestyle.jpg",
};

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "noise-cancelling-headphones",
  "compact-espresso-maker",
  "smart-body-scale",
  "air-fryer",
  "gaming-headset",
  "silk-pillowcase-duo",
] as const;

export const homepageTrendingSlugs = [
  "noise-cancelling-headphones",
  "modular-desk-organizer",
  "aluminum-laptop-stand",
  "linen-duvet-cover",
  "ceramic-pour-over-set",
  "yoga-mat",
  "bluetooth-speaker",
  "ambient-desk-diffuser",
] as const;

export const homepageBestsellerSlugs = [
  "wireless-earbuds",
  "matte-cookware-set",
  "electric-kettle",
  "travel-weekender-bag",
  "gaming-headset",
  "bath-towel-set",
  "aluminum-laptop-stand",
  "dog-bed",
] as const;

export const homepageFeaturedSlugs = [
  "noise-cancelling-headphones",
  "ceramic-pour-over-set",
  "silk-pillowcase-duo",
  "modular-desk-organizer",
  "compact-espresso-maker",
  "linen-duvet-cover",
  "smart-body-scale",
  "wireless-earbuds",
  "travel-weekender-bag",
  "yoga-mat",
] as const;

export const homepageNewArrivalSlugs = [
  "noise-cancelling-headphones",
  "ceramic-pour-over-set",
  "silk-pillowcase-duo",
  "modular-desk-organizer",
  "compact-espresso-maker",
  "ambient-desk-diffuser",
  "linen-duvet-cover",
  "smart-body-scale",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Premium Without Friction",
  description:
    "Thoughtful design. Premium materials. Products chosen to elevate everyday living.",
  buttonText: "Browse Products",
  buttonLink: "/shop",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Hand-selected pieces across electronics, home, beauty, and more — curated for modern living.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "electronics",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const newsletter = {
  title: "Join Thousands Of Happy Customers",
  description:
    "Get exclusive launches, weekly deals and seasonal collections delivered directly to your inbox.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const aboutSection = {
  title: "Built For Modern Life.",
  description:
    "DLKS E-COMM LLC exists for people who want premium products and everyday essentials to work together. We curate electronics, home tools, beauty, fashion, and lifestyle pieces that balance performance with elegance.",
  checklist: [
    "Premium curation across every category",
    "Quality-first selection over endless inventory",
    "Products designed for clarity, comfort, and style",
    "A shopping experience built around seamless delivery",
  ],
  buttonText: "Shop Now",
  buttonLink: "/shop",
  image: "/banners/about.jpg",
};
