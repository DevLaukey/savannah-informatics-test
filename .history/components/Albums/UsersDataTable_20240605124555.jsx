import Link from "next/link";

const HomePage = ({ users, albums }) => {
  const getAlbumsCount = (userId, albums) => {
    return albums.filter((album) => album.userId === userId).length;
  };
  return (
    <div className="w-full max-w-lg relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 divide-y divide-gray-200">
        <thead className="w-full text-xs text-gray-100 dark:text-gray-200  uppercase bg-gray-50 dark:bg-gray-900 ">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              User Id
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Albums
            </th>
          </tr>
        </thead>
        <tbody className="w-full bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr className=" hover:cursor-pointer w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 w-full py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link className="w-full" href={`/users/${user.id}`}>
                  {user.id}
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link href={`/users/${user.id}`}>
                  {getAlbumsCount(user.id, albums)}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
