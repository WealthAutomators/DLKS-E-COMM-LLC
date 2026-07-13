import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "The Future Of Everyday Shopping.",
    description:
      "Premium electronics, home essentials, lifestyle products and everyday favorites curated into one seamless shopping experience.",
    ctaText: "Explore Products",
    ctaLink: "/shop",
    secondaryCtaText: "Latest Deals",
    secondaryCtaLink: "/shop?sort=sale",
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
    title: "Home Essentials",
    subtitle: "Refined tools for modern spaces",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
  },
  {
    id: "3",
    title: "Work & Office",
    subtitle: "Gear that keeps your workspace sharp",
    href: "/categories/office-supplies",
    image: "/categories/office-supplies.jpg",
  },
  {
    id: "4",
    title: "Everyday Favorites",
    subtitle: "Lifestyle picks for daily rituals",
    href: "/categories/fashion-accessories",
    image: "/categories/fashion-accessories.jpg",
  },
];

export const editorialBanner = {
  title: "Shopping Powered By Innovation.",
  description:
    "Discover products carefully selected to simplify work, home and everyday life.",
  ctaText: "Browse Collection",
  ctaLink: "/categories",
  image: "/banners/featured.jpg",
};

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "magnetic-wireless-charger",
  "portable-ssd-drive",
  "air-fryer",
  "fitness-tracker-band",
  "gaming-headset",
  "ultra-thin-power-bank",
] as const;

export const homepageTrendingSlugs = [
  "magnetic-wireless-charger",
  "led-light-strip-kit",
  "aluminum-laptop-stand",
  "robot-vacuum-mini",
  "portable-blender",
  "yoga-mat",
  "bluetooth-speaker",
  "cold-brew-maker",
] as const;

export const homepageBestsellerSlugs = [
  "wireless-earbuds",
  "robot-vacuum-mini",
  "electric-kettle",
  "fitness-tracker-band",
  "gaming-headset",
  "bath-towel-set",
  "aluminum-laptop-stand",
  "dog-bed",
] as const;

export const homepageFeaturedSlugs = [
  "magnetic-wireless-charger",
  "robot-vacuum-mini",
  "portable-ssd-drive",
  "aluminum-laptop-stand",
  "led-light-strip-kit",
  "fitness-tracker-band",
  "cold-brew-maker",
  "wireless-earbuds",
  "ultra-thin-power-bank",
  "yoga-mat",
] as const;

export const homepageNewArrivalSlugs = [
  "magnetic-wireless-charger",
  "portable-ssd-drive",
  "robot-vacuum-mini",
  "fitness-tracker-band",
  "led-light-strip-kit",
  "cold-brew-maker",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Innovation Without Friction",
  description:
    "Premium materials. Thoughtful design. Products chosen to streamline everyday living.",
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
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const newsletter = {
  title: "Stay Ahead.",
  description:
    "Receive exclusive launches, seasonal deals and new arrivals before everyone else.",
  placeholder: "Enter your email address",
  buttonText: "Join Now",
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
    "VETX INDUSTRIES LLC exists for people who want technology and everyday essentials to work together. We curate electronics, home tools, beauty, fashion, and lifestyle pieces that balance performance with simplicity.",
  checklist: [
    "Technology-forward across every category",
    "Quality-first selection over endless inventory",
    "Products designed for speed, clarity, and comfort",
    "A shopping experience built around innovation",
  ],
  buttonText: "Shop Now",
  buttonLink: "/shop",
  image: "/banners/about.jpg",
};
