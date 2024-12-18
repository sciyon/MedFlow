"use client";
import React, { useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

interface Appointment {
  id: string;
  status: "Upcoming" | "Done" | "Finished";
}

const DoctorDashboard: React.FC = () => {
  const [patients, setPatients] = useState<number>(18); // Mock total patients
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "1", status: "Upcoming" },
    { id: "2", status: "Upcoming" },
    { id: "3", status: "Done" },
    { id: "4", status: "Done" },
    { id: "5", status: "Finished" },
    { id: "6", status: "Finished" },
    { id: "7", status: "Finished" },
  ]);

  const totalUpcoming = appointments.filter(
    (appt) => appt.status === "Upcoming"
  ).length;
  const totalDone = appointments.filter((appt) => appt.status === "Done").length;
  const totalFinished = appointments.filter(
    (appt) => appt.status === "Finished"
  ).length;
  const totalAppointments = appointments.length;
  const pieData = {
    labels: ["Upcoming", "Done", "Finished"],
    datasets: [
      {
        label: "Appointments",
        data: [totalUpcoming, totalDone, totalFinished],
        backgroundColor: ["#22D3EE", "#4ADE80", "#F472B6"],
        borderColor: ["#14B8A6", "#22C55E", "#EC4899"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Total Patients
          </h2>
          <div className="text-4xl font-bold text-teal-600">{patients}</div>
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
              <div className="text-lg font-bold">Upcoming</div>
              <div className="text-3xl font-semibold">{totalUpcoming}</div>
            </div>
            <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
              <div className="text-lg font-bold">Finished</div>
              <div className="text-3xl font-semibold">{totalFinished}</div>
            </div>
            <div className="bg-teal-500 text-white rounded-md p-4 w-24 shadow-md">
              <div className="text-lg font-bold">Total</div>
              <div className="text-3xl font-semibold">{totalAppointments}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Appointment Statistics
        </h2>
        <div className="flex justify-center">
          <div className="w-1/2">
            {/* <Pie data={pieData} /> */}
            erm didnt install dependencies kay basin nakoy maguba
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
