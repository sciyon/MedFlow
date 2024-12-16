import React, { useState, useEffect } from 'react';

interface Appointment {
  id: string;
  date: string;
  time: string;
  concern: string;
  status: 'Pending' | 'Approved' | 'Denied';
}

//Dummy data structure
const initialAppointments: Appointment[] = [
  { id: 'XXXXX-XXXX1', date: '12/20/24', time: '10:00AM', concern: 'Headache and sore throat', status: 'Pending' },
  { id: 'XXXXX-XXXX2', date: '12/21/24', time: '10:30AM', concern: 'Diarrhea and loss of appetite', status: 'Approved' },
  { id: 'XXXXX-XXXX3', date: '12/21/24', time: '10:30AM', concern: 'Diarrhea and loss of appetite', status: 'Denied' },
  { id: 'XXXXX-XXXX4', date: '12/21/24', time: '10:30AM', concern: 'Headache and sore throat', status: 'Approved' },
];

const appointmenthistory: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]); // Fetched data
  const [searchId, setSearchId] = useState<string>(''); // Search query
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Simulate fetching data (replace with actual API call)
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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-teal-700">Appointment History</h2>

      {/* Search and Sort */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-teal-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Time</th>
            <th className="py-2 px-4 border">Concern</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{appointment.id}</td>
              <td className="py-2 px-4 border">{appointment.date}</td>
              <td className="py-2 px-4 border">{appointment.time}</td>
              <td className="py-2 px-4 border">{appointment.concern}</td>
              <td className="py-2 px-4 border">
                <span
                  className={`py-1 px-2 rounded-full text-sm ${
                    appointment.status === 'Approved'
                      ? 'text-green-700 bg-green-100'
                      : appointment.status === 'Pending'
                      ? 'text-yellow-700 bg-yellow-100'
                      : 'text-red-700 bg-red-100'
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded-full text-sm ${
              currentPage === index + 1
                ? 'bg-teal-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Result Count */}
      <div className="text-sm text-gray-600 text-center mt-2">
        Showing results: {(currentPage - 1) * itemsPerPage + 1} -{' '}
        {Math.min(currentPage * itemsPerPage, appointments.length)} of{' '}
        {appointments.length}
      </div>
    </div>
  );
};

export default appointmenthistory;