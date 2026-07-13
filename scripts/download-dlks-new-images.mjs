/**
 * Downloads Unsplash images for NEW DLKS products + promo/lifestyle banners only.
 * Reads UNSPLASH_ACCESS_KEY from env, .env.unsplash, or .env.local — never hardcodes the key.
 *
 * Usage: node scripts/download-dlks-new-images.mjs
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

function loadEnvLocal() {
  if (process.env.UNSPLASH_ACCESS_KEY) return;
  for (const name of [".env.unsplash", ".env.local"]) {
    const envPath = path.join(ROOT, name);
    if (!fs.existsSync(envPath)) continue;
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      const match = line.match(/^UNSPLASH_ACCESS_KEY=(.+)$/);
      if (match) {
        process.env.UNSPLASH_ACCESS_KEY = match[1].trim();
        return;
      }
    }
  }
}

const NEW_PRODUCTS = [
  { slug: "noise-cancelling-headphones", query: "noise cancelling over ear headphones product" },
  { slug: "ceramic-pour-over-set", query: "ceramic pour over coffee dripper" },
  { slug: "silk-pillowcase-duo", query: "silk pillowcase luxury bedding" },
  { slug: "modular-desk-organizer", query: "minimal desk organizer aluminum" },
  { slug: "compact-espresso-maker", query: "compact espresso machine kitchen" },
  { slug: "linen-duvet-cover", query: "linen duvet cover bedroom" },
  { slug: "matte-cookware-set", query: "matte nonstick cookware set" },
  { slug: "travel-weekender-bag", query: "travel weekender bag navy" },
  { slug: "smart-body-scale", query: "smart bathroom scale glass" },
  { slug: "ambient-desk-diffuser", query: "essential oil diffuser modern desk" },
  { slug: "aquascape-desk-garden", query: "desktop aquascape plant terrarium" },
];

const BANNER_TARGETS = [
  { file: "banners/promo-weekend.jpg", query: "shopping deals lifestyle interior", width: 1400 },
  { file: "banners/promo-editors.jpg", query: "premium product styling flatlay", width: 1400 },
  { file: "banners/promo-trending.jpg", query: "modern living room lifestyle", width: 1400 },
  { file: "banners/lifestyle.jpg", query: "modern luxury living room bright", width: 2000 },
  { file: "hero/hero-1.jpg", query: "premium modern lifestyle shopping elegant", width: 2000 },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function searchPhotos(accessKey, query, perPage = 3) {
  const params = new URLSearchParams({
    query,
    per_page: String(perPage),
    orientation: "squarish",
    content_filter: "high",
  });
  const res = await fetch(`https://api.unsplash.com/search/photos?${params}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Search failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  return data.results || [];
}

async function downloadImage(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "DLKSECommLLC/1.0 (image-setup)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error("File too small");
  return buf;
}

async function saveFromPhoto(photo, dest, width) {
  const url = `${photo.urls.regular}&w=${width}&h=${Math.round(width * 1.25)}&fit=crop&q=85`;
  const buf = await downloadImage(url);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

async function main() {
  loadEnvLocal();
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    console.error("Missing UNSPLASH_ACCESS_KEY. Set it in .env.unsplash (gitignored).");
    process.exit(1);
  }

  const usedPhotoIds = new Set();
  let success = 0;
  let failed = 0;

  console.log("=== New product images ===\n");
  for (let i = 0; i < NEW_PRODUCTS.length; i++) {
    const product = NEW_PRODUCTS[i];
    process.stdout.write(`[${i + 1}/${NEW_PRODUCTS.length}] ${product.slug}... `);
    try {
      const results = await searchPhotos(accessKey, product.query, 4);
      const fresh = results.filter((r) => r?.id && !usedPhotoIds.has(r.id));
      if (fresh.length < 2) throw new Error(`Only ${fresh.length} fresh photos`);

      for (let j = 0; j < 2; j++) {
        const photo = fresh[j];
        const dest = path.join(PUBLIC, "products", `${product.slug}-${j + 1}.jpg`);
        await saveFromPhoto(photo, dest, 900);
        usedPhotoIds.add(photo.id);
      }
      success++;
      console.log("✓");
    } catch (err) {
      failed++;
      console.log(`✗ ${err.message}`);
    }
    await sleep(1200);
  }

  console.log("\n=== Banners / hero ===\n");
  for (const target of BANNER_TARGETS) {
    process.stdout.write(`${target.file}... `);
    try {
      const results = await searchPhotos(accessKey, target.query, 4);
      const fresh = results.filter((r) => r?.id && !usedPhotoIds.has(r.id));
      if (!fresh.length) throw new Error("No photos");
      const photo = fresh[0];
      const dest = path.join(PUBLIC, target.file);
      const url = `${photo.urls.regular}&w=${target.width}&h=${Math.round(target.width * 0.65)}&fit=crop&q=85`;
      const buf = await downloadImage(url);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, buf);
      usedPhotoIds.add(photo.id);
      success++;
      console.log("✓");
    } catch (err) {
      failed++;
      console.log(`✗ ${err.message}`);
    }
    await sleep(1200);
  }

  console.log(`\nDone: ${success} ok, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
