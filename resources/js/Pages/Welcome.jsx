import { Head, Link, Deferred } from '@inertiajs/react';
import StatsBox from '@/Components/StatsBox';

export default function Welcome({ auth, laravelVersion, phpVersion, stats }) {
  console.log(stats);
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

        <div className="mt-8">
          <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4">Stats</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Deferred data="stats" fallback={<StatsBox />}>
              {typeof stats === 'object' && stats !== null && Object.entries(stats).map(([key, value]) => (
                <StatsBox key={key} label={key} value={value} />
              ))}
            </Deferred>
          </div>
        </div>

        <div className="mt-8 text-center">
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className="rounded-md px-4 py-2 bg-blue-600 text-white font-semibold shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href={route('login')}
              className="rounded-md px-4 py-2 bg-gray-600 text-white font-semibold shadow-md transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Log in
            </Link>
          )}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>
            Laravel Version: <span className="font-mono">{laravelVersion}</span>
          </p>
          <p>
            PHP Version: <span className="font-mono">{phpVersion}</span>
          </p>
        </footer>
      </div>
    </>
  );
}

