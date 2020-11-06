import React from "react";

type Props = {
  title: string;
  url: string;
};
const GifGriditem: React.FC<Props> = ({ title, url }) => {
  return (
    <div className="w-1/4 h-48 m-4 rounded shadow-lg box-border">
      <img src={url} alt={title} className="w-full h-40 rounded" />
      <h3 className="text-center">{title}</h3>
    </div>
  );
};
export default GifGriditem;
