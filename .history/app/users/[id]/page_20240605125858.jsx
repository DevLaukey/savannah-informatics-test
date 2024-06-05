"use client";
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
          `https://jsonplaceholder.typicode.com/${id}/albums`
        );
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    Promise.all([fetchUser(), fetchAlbums()]).then(() => setLoading(false));
  }, []);

  console.log("Loading", albums,userData);
  if (loading) {
    return <div>Loading...</div>;
  }

  return <div className="flex items-center justify-center h-3/4">
  
    {/* show the data */}
    <UserCard/>
  </div>;
}

export default Users;
