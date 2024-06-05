"use client";
import AlbumsTable from "@/components/Albums/tables/AlbumDataTable";
import UserCard from "@/components/user/UserCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Users() {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
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
        const albumsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/albums`
        );
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    Promise.all([fetchUser(), fetchAlbums()]).then(() => setLoading(false));
  }, []);

  console.log("Loading", albums);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* User Card */}
      <div className="container mx-auto sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
        <div className="flex flex-col items-center sm:w-1/3">
          <UserCard userData={userData} />
        </div>
        <div className="flex flex-col items-center sm:w-2/3">
          <AlbumsTable data={albums} />
        </div>
      </div>
    </div>
  );
}

export default Users;
