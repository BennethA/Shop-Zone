/* eslint-disable react/prop-types */

const Services = ({ services }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {services.map((service) => (
        <div key={service.id}>
          <p className="border-[2px] rounded-md px-1 font-semibold text-center border-black">
            {service.name}
          </p>
          <p className="text-[#363636]">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
