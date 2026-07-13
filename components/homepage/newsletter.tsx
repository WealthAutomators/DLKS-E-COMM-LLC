"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0B1224] to-[#082F49]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(37,99,235,0.35),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(34,211,238,0.2),transparent_45%)]" />

      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {newsletter.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
            {newsletter.description}
          </p>
          {submitted ? (
            <p className="mt-10 text-sm font-medium text-accent">
              You&apos;re on the list. Welcome aboard.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-secondary/40"
              />
              <Button
                type="submit"
                size="lg"
                className="shrink-0 bg-secondary text-white hover:bg-highlight hover:text-primary"
              >
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
