"use client";
import React, { useState } from "react";

interface Appointment {
  id: string;
  date: string; 
  time: string; 
  concern: string;
}

const Page: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const handleCreateAppointment = () => {
    alert("Redirecting to Create Appointment Page...");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <button
          onClick={handleCreateAppointment}
          className="bg-teal-600 rounded p-4 text-white font-semibold hover:bg-teal-700"
        >
          Create Appointment
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold text-teal-700 mb-4">
          Upcoming Appointments
        </h2>

        {appointments.length > 0 ? (
          <ul className="space-y-4">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="p-3 bg-teal-50 rounded border-l-4 border-teal-500"
              >
                <div className="text-sm font-semibold text-gray-700">
                  Concern: {appointment.concern}
                </div>
                <div className="text-sm text-gray-500">
                  Date: {appointment.date} at {appointment.time}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500 text-center">
            You have no upcoming appointments.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
