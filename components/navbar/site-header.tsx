"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { leftNavLinks, rightNavLinks, navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FullscreenSearch } from "@/components/navbar/fullscreen-search";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const elevated = scrolled || mobileOpen || !isHome;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <Container className="!px-0">
          <div
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-300",
              elevated
                ? "border-border/80 bg-white/85 shadow-lg shadow-primary/5 backdrop-blur-xl"
                : "border-white/40 bg-white/45 shadow-md shadow-primary/5 backdrop-blur-xl",
              mobileOpen && "rounded-b-none sm:rounded-2xl"
            )}
          >
            <div className="relative flex h-14 items-center px-3 sm:h-16 sm:px-5 lg:px-6">
              {/* Logo */}
              <Link href="/" className="relative z-10 shrink-0">
                <Image
                  src="/logo/logo.svg"
                  alt={company.name}
                  width={220}
                  height={40}
                  priority
                  className="h-7 w-auto sm:h-8"
                />
              </Link>

              {/* Desktop menu */}
              <nav className="absolute inset-x-0 hidden items-center justify-center gap-1 lg:flex">
                {[...leftNavLinks, ...rightNavLinks].map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-[13px] font-medium tracking-wide text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary",
                      pathname === link.href && "bg-primary/5 text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Icons */}
              <div className="ml-auto flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-foreground"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search className="h-[18px] w-[18px]" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="relative h-9 w-9 text-foreground"
                >
                  <Link href="/wishlist" aria-label="Wishlist">
                    <Heart className="h-[18px] w-[18px]" />
                    {wishlist.length > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hidden h-9 w-9 text-foreground sm:inline-flex"
                >
                  <Link href="/profile" aria-label="Account">
                    <User className="h-[18px] w-[18px]" />
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="relative h-9 w-9 text-foreground"
                >
                  <Link href="/cart" aria-label="Cart">
                    <ShoppingBag className="h-[18px] w-[18px]" />
                    {itemCount > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-foreground lg:hidden"
                  onClick={() => setMobileOpen((o) => !o)}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
              <div className="border-t border-border/70 bg-white/95 px-4 py-5 backdrop-blur-xl lg:hidden">
                <ul className="space-y-1">
                  {navigationLinks.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-secondary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </header>

      <FullscreenSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Spacer so interior pages clear the floating header */}
      {!isHome && <div className="h-[76px] sm:h-[88px]" aria-hidden />}
    </>
  );
}
