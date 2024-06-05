export default async function handler(req, res) {
  // Define the options for the fetch request. In this case, it is a simple GET request with a redirect follow policy.
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    // Fetch the albums from the JSONPlaceholder API using the defined requestOptions.
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/",
      requestOptions
    );

    // Parse the response as JSON.
    const albums = await response.json();

    // Log the albums to the console for debugging purposes.
    console.log(albums);

    // Respond to the client with the fetched albums and a 200 OK status.
    res.status(200).json(albums);
  } catch (error) {
    // If an error occurs, log it and respond with a 500 Internal Server Error status.
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
}
