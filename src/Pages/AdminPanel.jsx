import React from "react";
import Title from "../Components/Ui/Title";
import Container from "../Components/Ui/Container";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AdminPanel.css';
import { FaUsers, FaUtensils, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

const AdminPanel = () => {
    // 🎨 Using beautiful mock data so the dashboard works perfectly
    // without relying on the backend or database connections!

    const dummyChartData = [
        { name: 'Jan', revenue: 4200, orders: 120 },
        { name: 'Feb', revenue: 3100, orders: 98 },
        { name: 'Mar', revenue: 8500, orders: 200 },
        { name: 'Apr', revenue: 3000, orders: 105 },
        { name: 'May', revenue: 2100, orders: 75 },
        { name: 'Jun', revenue: 4390, orders: 89 },
        { name: 'Jul', revenue: 5490, orders: 150 },
    ];

    const dummyRecentUsers = [
        { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'user' },
        { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
        { id: 3, name: 'Admin Dummy', email: 'admin@example.com', role: 'admin' },
        { id: 4, name: 'Sarah Connor', email: 'sarah.c@example.com', role: 'user' },
        { id: 5, name: 'John Doe', email: 'john@doe.com', role: 'user' },
    ];

    const stats = {
        totalUsers: 158,
        totalFoods: 64,
        totalOrders: 320,
        revenue: 16540,
        chartData: dummyChartData,
        recentUsers: dummyRecentUsers
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-10 admin-panel-container">
            <Container>
                <Title>Admin Dashboard</Title>

                <div className="text-center mb-8">
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Welcome back! Here is a high-level overview of your restaurant's performance.
                    </p>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="stat-card intro-animation-1 bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 flex items-center justify-between hover:shadow-2xl transition duration-300">
                        <div>
                            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Total Users</p>
                            <h3 className="text-3xl font-bold text-gray-800">{stats.totalUsers}</h3>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-full text-blue-500 text-2xl shadow-inner">
                            <FaUsers />
                        </div>
                    </div>

                    <div className="stat-card intro-animation-2 bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 flex items-center justify-between hover:shadow-2xl transition duration-300">
                        <div>
                            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Total Foods</p>
                            <h3 className="text-3xl font-bold text-gray-800">{stats.totalFoods}</h3>
                        </div>
                        <div className="p-4 bg-green-50 rounded-full text-green-500 text-2xl shadow-inner">
                            <FaUtensils />
                        </div>
                    </div>

                    <div className="stat-card intro-animation-3 bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 flex items-center justify-between hover:shadow-2xl transition duration-300">
                        <div>
                            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Total Orders</p>
                            <h3 className="text-3xl font-bold text-gray-800">{stats.totalOrders}</h3>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-full text-yellow-500 text-2xl shadow-inner">
                            <FaShoppingCart />
                        </div>
                    </div>

                    <div className="stat-card intro-animation-4 bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 flex items-center justify-between hover:shadow-2xl transition duration-300">
                        <div>
                            <p className="text-gray-500 text-sm uppercase font-semibold mb-1">Est. Revenue</p>
                            <h3 className="text-3xl font-bold text-gray-800">${stats.revenue.toLocaleString()}</h3>
                        </div>
                        <div className="p-4 bg-red-50 rounded-full text-red-500 text-2xl shadow-inner">
                            <FaDollarSign />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Revenue Chart */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 intro-animation-5">
                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h3 className="text-xl font-bold text-gray-800">Revenue Analytics</h3>
                            <span className="text-sm text-green-500 bg-green-50 px-3 py-1 rounded-full font-semibold">+14.5% from last month</span>
                        </div>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={stats.chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
                                    <YAxis axisLine={false} tickLine={false} tickMargin={10} tickFormatter={(value) => `$${value}`} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: 'none' }}
                                        itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                    />
                                    <Legend iconType="circle" />
                                    <Line
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#ef4444"
                                        strokeWidth={4}
                                        dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                                        activeDot={{ r: 8, strokeWidth: 0, fill: '#ef4444' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Users List */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 overflow-hidden intro-animation-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Recently Active Users</h3>
                        <div className="overflow-y-auto max-h-[320px] pr-2 custom-scrollbar">
                            <ul className="space-y-3">
                                {stats.recentUsers.map((user, idx) => (
                                    <li key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 text-sm">{user.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className={`text-xs px-3 py-1.5 rounded-full font-bold tracking-wide ${user.role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                                {user.role}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminPanel;
