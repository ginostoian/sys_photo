import Service from "./Service";

const ServiceList = () => {
  const services = [
    {
      title: "Fotografie de nuntă",
      subtitle:
        "Mă inspiră momentele reale care fac ca ziua nunții să fie fabuloasă. Este o onoare specială pentru mine ca fotograf de nuntă din București să documentez un eveniment așa important precum o zi de nuntă. Mă concentrez pe conexiunea dintre tine și persoana iubită.",
      background: true,
      order: undefined,
      photos: [
        "/images/wedding1.webp",
        "/images/wedding2.webp",
        "/images/wedding3.webp",
        "/images/wedding2.webp",
        "/images/wedding1.webp",
      ],
    },
    {
      title: "Fotografie corporate",
      subtitle:
        "Mă inspiră momentele reale care fac ca ziua nunții să fie fabuloasă. Este o onoare specială pentru mine ca fotograf de nuntă din București să documentez un eveniment așa important precum o zi de nuntă. Mă concentrez pe conexiunea dintre tine și persoana iubită.",
      background: false,
      order: 1,
      photos: [
        "/images/wedding1.webp",
        "/images/wedding2.webp",
        "/images/wedding3.webp",
        "/images/wedding2.webp",
        "/images/wedding1.webp",
      ],
    },
    {
      title: "Sedinte foto de sezon",
      subtitle:
        "Mă inspiră momentele reale care fac ca ziua nunții să fie fabuloasă. Este o onoare specială pentru mine ca fotograf de nuntă din București să documentez un eveniment așa important precum o zi de nuntă. Mă concentrez pe conexiunea dintre tine și persoana iubită.",
      background: true,
      order: undefined,
      photos: [
        "/images/wedding1.webp",
        "/images/wedding2.webp",
        "/images/wedding3.webp",
        "/images/wedding2.webp",
        "/images/wedding1.webp",
      ],
    },
    {
      title: "Fotografie de produs",
      subtitle:
        "Mă inspiră momentele reale care fac ca ziua nunții să fie fabuloasă. Este o onoare specială pentru mine ca fotograf de nuntă din București să documentez un eveniment așa important precum o zi de nuntă. Mă concentrez pe conexiunea dintre tine și persoana iubită.",
      background: false,
      order: 1,
      photos: [
        "/images/wedding1.webp",
        "/images/wedding2.webp",
        "/images/wedding3.webp",
        "/images/wedding2.webp",
        "/images/wedding1.webp",
      ],
    },
  ];
  return (
    <section className="py-10">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Serviciile noastre
      </h2>
      {services.map((service, i) => {
        return (
          <Service
            key={i}
            title={service.title}
            subtitle={service.subtitle}
            background={service.background}
            order={service.order}
            photos={service.photos}
          />
        );
      })}
    </section>
  );
};

export default ServiceList;
