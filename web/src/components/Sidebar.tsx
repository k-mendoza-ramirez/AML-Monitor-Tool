// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";

const linkBase = "block rounded px-3 py-2 text-sm";
const linkIdle = "text-gray-700 hover:text-blue-600 hover:bg-gray-50";
const linkActive = "text-blue-700 bg-blue-50 font-medium";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-6 shadow">
      <h2 className="text-xl font-bold">AML Monitor</h2>
      <nav className="mt-6 space-y-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          Transactions
        </NavLink>
        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          Alerts
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
        >
          Users
        </NavLink>
      </nav>
    </aside>
  );
}