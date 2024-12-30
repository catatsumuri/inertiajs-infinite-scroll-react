export default function StatsBox({ label, value }) {
  // プレースホルダー表示（valueがundefinedまたはnullの場合）
  if (value === null || value === undefined) {
    return (
      <div className="animate-pulse bg-gray-200 shadow-md rounded-lg p-4 text-center">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
      </div>
    );
  }

  // データがある場合
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-4 text-center">
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
};
