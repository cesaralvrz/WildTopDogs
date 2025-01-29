import { FeatureSteps } from "@/components/ui/feature-section"
import { Button } from "@/components/ui/button"

const features = [
  { 
    step: 'Step 1', 
    title: 'Arnés BornWild',
    content: 'Diseñado para perros aventureros que les guste disfrutar de todo tipo de actividades al aire libre o deporte y que necesiten un arnés todoterreno que esté a su nivel.', 
    image: '/arnes.jpeg' 
  },
  { 
    step: 'Step 2',
    title: 'Correa DualWild ',
    content: 'Correa fabricada de nylon y acolchada con neopreno para darle comodidad y evitar quemaduras en vuestra mano manteniendo la seguridad en los paseos.',
    image: '/correa.jpeg'
  },
]

export function FeatureStepsDemo() {
  return (
      <div
        id="pack-section"
        className="mt-36"
      >
        <FeatureSteps
          features={features}
          title="Nuestro Pack: Arnés + Correa"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
        <div className="flex justify-center mt-8">
          <Button 
            size="lg" 
            className="animate-appear delay-100"
            asChild
          >
            <a href="https://wildtopdogs.com/">Consíguelo Ya</a>
          </Button>
        </div>
      </div>
  )
}