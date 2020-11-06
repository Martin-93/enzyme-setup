import React, { useState } from "react";
import "./assets/main.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <>
      <h2 className="font-bold">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
export default GifExpertApp;
