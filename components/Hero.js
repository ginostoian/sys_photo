"use client";

import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
// import config from "@/config";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = ({ content }) => {
  const images = content.images;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="max-w-[95%] sm:max-w-[90%] mx-auto bg-slate-200 rounded-3xl mt-10 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-20 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center  lg:text-left lg:items-start">
        <h1 className="font-extrabold text-6xl lg:text-7xl tracking-tight md:-mb-4">
          {content.title}
        </h1>
        <p className="md:text-xl text-lg opacity-80 leading-relaxed">
          {content.subtitle}
        </p>
        <button className="text-xl btn btn-primary btn-wide rounded-xl">
          <Link href={content.ctaURL}>{content.ctaText}</Link>
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        {/* <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        /> */}
        <Image
          src={images[currentImageIndex]} // Dynamic image source
          alt={`Wedding photo ${currentImageIndex + 1}`}
          width={500}
          height={500}
          className="object-cover rounded-xl shadow-md w-full"
        />
      </div>
    </section>
  );
};

export default Hero;

// Hero.js
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen bg-[#f7f7f7] flex items-center justify-between p-10">
//       <div className="w-1/2 grid grid-cols-2 gap-4">
//         {/* Images */}
//         <div className="relative">
//           <Image
//             src="/images/wedding1.jpg" // Replace with your image paths
//             alt="Wedding photo 1"
//             width={300}
//             height={400}
//             className="object-cover rounded-lg shadow-md"
//           />
//         </div>
//         <div className="relative">
//           <Image
//             src="/images/wedding2.jpg"
//             alt="Wedding photo 2"
//             width={300}
//             height={400}
//             className="object-cover rounded-lg shadow-md"
//           />
//         </div>
//         <div className="relative col-span-2">
//           <Image
//             src="/images/wedding3.jpg"
//             alt="Wedding photo 3"
//             width={300}
//             height={200}
//             className="object-cover rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Title Section */}
//       <div className="w-1/2 flex items-center justify-center">
//         <h1 className="text-6xl font-serif text-gray-900 leading-tight">
//           FOTOGRAF <br /> DE NUNTĂ
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Hero;
