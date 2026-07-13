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
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

      <Container className="relative">
        <div className="glass-panel-strong mx-auto max-w-2xl rounded-[28px] px-8 py-12 text-center shadow-xl shadow-primary/10 md:px-14 md:py-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {newsletter.description}
          </p>
          {submitted ? (
            <p className="mt-10 text-sm font-medium text-primary">
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
                className="h-12 flex-1 rounded-xl border-primary/15 bg-white/70"
              />
              <Button type="submit" size="lg" className="shrink-0">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
