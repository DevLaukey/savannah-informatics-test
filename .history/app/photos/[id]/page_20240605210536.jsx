"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import PhotoCard from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Photos component to display and manage photos in an album
const Photos = () => {
  // Get the album ID from the URL parameters
  const { id } = useParams();

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect hook to fetch photos when the component mounts or the ID changes
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Fetch photos data from the API
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}/photos`
        );
        const data = await response.json();

        // Set the photos data and mark loading as false
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [id]);

  // Show loading message while the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter photos based on search query
  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the current photos to be displayed on the current page
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(
    indexOfFirstPhoto,
    indexOfLastPhoto
  );

  // Change the current page
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

      {/* Display the photos in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      {/* Pagination buttons */}
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
