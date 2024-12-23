import { WhenVisible } from '@inertiajs/react'
import { ClipLoader } from 'react-spinners';

export default function LoadWhenVisible({ text, users }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Load When Visible Demo</h1>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {[...Array(3)].map((_, index) => (
            <section
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </section>
          ))}


          <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>
            <WhenVisible
              data={['users']}
              fallback={
                <div className="flex justify-center items-center py-6">
                  <ClipLoader size={35} color={"#2563eb"} />
                </div>
              }
            >
              <ul className="divide-y divide-gray-200">
                 {users && users.map((user) => (
                   <li key={user.id} className="py-4 flex items-center">
                     <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
                     {user.name.charAt(0).toUpperCase()}
                     </div>
                     <div className="ml-4">
                       <p className="text-sm font-medium text-gray-900">{user.name}</p>
                       <p className="text-sm text-gray-500">ID: {user.id}</p>
                     </div>
                   </li>
                 ))}
              </ul>
            </WhenVisible>
          </section>
        </div>
      </main>
    </div>
  );
}
