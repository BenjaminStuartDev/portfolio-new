import React from "react";

export default function Hero({ name, role }) {
  return (
    <div className="flex flex-row">
      {/* The left section with name and role */}

      <div className="h-screen w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl text-white font-montserrat inline-block ">
          {name} <span className="font-inter pl-4">|</span>
        </h1>
        <h2 className="text-1xl md:text-2xl text-platinum-silver font-inter">{role}</h2>
      </div>

      {/* The right section with arrow svg */}
      <div className="h-screen w-1/2 place-items-center hidden lg:grid">
        <svg
          width="23"
          height="80%"
          viewBox="0 0 23 402"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.93388 401.055C10.5166 401.644 11.4664 401.649 12.0552 401.066L21.6501 391.569C22.2389 390.986 22.2437 390.037 21.661 389.448C21.0782 388.859 20.1285 388.854 19.5397 389.437L11.0109 397.878L2.56934 389.35C1.98657 388.761 1.03684 388.756 0.44805 389.339C-0.140741 389.922 -0.145624 390.871 0.437143 391.46L9.93388 401.055ZM11.5514 0.992288L9.5 399.992L12.5 400.007L14.5514 1.00771L11.5514 0.992288Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
