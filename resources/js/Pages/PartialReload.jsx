import { Head, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function PartialReload({ message, users }) {
  // Log the received user data to the console for debugging.
  // console.log(users);

  // Function to fetch user data via a partial reload.
  const fetchUsers = () => {
    router.post(route('partial-reload-index'),
      { data: 'User' }, // Request payload specifying the data type.
      { only: ['users'] } // Only update the 'users' key in the Inertia response.
    );
  };

  return (
    <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex items-center justify-center">
      <Head title="Partial Reload Demo" />
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-md w-full">
        {/* Page title */}
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
          Partial Reload Demonstration
        </h2>

        {/* Randomly generated message */}
        <p className="text-lg text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md m-5">
          {message}
        </p>

        {/* Button to fetch user data */}
        <PrimaryButton onClick={fetchUsers}>
          Load User Data
        </PrimaryButton>

        {/* Display user data or a fallback message */}
        <div className="mt-6 text-left w-full">
          {Array.isArray(users) && users.length > 0 ? (
            <ul className="list-disc pl-5">
              {users.map((user) => (
                <li key={user.id} className="text-black dark:text-white">
                  {user.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No users found. Please try loading again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
