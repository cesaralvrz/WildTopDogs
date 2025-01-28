import { Testimonial } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "María",
    role: "Product Manager",
    company: "Amazun",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial: "La calidad del arnés es buenísima. Envío rápido y muy buen empaquetado. Sin duda lo estoy recomendando a mis amigos con perros. Muchas gracias por el buen servicio y el productazo."
  },
  {
    name: "Carmen Mellado Valero",
    role: "Software Engineer",
    company: "Goggle",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=john",
    testimonial: "¡Calidad, comodidad y resistencia inigualables! Llevamos desde los inicios con correas, arneses y collares Wildtopdogs... NO CAMBIAMOS NI LOCOS! Nos Dan una seguridad infinita a demás de ser super cómodos para nuestros perretes. Son extremadamente resistentes así que los RECOMENDAMOS AL 100%!"
  },
  {
    name: "Tamara",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial: "Un cachorro Gran Danés y su arnés. He comprado un arnés de la gama Bornwild y me ha sorprendido muchísimo la calidad, es maravilloso, súper resistente, acolchadito para la piel de nuestros peluditos. Un 10 y sin duda volveré a repetir"
  },
  {
    name: "Nerea",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial: "Compra satisfactoria. Muy buena calidad. La calidad de los productos es muy buena. El arnés con doble hebilla va genial, porque mi perra tira mucho y desde que utilizo uno de estos arneses, enganchando la correa en el pecho, ha reducido la fuerza con la que tiraba. Me gusta mucho el cierre del mosquetón de la correa, ya que asegura que no se abra y disminuye las posibilidades de que se escape."
  },
  {
    name: "Silvia",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial: "Excelentes !!! Un 10 se queda corto, son mi tienda de confianza: Respondieron a todas mis dudas, compré una correa que es mi nueva mejor amiga, súper ligera, agradable al tacto, fuerte y con un mosquetón de seguridad. La enviaron rapidísimo aún estando en fechas navideñas que son complicadas para el transporte. Repetiré con ellos, sin duda."
  },
  {
    name: "Antonio",
    role: "UX Designer",
    company: "Microsift",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial: "El arnés es de buena calidad. Ligero, resistente y se adapta perfectamente a nuestro perro. Fueron muy amables al enseñarnos como usar la apertura para el cuello."
  },
]

function TestimonialsDemo() {
  return (
    <div className="container py-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export { TestimonialsDemo }