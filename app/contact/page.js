import { Suspense } from "react";

import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import Testimonial from "@/components/Testimonials1";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import HowWeWork from "@/components/HowWeWork";
import Testimonials11 from "@/components/Testimonials11";
import HeroV2 from "@/components/HeroV2";
import config from "@/config";

export default function Page() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <HeroV2
          title="Suntem aici pentru ati raspunde la"
          titleHighlight=" orice intrebare"
          subtitle="Vrem sa discutam pentru a raspunde tuturor intrebarilor tale"
        />
        <ClientLogos />
        <Testimonial />
        <Features />
        <HowWeWork />
        <AboutUs />
        <Testimonials11 />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
