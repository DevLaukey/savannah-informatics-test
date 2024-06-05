import React from "react";

function Albums() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const usersData = fetch(
    "https://jsonplaceholder.typicode.com/todos/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  if (usersData.length > 0) {
    return (
      <div>
        {usersData.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }

  return <div>Albums</div>;
}

export default Albums;
