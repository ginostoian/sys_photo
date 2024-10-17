import Service from "./Service";

const ServiceList = () => {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Serviciile noastre
      </h2>
      <Service background={true} />
      <Service
        background={false}
        order={1}
      />
      <Service background={true} />
      <Service
        background={false}
        order={1}
      />
    </section>
  );
};

export default ServiceList;
