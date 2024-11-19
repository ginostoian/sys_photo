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
        <Hero content={config.content.homepage.hero} />
        <ClientLogos />
        <ServiceList />
        <Testimonial />
        <Features />
        <HowWeWork />
        <AboutUs />
        <Testimonials11 />
        {/* <Pricing /> */}
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
