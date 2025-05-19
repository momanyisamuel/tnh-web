import { FC } from "react";

interface HeadingProps {
  image_url?: string;
  title?: string;
  description?: string;
  style: "background" | "image" | "text";
}

const Heading: FC<HeadingProps> = ({
  image_url,
  title,
  description,
  style,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-[300px] bg-cover bg-center bg-no-repeat
        ${style === "background" ? `bg-red-900` : ""}
        ${style === "image" ? `bg-gray-200` : ""}
        ${style === "text" ? `bg-white` : ""}`}
      style={{ backgroundImage: image_url ? `url(${image_url})` : "none" }}
    >
      <div className={`flex items-center justify-center w-full h-full ${image_url ? "bg-black/50" : ""}`}>
        <div className="flex items-center justify-between w-full max-w-7xl">
          <div className="w-[40%]">
            <h1
              className={`text-6xl font-bold font-serif
                ${style === "background" ? "text-white" : ""}
                ${style === "image" ? "text-white" : ""}
                ${style === "text" ? "text-red-900" : ""}
                `}
            >
              {title}
            </h1>
          </div>
          <div className="w-[60%]">
            <p
              className={`text-xl
                ${style === "background" ? "text-white" : ""}
                ${style === "image" ? "text-white" : ""}
                ${style === "text" ? "text-gray-900" : ""}
                `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
