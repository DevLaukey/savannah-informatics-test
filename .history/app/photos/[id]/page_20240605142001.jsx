"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard"; // Adjust the import path as needed
import { Button } from "@/components/ui/button"; // Adjust the import path as needed

const Photos = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);

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
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1"
        >
          Previous
        </Button>
        {Array.from({ length: Math.ceil(photos.length / photosPerPage) }).map(
          (_, index) => (
            <Button
              key={index + 1}
              variant="outline"
              size="sm"
              onClick={() => paginate(index + 1)}
              className="mx-1"
            >
              {index + 1}
            </Button>
          )
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(photos.length / photosPerPage)}
          className="mx-1"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Photos;
