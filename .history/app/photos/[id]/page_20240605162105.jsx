"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import PhotoCard from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Photos = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter photos based on search query
  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(
    indexOfFirstPhoto,
    indexOfLastPhoto
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-12">
      <div className="flex items-center justify-evenly mb-2">
        <h3 className="text-2xl font-semibold">
          These are the photos in the album
        </h3>
        <div className="flex items-center py-4">
          <Input
            placeholder="Search photos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
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
        {Array.from({
          length: Math.ceil(filteredPhotos.length / photosPerPage),
        }).map((_, index) => (
          <Button
            key={index + 1}
            variant="outline"
            size="sm"
            onClick={() => paginate(index + 1)}
            className="mx-1"
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredPhotos.length / photosPerPage)
          }
          className="mx-1"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Photos;
