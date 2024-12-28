import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Welcome" />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-extrabold text-center mb-6">Welcome Page</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-50">
            <Link
              href={route('load-when-visible')}
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              🚀 Load When Visible
            </Link>
          </li>

          <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-50">
            <Link
              href={route('merging-props')}
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              🛠️ Merging Props
            </Link>
          </li>

          <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-50">
            <Link
              href={route('partial-reload-index')}
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              🔄 Partial Reload
            </Link>
          </li>
        </ul>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Laravel Version: <span className="font-mono">{laravelVersion}</span></p>
          <p>PHP Version: <span className="font-mono">{phpVersion}</span></p>
        </footer>
      </div>
    </>
  );
}

