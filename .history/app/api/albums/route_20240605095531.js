// pages/api/albums.js

export default async function handler(req, res) {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await response.json();
  console.log(albums);
  res.status(200).json(albums);
}
