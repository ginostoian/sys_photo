// ClientLogos.js
import Image from "next/image";

const ClientLogos = () => {
  const clientLogos = [
    "/images/logo/mega-image-logo-vertical.webp",
    "/images/logo/regina-maria-logo.webp",
    "/images/logo/spinal-care-logo.webp",
    "/images/logo/bizz-club-logo.webp",
    "/images/logo/mediclinic-logo.webp",
    "/images/logo/fsc-logo.webp",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Clienții noștri
        </h2>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-8">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-32 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
