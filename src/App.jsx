import { HeroSectionDemo } from "@/components/HeroSection";
import { FeatureStepsDemo } from "@/components/FeatureSteps";
import { Feature } from "@/components/ui/feature-with-image";
import { TestimonialsDemo } from "./components/TestimonialsDemo";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { CTADemo } from "@/components/CTADemo";

function App() {
  return (
    <div className="px-10">
      <HeroSectionDemo />
      <FeatureStepsDemo />
      <Feature />
      <TestimonialsDemo />
      <ThreeDPhotoCarousel />
      <CTADemo />
    </div>
  );
}

export default App;
