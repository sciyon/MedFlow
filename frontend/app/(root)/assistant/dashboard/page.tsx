"use client";
import React, { useState } from "react";

interface Appointment {
  id: string;
  status: "Upcoming" | "Done" | "Finished";
}

const AssistantDashboard: React.FC = () => {
  const [patients, setPatients] = useState<number>(12);
  const [doctors, setDoctors] = useState<number>(8);
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "1", status: "Upcoming" },
    { id: "2", status: "Upcoming" },
    { id: "3", status: "Done" },
    { id: "4", status: "Finished" },
    { id: "5", status: "Finished" },
  ]);
  const totalUpcoming = appointments.filter(
    (appt) => appt.status === "Upcoming"
  ).length;
  const totalDone = appointments.filter((appt) => appt.status === "Done").length;
  const totalFinished = appointments.filter(
    (appt) => appt.status === "Finished"
  ).length;
  const totalAppointments = appointments.length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">
        Assistant Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Total Patients
          </h2>
          <div className="text-4xl font-bold text-teal-600">{patients}</div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Total Doctors
          </h2>
          <div className="text-4xl font-bold text-teal-600">{doctors}</div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Appointment Info
        </h2>
        <div className="flex flex-wrap gap-4 text-center">
          <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
            <div className="text-lg font-bold">Done</div>
            <div className="text-3xl font-semibold">{totalDone}</div>
          </div>
          <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
            <div className="text-lg font-bold">Incoming</div>
            <div className="text-3xl font-semibold">{totalUpcoming}</div>
          </div>
          <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
            <div className="text-lg font-bold">Pending</div>
            <div className="text-3xl font-semibold">{0}</div>
          </div>
          <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
            <div className="text-lg font-bold">Denied</div>
            <div className="text-3xl font-semibold">{0}</div>
          </div>
          <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
            <div className="text-lg font-bold">Total</div>
            <div className="text-3xl font-semibold">{totalAppointments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantDashboard;
