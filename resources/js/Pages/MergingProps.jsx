import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function MergingProps({ users, currentPage }) {
  /**
   * Handles the "Next Page" button click.
   * Navigates to the next page while preserving specific props (`users` and `currentPage`)
   * and maintaining the scroll position.
   */
  const handleNextPageClick = () => {
    router.visit('/merging-props', {
      method: 'get', // HTTP GET request to fetch the next page.
      data: { page: currentPage + 1 }, // Increment the current page number.
      only: ['users', 'currentPage'], // Fetch only the required props to minimize payload.
      preserveScroll: true, // Keep the user's scroll position.
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Paging Demo</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* User list section */}
          <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>
            <ul className="divide-y divide-gray-200">
              {users && users.map((user) => (
                <li key={user.id} className="py-4 flex items-center">
                  {/* User avatar with the first letter of their name */}
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  {/* User details */}
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">ID: {user.id}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Next page button */}
          <div className="flex justify-end mt-8">
            <SecondaryButton onClick={handleNextPageClick}>
              Next Page
            </SecondaryButton>
          </div>

        </div>
      </main>
    </div>
  );
}
