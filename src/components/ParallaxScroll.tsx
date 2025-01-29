"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

export function ParallaxScroll() {
  return <ParallaxScrollSecond images={images} />;
}

const images = [
  "/dog1.jpeg",
  "/dog2.jpeg",
  "/dog7.jpeg",
  "/dog4.jpeg",
  "/dog3.jpeg",
  "/dog5.jpeg",
  "/dog6.jpeg",
  "/dog1.jpeg",
];
