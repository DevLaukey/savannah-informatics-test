"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Photo = () => {
  // Get the photo ID from the URL parameters
  const { id } = useParams();

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        // Fetch photo data from the API
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        const data = await response.json();

        // Set the photo data and new title, and mark loading as false
        setPhoto(data);
        setNewTitle(data.title);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  // Function to handle editing the photo title
  const handleEdit = async () => {
    try {
      // Send a PATCH request to update the photo title
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTitle }),
        }
      );

      if (response.ok) {
        // Update the photo data with the new title
        const updatedPhoto = await response.json();
        setPhoto(updatedPhoto);
        setEditing(false);
      } else {
        console.error("Failed to update the photo title");
      }
    } catch (error) {
      console.error("Error updating the photo title:", error);
    }
  };

  // Show loading message while the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen p-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          {editing ? (
            // Show input field and save button when editing
            <div className="flex items-center">
              <Input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="mr-2"
              />
              <Button onClick={handleEdit}>Save</Button>
            </div>
          ) : (
            // Show photo title and edit button when not editing
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {photo.title}
              </h2>
              <Button variant="outline" onClick={() => setEditing(true)}>
                Edit
              </Button>
            </div>
          )}
        </div>
        {/* Display the photo */}
        <Image
          src={photo.url}
          alt={photo.title}
          width={600}
          height={600}
          className="w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Photo;
