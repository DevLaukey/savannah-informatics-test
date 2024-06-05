import React from "react";
import Link from "next/link";

const PhotoCard = ({ photo }) => (
  <Link href={`/photo/${photo.id}`}>
    <a className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{photo.title}</h2>
      </div>
    </a>
  </Link>
);

export default PhotoCard;
