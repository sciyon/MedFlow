"use client";
import React, { useState } from "react";

interface Appointment {
  id: string;
  status: "Upcoming" | "Done" | "Pending";
  date: string;
}

const DoctorDashboard: React.FC = () => {
  const [doctors, setDoctors] = useState<number>(8); // Added state for total doctors
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
  ).length;
  const totalAppointments = appointments.length;

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "long", day: "numeric" };
  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });
  const todayDate = today.toLocaleDateString("en-US", options); 
  const time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay()); 
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); 

  
  const weekAppointments = appointments.filter((appt) => {
    const appointmentDate = new Date(appt.date);
    return appointmentDate >= startOfWeek && appointmentDate <= endOfWeek;
  });

  
  const uniquePatients = new Set(weekAppointments.map((appt) => appt.id));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-grow w-full text-teal-700 gap-2 mb-4">
        <div className="p-6 bg-white rounded-lg w-1/4 shadow-md text-teal-700">
          <h2 className="text-2xl font-semibold mb-2">Patients this week</h2>
          <div className="text-6xl font-bold text-center pt-4">{uniquePatients.size}</div>
        </div>
        <div className="p-6 w-3/4 bg-white rounded-lg shadow-md text-black">
          <div className="text-5xl font-bold text-teal-700 pb-5">
            {todayDate}, {time}
          </div>
          <div className="text-4xl font-bold text-teal-700 pb-2">
            {dayOfWeek}
          </div>
          <div className="text-2xl font-semibold text-teal-500">
            There are {totalUpcoming} upcoming appointments today.
          </div>
        </div>
      </div>

      <div className="p-6 bg-white w-full rounded-lg mb-4 shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-teal-700">Appointment Info</h2>
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
  );
};

export default DoctorDashboard;
