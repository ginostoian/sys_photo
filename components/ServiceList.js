import Image from "next/image";

const ServiceList = () => {
  return (
    <section className="bg-base-200">
      {/* // <!-- Card Grid --> */}
      <div className=" max-w-[95%] mx-auto py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* <!-- Card --> */}
        <a
          className="group flex flex-col focus:outline-none"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <Image
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/wedding1.webp"
              alt="Blog Image"
              width={1000}
              height={1000}
            />
          </div>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Wedding Photography
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Suntem alaturi de tine in ziua cea mai importanta din viata ta. Ne
              asiguram ca toate momentele speciale sunt memorate intr-un mod
              inedit.
            </p>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a
          className="group flex flex-col focus:outline-none"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <Image
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/wedding1.webp"
              alt="Blog Image"
              width={1000}
              height={1000}
            />
          </div>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Nike React
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Rewriting sports playbook for billions of athletes
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a
          className="group flex flex-col focus:outline-none"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <Image
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/wedding1.webp"
              alt="Blog Image"
              width={1000}
              height={1000}
            />
          </div>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Day Spa
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Designing a new cocktail can
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a
          className="group flex flex-col focus:outline-none"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <Image
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/images/wedding2.webp"
              alt="Blog Image"
              width={1000}
              height={1000}
            />
          </div>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Diamond Dynamics
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              From cutting-edge equipment to stylish apparel
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Sports Gear
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Equipment
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Discovery
              </span>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
      </div>
      {/* // End of card grid */}
    </section>
  );
};

export default ServiceList;
