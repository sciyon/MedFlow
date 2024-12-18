"use client";
import React, { useState } from "react";

interface Appointment {
  id: string;
  status: "Upcoming" | "Done" | "Finished" | "Denied";
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
    { id: "6", status: "Denied" },
  ]);

  const totalUpcoming = appointments.filter(
    (appt) => appt.status === "Upcoming"
  ).length;
  const totalDone = appointments.filter((appt) => appt.status === "Done").length;
  const totalFinished = appointments.filter(
    (appt) => appt.status === "Finished"
  ).length;
  const totalDenied = appointments.filter(
    (appt) => appt.status === "Denied"
  ).length;
  const totalAppointments = appointments.length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-teal-600 mb-2">
            Patients
          </h2>
          <div className="text-5xl font-bold text-teal-600 text-center">{patients}</div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-teal-600 mb-2 ">
            Doctors
          </h2>
          <div className="text-5xl font-bold text-teal-600 text-center">{doctors}</div>
        </div>
      </div>

     
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          Appointment Info
        </h2>
        <div className="flex flex-grow gap-4 text-center">
          <div className="bg-green-400 text-white rounded-md p-4 w-1/4 shadow-md">
            <div className="text-lg font-bold">Done</div>
            <div className="text-3xl font-semibold">{totalDone}</div>
          </div>
          <div className="bg-blue-400 text-white rounded-md p-4 w-1/4 shadow-md">
            <div className="text-lg font-bold">Upcoming</div>
            <div className="text-3xl font-semibold">{totalUpcoming}</div>
          </div>
          <div className="bg-yellow-400 text-white rounded-md p-4 w-1/4 shadow-md">
            <div className="text-lg font-bold">Finished</div>
            <div className="text-3xl font-semibold">{totalFinished}</div>
          </div>
          <div className="bg-red-400 text-white rounded-md p-4 w-1/4 shadow-md">
            <div className="text-lg font-bold">Denied</div>
            <div className="text-3xl font-semibold">{totalDenied}</div>
          </div>
          <div className="bg-teal-500 text-white rounded-md p-4 w-1/4 shadow-md">
            <div className="text-lg font-bold">Total</div>
            <div className="text-3xl font-semibold">{totalAppointments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantDashboard;
