export default async function handler(req, res) {
  // Define the options for the fetch request. I
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    // Fetch the users from the JSONPlaceholder API using the defined requestOptions.
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      requestOptions
    );

    // Parse the response as JSON.
    const users = await response.json();

    // Respond to the client with the fetched users and a 200 OK status.
    res.status(200).json(users);
  } catch (error) {
    // If an error occurs, log it and respond with a 500 Internal Server Error status.
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
