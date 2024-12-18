"use client";

import React, { useState, useEffect } from 'react';

interface Appointment {
  id: string;
  date: string;
  time: string;
  concern: string;
  status: 'Pending' | 'Approved' | 'Denied';
}

// Dummy data structure
const initialAppointments: Appointment[] = [
  { id: 'XXXXX-XXXX1', date: '12/20/24', time: '10:00AM', concern: 'Headache and sore throat', status: 'Pending' },
  { id: 'XXXXX-XXXX2', date: '12/21/24', time: '10:30AM', concern: 'Diarrhea and loss of appetite', status: 'Approved' },
  { id: 'XXXXX-XXXX3', date: '12/21/24', time: '10:30AM', concern: 'Diarrhea and loss of appetite', status: 'Denied' },
  { id: 'XXXXX-XXXX4', date: '12/21/24', time: '10:30AM', concern: 'Headache and sore throat', status: 'Approved' },
];

const AppointmentHistory: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]); // Fetched data
  const [searchId, setSearchId] = useState<string>(''); // Search query
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('list'); // View state (List/Calendar)
  const [sortStatus, setSortStatus] = useState(''); // Sort by status (Pending/Approved/Denied)
  const itemsPerPage = 10;


  useEffect(() => {
    setAppointments(initialAppointments);
  }, []);

  // Handle Search
  const handleSearch = () => {
    const filtered = initialAppointments.filter((appt) =>
      appt.id.toLowerCase().includes(searchId.toLowerCase())
    );
    setAppointments(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination Logic
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const paginatedData = appointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>

      <div className="p-6 bg-white rounded-lg shadow-md">

        {/* Filters and Search */}
        <div className="flex items-center mb-4 space-x-4">
          {/* View Dropdown */}
          <div className="flex items-center space-x-2">
            <label htmlFor="view" className="text-teal-700 font-bold">View:</label>
            <select
              id="view"
              className="p-2 border rounded bg-teal-500 focus:outline-none hover:bg-teal-600"
              value={view}
              onChange={(e) => setView(e.target.value)}
            >
              <option value="list">List</option>
              <option value="calendar" >Calendar</option>
            </select>
          </div>

          {/* Search by ID */}
          <div className="flex items-center space-x-2 ">
            <input
              type="text"
              placeholder="XXXXXX-XXXXX"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="p-2 border rounded focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-teal-500 text-black px-4 py-2 rounded hover:bg-teal-600 font-bold"
            >
              Search by ID
            </button>
          </div>

          {/* Sort Dropdown for Status */}
          <div className="flex items-center space-x-2">
            <label htmlFor="status" className="text-teal-700 font-bold">Sort:</label>
            <select
              id="status"
              className="p-2 border rounded bg-teal-500 focus:outline-none hover:bg-teal-600"
              value={sortStatus}
              onChange={(e) => setSortStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse rounded-lg text-black border border-teal-600">
          <thead>
            <tr className="bg-teal-500">
              <th className="py-2 px-4 border-b border-teal-500">ID</th>
              <th className="py-2 px-4 border-b border-teal-500">Date</th>
              <th className="py-2 px-4 border-b border-teal-500">Time</th>
              <th className="py-2 px-4 border-b border-teal-500">Concern</th>
              <th className="py-2 px-4 border-b border-teal-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((appointment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-teal-500">{appointment.id}</td>
                <td className="py-2 px-4 border-b border-teal-500">{appointment.date}</td>
                <td className="py-2 px-4 border-b border-teal-500">{appointment.time}</td>
                <td className="py-2 px-4 border-b border-teal-500">{appointment.concern}</td>
                <td className="py-2 px-4 border-b border-teal-500">
                <span className="flex items-center space-x-2">
  <span
    className={`w-3.5 h-3.5 rounded-full ${
      appointment.status === 'Approved'
        ? 'bg-green-500'
        : appointment.status === 'Pending'
        ? 'bg-yellow-500'
        : 'bg-red-500'
    }`}
  />
  <span
    className={`text-sm font-medium ${
      appointment.status === 'Approved'
        ? 'text-green-700'
        : appointment.status === 'Pending'
        ? 'text-yellow-700'
        : 'text-red-700'
    }`}
  >
    {appointment.status}
  </span>
</span>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 space-x-2">
  {/* Previous Button */}
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="w-8 h-8 border border-teal-700 rounded-lg text-teal-700 hover:bg-teal-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-inner flex items-center justify-center"
  >
    &lt;
  </button>

  {/* Page Numbers */}
  <div className="flex items-center space-x-2 border border-teal-700 rounded-lg shadow-inner">
    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center ${
          currentPage === index + 1
            ? 'bg-teal-700 text-white shadow-inner'
            : 'bg-white text-teal-700 border hover:bg-teal-100'
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="w-8 h-8 border border-teal-700 rounded-lg text-teal-700 hover:bg-teal-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-inner flex items-center justify-center"
  >
    &gt;
  </button>
</div>

{/* Result Count */}
<div className="text-sm text-gray-600 text-center mt-2">
  Showing results: {(currentPage - 1) * itemsPerPage + 1} -{' '}
  {Math.min(currentPage * itemsPerPage, appointments.length)} of{' '}
  {appointments.length}
</div>
</div>
    </>

  );
};

export default AppointmentHistory;