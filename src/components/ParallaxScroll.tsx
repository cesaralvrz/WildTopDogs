"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

export function ParallaxScroll() {
  return (
    <>
      {/* Desktop Parallax */}
      <div className="hidden md:block">
        <ParallaxScrollSecond images={images} />
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden w-full overflow-x-auto">
        <div className="flex gap-4 p-4 w-max">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Dog ${index + 1}`}
              className="w-72 h-72 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
}

const images = [
  "/dog1.jpeg",
  "/dog3.jpeg",
  "/dog8.jpeg",
  "/dog9.jpeg",
  "/dog3.jpeg",
  "/dog1.jpeg",
];
