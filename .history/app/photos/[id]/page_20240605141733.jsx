"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Photos = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}/photos`
        );
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {photo.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
