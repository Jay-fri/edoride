import { useState } from "react";
import {
  Users,
  Car,
  LayoutDashboard,
  Activity,
  TrendingUp,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  User,
} from "lucide-react";

// Mock data
const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    joined: "12 Jan 2025",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    joined: "15 Feb 2025",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "Inactive",
    joined: "23 Mar 2025",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    status: "Active",
    joined: "05 Apr 2025",
  },
];

const driverData = [
  {
    id: 1,
    name: "Alex Driver",
    license: "DR123456",
    vehicle: "Toyota Camry",
    status: "On Duty",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    license: "DR654321",
    vehicle: "Honda Civic",
    status: "Off Duty",
    rating: 4.9,
  },
  {
    id: 3,
    name: "David Chen",
    license: "DR789012",
    vehicle: "Ford Focus",
    status: "On Duty",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Lisa King",
    license: "DR456789",
    vehicle: "Nissan Altima",
    status: "On Break",
    rating: 4.6,
  },
];

const stats = [
  {
    title: "Total Users",
    value: "2,345",
    change: "+12%",
    icon: <Users size={20} />,
  },
  {
    title: "Active Drivers",
    value: "152",
    change: "+5%",
    icon: <Car size={20} />,
  },
  {
    title: "Completed Trips",
    value: "8,567",
    change: "+18%",
    icon: <Activity size={20} />,
  },
  {
    title: "Revenue",
    value: "$48,325",
    change: "+15%",
    icon: <TrendingUp size={20} />,
  },
];

// Main Dashboard Component
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersPanel />;
      case "drivers":
        return <DriversPanel />;
      default:
        return <DashboardPanel />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNav />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-white">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "users", name: "Users", icon: <Users size={20} /> },
    { id: "drivers", name: "Drivers", icon: <Car size={20} /> },
    { id: "settings", name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <h1
          className="text-2xl font-bold text-blue-700"
          style={{ color: "#2A60AA" }}
        >
          Admin Panel
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center w-full p-3 rounded-lg ${
                  activeTab === item.id
                    ? "bg-blue-700 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor: activeTab === item.id ? "#2A60AA" : "",
                  color: activeTab === item.id ? "#FFFFFF" : "",
                }}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-200">
          <LogOut size={20} />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
}

// Top Navigation Component
function TopNav() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Menu */}
        <div className="flex items-center">
          <div
            className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: "#2A60AA" }}
          >
            A
          </div>
          <button className="flex items-center space-x-2 ml-2 text-gray-600 hover:text-gray-900">
            <span>Admin</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}

// Dashboard Panel Component
function DashboardPanel() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-green-500">{stat.change}</span>
                  <span className="text-xs text-gray-500 ml-1">
                    vs last month
                  </span>
                </div>
              </div>
              <div
                className="p-3 rounded-full bg-blue-100"
                style={{ backgroundColor: "rgba(42, 96, 170, 0.1)" }}
              >
                <div className="text-blue-700" style={{ color: "#2A60AA" }}>
                  {stat.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users Activity Chart */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            User Activity
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">User Activity Chart Placeholder</p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Revenue
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="p-4 bg-gray-50 rounded-lg flex items-start"
            >
              <div
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white mr-4"
                style={{ backgroundColor: "#2A60AA" }}
              >
                <User size={16} />
              </div>
              <div>
                <p className="font-medium text-gray-800">New user registered</p>
                <p className="text-sm text-gray-500">
                  John Doe registered as a new user
                </p>
                <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Users Panel Component
function UsersPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Users</h2>
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded-lg flex items-center"
          style={{ backgroundColor: "#2A60AA" }}
        >
          <span>Add User</span>
          <span className="ml-2">+</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Joined
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={18} className="text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.joined}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-blue-700 hover:text-blue-900 mr-3"
                    style={{ color: "#2A60AA" }}
                  >
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Drivers Panel Component
function DriversPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Drivers</h2>
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded-lg flex items-center"
          style={{ backgroundColor: "#2A60AA" }}
        >
          <span>Add Driver</span>
          <span className="ml-2">+</span>
        </button>
      </div>

      {/* Drivers Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Driver
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                License
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Vehicle
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {driverData.map((driver) => (
              <tr key={driver.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={18} className="text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {driver.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{driver.license}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{driver.vehicle}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      driver.status === "On Duty"
                        ? "bg-green-100 text-green-800"
                        : driver.status === "Off Duty"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {driver.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900 font-medium">
                      {driver.rating}
                    </span>
                    <span className="ml-1 text-yellow-400">★</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-blue-700 hover:text-blue-900 mr-3"
                    style={{ color: "#2A60AA" }}
                  >
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
