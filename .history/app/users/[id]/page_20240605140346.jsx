"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumsTable from "@/components/AlbumsTable";

const fetchAlbums = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return response.data;
};

const HomePage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albumsData = await fetchAlbums();
      setAlbums(albumsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Albums</h1>
      <AlbumsTable data={albums} />
    </div>
  );
};

export default HomePage;
