"use client";

import MainPoster from "@/components/Festivals/RathYatra/01MainPoster/MainPoster";
import CardDescription from "@/components/Festivals/RathYatra/04CardDescription/CardDescription";
import React from "react";

const RathYatra = () => {
  return (
    <div
      style={{
        background: "#0cebeb",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)"  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
    >
      <MainPoster />
      <CardDescription />
    </div>
  );
};

export default RathYatra;
