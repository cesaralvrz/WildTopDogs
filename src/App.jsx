import { HeroSectionDemo } from "@/components/HeroSection";
import { FeatureStepsDemo } from "@/components/FeatureSteps";
import { Feature } from "@/components/ui/feature-with-image";
import { TestimonialsDemo } from "./components/TestimonialsDemo";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { CTADemo } from "@/components/CTADemo";

function App() {
  return (
    <div>
      <nav className="flex justify-center items-center h-16 border-b bg-gray-100">
        <img src="/logo.jpeg" alt="Logo" className="h-10" />
      </nav>
      <div className="px-10">
        <HeroSectionDemo />
        <FeatureStepsDemo />
        <Feature />
        <TestimonialsDemo />
        <ThreeDPhotoCarousel />
        <CTADemo />
      </div>
    </div>
  );
}

export default App;
