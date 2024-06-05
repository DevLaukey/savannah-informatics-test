import React from "react";

export async function getServerSideProps() {
  const [usersResponse, albumsResponse] = await Promise.all([
    fetch("http://localhost:3000/api/users"),
    fetch("http://localhost:3000/api/albums"),
  ]);

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
  const getAlbumCountForUser = (userId) => {
    return albums.filter((album) => album.userId === userId).length;
  };

  return (
    <div>
      <h1>Users and their Albums</h1>
      {users>.map((user) => (
        <div key={user.id}>
          {user.name} has {getAlbumCountForUser(user.id)} albums
        </div>
      ))}
    </div>
  );
};

export default Home;
