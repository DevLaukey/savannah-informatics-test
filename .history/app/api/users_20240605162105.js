
export default async function handler(req, res) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/users", requestOptions);
  const users = await response.json();
  res.status(200).json(users);
}
