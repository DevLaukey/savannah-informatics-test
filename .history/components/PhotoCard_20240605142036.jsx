import React from "react";

const PhotoCard = ({ photo }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={photo.thumbnailUrl}
      alt={photo.title}
      className="w-full h-30 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{photo.title}</h2>
    </div>
  </div>
);

export default PhotoCard;
