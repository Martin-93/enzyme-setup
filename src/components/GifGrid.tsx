import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import GifGriditem from "./GifGridItem";

type Props = {
  category: string;
};
const GifGrid: React.FC<Props> = ({ category }) => {
  const { data: images, loanding } = useFetchGif(category);
  //data:image --> solo cambio el nombre de data a images

  return (
    <>
      <h2 className="text-3xl font-bold text-center underline">{category}</h2>
      {loanding && <p>Loading...</p>}

      <div className="flex flex-wrap justify-center">
        {images.map((image: any) => (
          <GifGriditem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
export default GifGrid;
