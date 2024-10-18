import { Suspense } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import ServiceList from "@/components/ServiceList";
import PhotoMasonry from "@/components/PhotoMasonry";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonials1";

export default function Page() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <ClientLogos />
        <ServiceList />
        <Testimonial />
        {/* <Pricing /> */}
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
