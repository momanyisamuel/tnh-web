import { FC, JSX } from "react";
import { Link } from "react-router";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  active: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  active,
}) => {
  return (
    <Link to={link} className="w-full">
      <div
        className={`md:flex items-center gap-2  p-6 py-10 rounded-lg transition duration-300 hover:bg-orange-200 hover:shadow-md cursor-pointer w-full  ${
          active ? "bg-orange-200" : "bg-background"
        }`}
      >
        <div className="flex items-center  w-[5%]">{icon}</div>
        <div className="flex items-center  w-[50%]">
          <h2 className="text-2xl md:text-3xl font-serif  text-red-900">
            {title}
          </h2>
        </div>
        <div className="flex items-center  w-full">
          <p className="text-base text-gray-700 mt-1 mx-12 w-full">
            {description}
          </p>
        </div>
      </div>
      {!active && <hr className="border-gray-300" />}
    </Link>
  );
};

export default ServiceCard;
