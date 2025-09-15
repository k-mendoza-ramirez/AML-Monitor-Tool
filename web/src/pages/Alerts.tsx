export default function Alerts() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Alerts</h1>

      <div className="rounded-xl bg-white p-4 shadow">
        <div className="mb-4 flex flex-wrap gap-3">
          <input
            className="w-64 rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="Search reason or transaction id…"
          />
          <select className="rounded border border-gray-300 px-3 py-2 text-sm">
            <option value="OPEN">Open</option>
            <option value="RESOLVED">Resolved</option>
            <option value="ALL">All</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-600">
                <th className="border-b px-3 py-2">ID</th>
                <th className="border-b px-3 py-2">Transaction</th>
                <th className="border-b px-3 py-2">Reason</th>
                <th className="border-b px-3 py-2">Status</th>
                <th className="border-b px-3 py-2">Created</th>
                <th className="border-b px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {/* replace with mapped data later */}
              <tr>
                <td className="border-b px-3 py-2">ALRT-0001</td>
                <td className="border-b px-3 py-2">TX-9c21…</td>
                <td className="border-b px-3 py-2">Amount {'>'} $10,000</td>
                <td className="border-b px-3 py-2">
                  <span className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-700">
                    OPEN
                  </span>
                </td>
                <td className="border-b px-3 py-2">2025-09-15 10:22</td>
                <td className="border-b px-3 py-2">
                  <button className="rounded border px-2 py-1 text-xs hover:bg-gray-50">
                    Review
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}