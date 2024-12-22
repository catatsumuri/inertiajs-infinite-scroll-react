import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ blogs }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Blog
        </h2>
      }
    >
      <Head title="Blog" />

      <div className="py-12">
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <div className="p-6">
                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>

                  {/* 著者とカテゴリ */}
                  <div className="mt-2 flex items-center space-x-4 text-sm">
                    <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                      Author: {blog.author.name}
                    </span>
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      Category: {blog.category.name}
                    </span>
                  </div>

                  {/* コンテンツ */}
                  <p className="mt-4 text-gray-600">{blog.content}</p>

                  {/* 詳細リンク */}
                  <div className="mt-4">
                    <a
                      href={`/blogs/${blog.id}`}
                      className="text-indigo-600 hover:underline font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
