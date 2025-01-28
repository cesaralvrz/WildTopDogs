import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="bg-muted rounded-md w-full h-full flex-1">
            <img
              src="/pack.jpeg"
              alt="Pack Premium de Arnés y Correa para Perros"
              className="object-cover rounded-md w-full h-full"
            />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
            <div>
              <Badge>Pack Premium de Arnés + Correa para Perros</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-md font-regular text-left">
                Comodidad y Seguridad sin Complicaciones
              </h2>
              <p className="text-lg max-w-xl lg:max-w-md leading-relaxed tracking-tight text-muted-foreground text-left">
                Nuestro Pack Premium de Arnés y Correa está diseñado para resolver los problemas más comunes que hemos analizado que tienen nuestros clientes.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Ajuste perfecto y sin rozaduras</li>
                <li>Máxima seguridad</li>
                <li>Durabilidad garantizada</li>
                <li>Fácil de usar</li>
                <li>Comodidad para ambos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
