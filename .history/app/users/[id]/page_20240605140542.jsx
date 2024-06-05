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
    <div className="w-full flex items-center justify-center h-screen">
      {/* show the data */}
            <div className="container mx-auto p-4 flex-1">

      <UserCard userData={userData} />
        </div>
      <div className="container mx-auto p-4">
        <AlbumsTable data={albums} />
      </div>{" "}
    </div>
  );
}

export default Users;
