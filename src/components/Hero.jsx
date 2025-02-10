const Hero = () => {
  return (
    <div className="2xl:w-[60%] xl:w-[70%] lg:w-[80%] md:w-[60%] w-[90%] gap-[40px] flex flex-col justify-center">
      <div className="w-[100%] sm:w-[80%]">
        <p className="font-semibold text-5xl leading-[45px]">
          DISCOVER IT ALL, FROM CLOTHING TO JEWELRY AND MORE
        </p>
      </div>
      <div className="sm:w-[60%] w-[100%]">
        <p className="font-bold leading-[20px] text-gray-500">
          Shop-Zone is like having your favorite store in your pocket and on the
          internet. It brings the world of online shopping right to your
          fingertips, making it easier than ever to find and purchase the things
          you love.
        </p>
      </div>
    </div>
  );
};

export default Hero;