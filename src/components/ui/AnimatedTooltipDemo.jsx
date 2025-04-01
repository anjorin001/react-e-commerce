import React from "react";
import AnimatedTooltip from "./AnimatedTooltip";
import Ceo from '../../assets/ceo.jpg'
const people = [
  { id: 1, name: "Anjorin Favour", designation: "Software Engineer", image: "https://i.pinimg.com/736x/4b/8a/d7/4b8ad7ec94374c093b4952fb959444f6.jpg" },
  { id: 2, name: "Robert Johnson", designation: "Product Manager", image: "https://i.pinimg.com/736x/ca/28/47/ca28478cd4788b38d99b167e56e0a555.jpg" },
  { id: 3, name: "Jane Smith", designation: "Data Scientist", image: "https://i.pinimg.com/736x/a7/f9/7f/a7f97f716fab818b938f8b9ae8f6944c.jpg" },
];

const AnimatedTooltipDemo = () => {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
};

export default AnimatedTooltipDemo;
