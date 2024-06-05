import React from "react";

export async function getServerSideProps() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const [usersResponse, albumsResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/", requestOptions),
    fetch("https://jsonplaceholder.typicode.com/albums/", requestOptions),
  ]);
    
    console.log(usersResponse)

  const [users, albums] = await Promise.all([
    usersResponse.json(),
    albumsResponse.json(),
  ]);

  return {
    props: {
      users,
      albums,
    },
  };
}

const Home = ({ users, albums }) => {
  console.log("Users...", users);
  const getAlbumCountForUser = (userId) => {
    return albums.filter((album) => album.userId === userId).length;
  };

  return (
    <div>
      <h1>Users and their Albums</h1>
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            {user.name} has {getAlbumCountForUser(user.id)} albums
          </div>
        ))
      ) : (
        <p>No users or albums found</p>
      )}
    </div>
  );
};

export default Home;
