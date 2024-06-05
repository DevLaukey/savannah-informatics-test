"use client";

import React, { useState, useEffect } from "react";
import UsersDataTable from "./UsersDataTable";

// Albums component to display users and their albums
function Albums() {
  // State variables to manage users, albums, and loading state
  const [users, setUsers] = useState([]);

  const [albums, setAlbums] = useState([]);

  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch users and albums data when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch users data from the API
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
        // Fetch albums data from the API
        const albumsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const albumsData = await albumsResponse.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    // Fetch users and albums data concurrently and set loading to false when both are done
    Promise.all([fetchUsers(), fetchAlbums()]).then(() => setLoading(false));
  }, []);

  // Show loading message while the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center my-10 mx-4">
      <h1 className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-3">
        Users and their Albums
      </h1>
      <h5 className="text-xl mb-3 font-semibold">
        To view more, click on a user
      </h5>

      {/* UsersDataTable component to display the users and their albums */}
      <UsersDataTable users={users} albums={albums} />
    </div>
  );
}

export default Albums;
