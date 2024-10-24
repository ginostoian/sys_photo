import React from "react";
import Link from "next/link";

import PhotoMasonry from "./PhotoMasonry";

const Service = ({
  title,
  subtitle,
  order = undefined,
  background = false,
  photos,
}) => {
  return (
    <section className={`${background ? "bg-base-200" : ""}`}>
      <div className="max-w-[85%] mx-auto flex flex-col lg:flex-row gap-4 order-1 py-10">
        <div className="w-full flex flex-col gap-6 justify-center lg:w-1/2  lg:text-left">
          <h2 className="text-5xl md:text-6xl font-bold">{title}</h2>
          <p className="text-lg">{subtitle}</p>
          <Link
            href="#"
            className="btn btn-primary rounded-xl w-max lg:mx-0 md:text-lg"
          >
            Descoperă mai multe
          </Link>
        </div>
        <div className={`${order ? "lg:order-first" : "order-last"}`}>
          <PhotoMasonry photos={photos} />
        </div>
      </div>
    </section>
  );
};

export default Service;
