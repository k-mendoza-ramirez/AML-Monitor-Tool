// src/pages/Dashboard.tsx
export default function Dashboard() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        AML Monitor Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-700">Transactions</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">1,248</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-700">Open Alerts</h2>
          <p className="mt-2 text-2xl font-bold text-red-600">57</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-700">Users</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">12</p>
        </div>
      </div>
    </>
  );
}