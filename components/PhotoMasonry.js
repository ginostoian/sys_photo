import Image from "next/image";

const PhotoMasonry = () => {
  return (
    <div>
      <div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-12 gap-6">
          <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            <a
              class="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/images/wedding2.webp"
                  alt="Masonry Cards Image"
                  width={500}
                  height={500}
                />
              </div>
            </a>
          </div>

          <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            <a
              class="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/images/wedding1.webp"
                  alt="Masonry Cards Image"
                  width={500}
                  height={500}
                />
              </div>
            </a>
          </div>

          <div class="col-span-12 md:col-span-4">
            <a
              class="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/images/wedding3.webp"
                  alt="Masonry Cards Image"
                  width={500}
                  height={500}
                />
              </div>
            </a>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <a
              class="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/images/wedding2.webp"
                  alt="Masonry Cards Image"
                  width={500}
                  height={500}
                />
              </div>
            </a>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <a
              class="group relative block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/images/wedding1.webp"
                  alt="Masonry Cards Image"
                  width={500}
                  height={500}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoMasonry;
