// pages/api/albums.js

export default async function handler(req, res) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/",
    requestOptions
  );
  const albums = await response.json();
  console.log(albums);
  res.status(200).json(albums);
}
