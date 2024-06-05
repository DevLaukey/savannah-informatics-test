import React from "react";

function Albums() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://jsonplaceholder.typicode.com/todos/", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  return <div>Albums</div>;
}

export default Albums;
