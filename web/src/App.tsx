export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow">
        <h2 className="text-xl font-bold">AML Monitor</h2>
        <nav className="mt-6 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Transactions</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Alerts</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Users</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-8">
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
      </main>
    </div>
  );
}