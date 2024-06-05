"use client";
import AlbumsTable from "@/components/Albums/tables/AlbumDataTable";
import UserCard from "@/components/user/UserCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Users component to display user information and their albums
function Users() {
  // Get the user ID from the URL parameters
  const { id } = useParams();

  const [albums, setAlbums] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  // fetch user and album data when the component mounts or the ID changes
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch user data from the API
        const usersResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const usersData = await usersResponse.json();
        setUserData(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const fetchAlbums = async () => {
      try {
        // Fetch album data from the API
        const albumsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/albums`
        );
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    // Fetch user and album data concurrently and set loading to false when both are done
    Promise.all([fetchUser(), fetchAlbums()]).then(() => setLoading(false));
  }, [id]);

  // Show loading message while the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* User Card and Albums Table */}
      <div className="container mx-auto sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
        {/* User Card */}
        <div className="flex flex-col items-center sm:w-1/3">
          <UserCard userData={userData} />
        </div>
        {/* Albums Table */}
        <div className="flex flex-col items-center sm:w-2/3">
          <AlbumsTable data={albums} />
        </div>
      </div>
    </div>
  );
}

export default Users;
