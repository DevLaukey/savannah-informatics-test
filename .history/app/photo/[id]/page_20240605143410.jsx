"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 

const Photo = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        const data = await response.json();
        setPhoto(data);
        setNewTitle(data.title);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  const handleEdit = async () => {
    try {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen p-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-auto  object-cover"
        />
        <div className="p-4">
          {editing ? (
            <div className="flex items-center">
              <Input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="mr-2"
              />
              <Button onClick={handleEdit}>Save</Button>
            </div>
          ) : (
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
      </div>
    </div>
  );
};

export default Photo;
