"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

export function ParallaxScroll() {
  return <ParallaxScrollSecond images={images} />;
}

const images = [
  "/dog1.jpeg",
  "/dog3.jpeg",
  "/dog8.jpeg",
  "/dog9.jpeg",
  "/dog3.jpeg",
  "/dog1.jpeg",
];
