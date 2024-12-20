"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/utilities/axios";
import { RootState } from "@/lib/store";

interface Appointment {
  id: number;
  title: string;
  description: string;
  images: string | null;
  date_created: string;
  date_appointment: string;
  date_modified: string;
  status: string;
}

const AppointmentHistory: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const userId = useSelector((state: RootState) => state.user.userId);
  const [searchId, setSearchId] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('list');
  const [sortStatus, setSortStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;


  useEffect(() => {
    if (!userId) return; // If no user ID, skip the API call

    const fetchAppointments = async () => {
      try {
        const response = await axiosInstance.get(`/appointments/all`, {
          headers: {
            Authorization: `Bearer ${document.cookie.split('=')[1]}`,
          },
        });
        setAppointments(response.data);
        setError(null);
      } catch (error: any) { // Added type annotation for error
          setError("Error fetching appointments. Please try again later.");
          console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [userId]);

   const handleSearch = () => {
        if(searchId && parseInt(searchId) <= 0) {
             setError("Please enter a valid appointment ID greater than 0.");
            setAppointments([]);
           return;
        }

    const filtered = appointments.filter((appt) =>
    appt.id.toString().includes(searchId.toLowerCase())
  );
    setAppointments(filtered);
    setCurrentPage(1);
  };


  const sortedAppointments = sortStatus
    ? appointments.filter((appt) => appt.status.toLowerCase() === sortStatus.toLowerCase())
    : appointments;

  const totalPages = Math.ceil(sortedAppointments.length / itemsPerPage);
  const paginatedData = sortedAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    const isFutureOrToday = (dateString: string): boolean => {
        const appointmentDate = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set today's time to the beginning of the day for comparison

        return appointmentDate >= today;
    };

  return (
      <div className="p-5">
          <div className="p-6 bg-white rounded-lg shadow-md">
              {/* Filters and Search */}
              <div className="flex items-center mb-4 space-x-4">
                  {/* View Dropdown */}
                  <div className="flex items-center space-x-2">
                      <button className="font-montserrat bg-primary py-2 px-4 text-white   font-semibold hover:bg-cyan-400 rounded-2xl">Click for Calendar View</button>
                  </div>

                  {/* Search by ID */}
                  <div className="flex items-center space-x-2">
                      <input
                          type="text"
                          placeholder="XXXX"
                          value={searchId}
                          onChange={(e) => setSearchId(e.target.value)}
                          className="p-2 border rounded focus:outline-none text-black font-semibold font-nunito"
                      />
                      <button
                          onClick={handleSearch}
                          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 font-bold"
                      >
                          Search by ID
                      </button>
                  </div>

                  {/* Sort Dropdown for Status */}
                  <div className="flex items-center space-x-2">
                      <label htmlFor="status" className="text-teal-700 font-bold">Filter Status:</label>
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
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}

              {/* Table */}
              <table className="w-full text-left border-collapse rounded-lg text-black border border-teal-600">
                  <thead>
                  <tr className="bg-teal-500">
                      <th className="py-2 px-4 border-b border-teal-500">ID</th>
                      <th className="py-2 px-4 border-b border-teal-500">Date</th>
                      <th className="py-2 px-4 border-b border-teal-500">Time</th>
                      <th className="py-2 px-4 border-b border-teal-500">Concern Title</th>
                      <th className="py-2 px-4 border-b border-teal-500">Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {paginatedData.map((appointment, index) => {
                      const date = new Date(appointment.date_appointment);
                      const formattedDate = date.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                      });
                      const formattedTime = date.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                      });

                      return (
                          <tr key={index} className="hover:bg-gray-100">
                              <td className="py-2 px-4 border-b border-teal-500">{appointment.id}</td>
                              <td className="py-2 px-4 border-b border-teal-500">
                                  {isFutureOrToday(appointment.date_appointment) ? formattedDate : <span className="text-gray-500 line-through">{formattedDate}</span>}
                              </td>

                              <td className="py-2 px-4 border-b border-teal-500">{formattedTime}</td>
                              <td className="py-2 px-4 border-b border-teal-500">{appointment.title}</td>
                              <td className="py-2 px-4 border-b border-teal-500">
                                <span className="flex items-center space-x-2">
                                <span
                                    className={`w-3.5 h-3.5 rounded-full ${
                                    appointment.status === "APPROVED"
                                        ? "bg-green-500"
                                        : appointment.status === "PENDING"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                    }`}
                                />
                                <span
                                    className={`text-sm font-medium ${
                                    appointment.status === "APPROVED"
                                        ? "text-green-700"
                                        : appointment.status === "PENDING"
                                        ? "text-yellow-700"
                                        : "text-red-700"
                                    }`}
                                >
                                    {appointment.status}
                                </span>
                                </span>
                              </td>
                          </tr>
                      );
                  })}
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
                  </button>
              </div>

              {/* Result Count */}
              <div className="text-sm text-gray-600 text-center mt-2">
                  Showing results: {(currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(currentPage * itemsPerPage, sortedAppointments.length)} of {sortedAppointments.length}
              </div>
          </div>
      </div>
  );
};

export default AppointmentHistory;