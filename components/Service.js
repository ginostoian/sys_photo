import React from "react";
import Link from "next/link";

import PhotoMasonry from "./PhotoMasonry";

const Service = ({ order = undefined, background = false }) => {
  return (
    <section className={`${background ? "bg-base-200" : ""}`}>
      <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row gap-4 order-1">
        <div className="w-full flex flex-col gap-6 justify-center lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold">
            Fotografie de nuntă!
          </h2>
          <p className="text-lg">
            Mă inspiră momentele reale care fac ca ziua nunții să fie fabuloasă.
            Este o onoare specială pentru mine ca fotograf de nuntă din
            București să documentez un eveniment așa important precum o zi de
            nuntă. Mă concentrez pe conexiunea dintre tine și persoana iubită.
          </p>
          <Link
            href="#"
            className="btn btn-primary rounded-xl w-max mx-auto lg:mx-0 md:text-lg"
          >
            Descoperă mai multe
          </Link>
        </div>
        <div className={`${order ? "order-first" : "order-last"}`}>
          <PhotoMasonry />
        </div>
      </div>
    </section>
  );
};

export default Service;
