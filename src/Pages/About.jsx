import Title from "../components/Title";

const About = () => {

  return (
    <main className={`pt-[55px] pb-2 gap-1 flex flex-col`}>
      <Title text1="ABOUT" text2="US" />
      <p
        className={`font-semibold text-gray-800`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        amet vero laboriosam molestias necessitatibus placeat accusamus quo
        maxime magni, inventore repellat beatae nulla labore blanditiis laborum
        quidem voluptate neque eveniet!
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <div className={`w-[400px] rounded-md p-3 bg-[#80808050]`}>
          <h1 className="flex mb-1 font-bold">Why Choose Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            quia necessitatibus perferendis ipsum perspiciatis accusamus iste
            sequi id, quibusdam facilis, eum hic sint excepturi. Enim doloremque
            molestiae earum impedit cupiditate?
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
