"use client";

import React, { useState, useEffect } from "react";
import UsersDataTable from "./UsersDataTable";

function Home() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const fetchAlbums = async () => {
      try {
        const albumsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    Promise.all([fetchUsers(), fetchAlbums()]).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex flex-col justify-center items-center mt-10 mx-4">
      <h1 className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-3">
        Users and their Albums
      </h1>
      <h5 className="text-xl">To view more, click on one user</h5>

      <UsersDataTable users={users} albums={albums} />
    </div>
  );
}

export default Home;
