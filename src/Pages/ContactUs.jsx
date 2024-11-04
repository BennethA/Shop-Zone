import { useContext } from "react";
import Title from "../components/Title";
import DataContext from "../Context/DataContext";

export default function ContactUs() {
  const { changeContrast, socials } = useContext(DataContext);
  
  return (
    <div
      className={`pt-[55px] pb-5 gap-5 flex flex-col bg-center bg-cover mb-5 ${
        changeContrast
          ? "text-white"
          : "bg-[url(../public/contact.png)]"
      }`}
    >
      <Title text1="CONTACT" text2="US" />
      <div className="flex flex-wrap justify-between">
        <div
          className={`flex flex-col justify-center items-center gap-3 w-full sm:w-[45%] p-1 rounded-lg text-lg ${
            !changeContrast && "text-black"
          }`}
        >
          <div>
            <p className="font-bold">Our Store</p>
            <div
              className={`${!changeContrast ? "text-black" : "text-gray-300"}`}
            >
              <p>2542 William Street</p>
              <p>Pokuasi, Accra, Ghana</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Reach Us</p>
            <div
              className={`flex flex-col gap-2 items-start justify-center ${
                !changeContrast ? "text-black" : "text-gray-300"
              }`}
            >
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="flex transition-all duration-200 hover:opacity-80 items-center gap-1 hover:text-blue-700"
                >
                  {social.name}
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[45%] sm:pt-0 pt-3 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127056.97423159608!2d-0.17694719999997358!3d5.636096000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1713753274853!5m2!1sen!2sgh"
            loading="lazy"
            className="h-[300px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
