"use client";
import React, { useState } from "react";

interface Appointment {
  id: string;
  status: "Upcoming" | "Done" | "Pending"; 
  date: string;
}

const DoctorDashboard: React.FC = () => {
  const [patients, setPatients] = useState<number>(18);
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "1", status: "Upcoming", date: "2024-12-18" },
    { id: "2", status: "Upcoming", date: "2024-12-18" },
    { id: "3", status: "Done", date: "2024-12-17" },
    { id: "4", status: "Done", date: "2024-12-17" },
    { id: "5", status: "Pending", date: "2024-12-28" },
    { id: "6", status: "Pending", date: "2024-12-28" },  
    { id: "7", status: "Pending", date: "2024-12-28" },  
  ]);

  const totalUpcoming = appointments.filter(
    (appt) => appt.status === "Upcoming"
  ).length;
  const totalDone = appointments.filter((appt) => appt.status === "Done").length;
  const totalPending = appointments.filter(
    (appt) => appt.status === "Pending"
  ).length;  // Renamed from "Finished" to "Pending"
  const totalAppointments = appointments.length;

  // Get today's date
  const today = new Date().toISOString().split("T")[0];

  // Filter appointments for today
  const todaysAppointments = appointments.filter(
    (appt) => appt.date === today
  ).length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-grow w-full text-teal-700 gap-2 mb-6">
        <div className="p-6 bg-white rounded-lg w-1/4 shadow-md">
          <h2 className="text-3xl font-semibold mb-2">Total Patients</h2>
          <div className="text-6xl font-bold text-teal-700 text-center pt-4">
            {patients}
          </div>
        </div>
        <div className="p-6 bg-white w-3/4 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Appointment Info</h2>
          <div className="flex flex-grow gap-4 w-full text-center">
            <div className="bg-green-400 text-white rounded-md p-4 w-1/4 shadow-md">
              <div className="text-lg font-bold">Done</div>
              <div className="text-3xl font-semibold">{totalDone}</div>
            </div>
            <div className="bg-blue-400 text-white rounded-md p-4 w-1/4 shadow-md">
              <div className="text-lg font-bold">Upcoming</div>
              <div className="text-3xl font-semibold">{totalUpcoming}</div>
            </div>
            <div className="bg-yellow-400 text-white rounded-md p-4 w-1/4 shadow-md">
              <div className="text-lg font-bold">Pending</div> 
              <div className="text-3xl font-semibold">{totalPending}</div>
            </div>
            <div className="bg-teal-500 text-white rounded-md p-4 w-1/4 shadow-md">
              <div className="text-lg font-bold">Total</div>
              <div className="text-3xl font-semibold">{totalAppointments}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md text-black">
        <h2 className="text-3xl font-semibold mb-4 text-teal-700">Appointments</h2>
        <div className="flex justify-center">
          <div className="text-6xl font-bold text-teal-700 pb-5">{today}</div>
        </div>
        <div className="flex justify-center">
          <div className="text-2xl font-semibold text-teal-600">
            There are {todaysAppointments} appointments for you today.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
