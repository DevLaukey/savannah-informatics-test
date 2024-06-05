

const HomePage = ({users, albums}) => {
  const getAlbumsCount = (userId, albums) => {
    return albums.filter((album) => album.userId === userId).length;
  };
  return (
      <table className="min-w-1/2 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
          
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Albums
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getAlbumsCount(user.id, albums)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default HomePage;
