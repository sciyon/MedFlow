"use client";

import React, { useState, useEffect } from "react";

interface Appointment {
  id: string;
  date: string; // Format: YYYY-MM-DD
  time: string;
  concern: string;
  status: "Pending" | "Approved" | "Denied";
}

// Dummy data structure
const initialAppointments: Appointment[] = [
  { id: "XXXXX-XXXX1", date: "2024-12-20", time: "10:00AM", concern: "Headache and sore throat", status: "Pending" },
  { id: "XXXXX-XXXX2", date: "2024-12-21", time: "10:30AM", concern: "Diarrhea and loss of appetite", status: "Approved" },
  { id: "XXXXX-XXXX3", date: "2024-12-21", time: "11:00AM", concern: "Coughing", status: "Denied" },
  { id: "XXXXX-XXXX4", date: "2024-12-25", time: "09:00AM", concern: "Fever", status: "Approved" },
];

const AppointmentHistory: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [view, setView] = useState<"week" | "month">("week");
  const [calendarView, setCalendarView] = useState<"list" | "calendar">("calendar");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setAppointments(initialAppointments);
  }, []);

  // Get the month name and year for the header
  const getMonthYearHeader = () => {
    return currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Week View: Get 7 days of the week starting on Sunday
  const getWeekDays = () => {
    const days: string[] = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Set to Sunday

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day.toISOString().split("T")[0]); // Format: YYYY-MM-DD
    }
    return days;
  };

  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 8; hour <= 17; hour++) {
      const time12hr = `${hour % 12 === 0 ? 12 : hour % 12}:00${hour < 12 ? "AM" : "PM"}`;
      slots.push(time12hr);
    }
    return slots;
  };

  const renderAppointment = (appt: Appointment) => (
    <div key={appt.id} className="bg-teal-100 p-3 rounded-lg shadow-md hover:bg-teal-200">
      <div className="text-medium font-semibold">{appt.concern}</div>
      <div className="flex items-center gap-2 mt-1">
      {/* Status Circle */}
      <span
        className={`w-3.5 h-3.5 rounded-full ${
          appt.status === 'Approved'
            ? 'bg-green-500'
            : appt.status === 'Pending'
            ? 'bg-yellow-500'
            : 'bg-red-500'
        }`}
      />
      {/* Status Text */}
      <span
        className={`text-sm font-medium ${
          appt.status === 'Approved'
            ? 'text-green-700'
            : appt.status === 'Pending'
            ? 'text-yellow-700'
            : 'text-red-700'
        }`}
      >
        {appt.status}
      </span>
    </div>
      <button className="mt-2 text-white hover:bg-teal-700 bg-teal-500 rounded p-1.5">View</button>
    </div>
  );

  const renderWeekView = () => {
    const weekDays = getWeekDays();
    const timeSlots = generateTimeSlots();

    return (
      <>
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="py-2 px-4 border-b">Time</th>
            {weekDays.map((day, i) => (
              <th key={i} className="py-2 px-4 border-b text-center">
                {new Date(day).getDate()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              <td className="border p-2 text-center font-medium">{time}</td>
              {weekDays.map((day, colIndex) => (
                <td key={colIndex} className="border p-4 align-top h-20">
                  {appointments
                    .filter((appt) => appt.date === day && appt.time.startsWith(time))
                    .map((appt) => renderAppointment(appt))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  const renderMonthView = () => {
    const days = getMonthDays();
    const rows = createRows(days);
    return (
      <>
        <thead>
          <tr className="bg-teal-500 text-white">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
              <th key={i} className="py-2 px-4 border-b text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, colIndex) => (
                <td key={colIndex} className="border p-4 align-top h-20 w-20 text-center">
                  {day ? (
                    <>
                      <div className="font-bold text-sm">{parseInt(day.split("-")[2])}</div>
                      {appointments
                        .filter((appt) => appt.date === day)
                        .map((appt) => renderAppointment(appt))}
                    </>
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  const getMonthDays = () => {
    const days: string[] = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push("");
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDay = new Date(year, month, day);
      days.push(currentDay.toISOString().split("T")[0]);
    }
    return days;
  };

  const createRows = (days: string[]) => {
    const rows: string[][] = [];
    let row: string[] = [];

    days.forEach((day, i) => {
      row.push(day);
      if (row.length === 7 || i === days.length - 1) {
        rows.push(row);
        row = [];
      }
    });
    return rows;
  };

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (view === "week") newDate.setDate(newDate.getDate() - 7);
    else newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === "week") newDate.setDate(newDate.getDate() + 7);
    else newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
          Previous
        </button>
        <div className="text-2xl font-bold">{getMonthYearHeader()}</div>
        <button onClick={handleNext} className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
          Next
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="calendar-view" className="text-teal-700 font-bold">View:</label>
          <select
            id="calendar-view"
            className="p-2 border rounded bg-teal-500 focus:outline-none hover:bg-teal-600"
            value={calendarView}
            onChange={(e) => setCalendarView(e.target.value as "list" | "calendar")}
          >
            <option value="list">List</option>
            <option value="calendar">Calendar</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="view" className="text-teal-700 font-bold">View:</label>
          <select
            id="view"
            className="p-2 border rounded bg-teal-500 focus:outline-none hover:bg-teal-600"
            value={view}
            onChange={(e) => setView(e.target.value as "week" | "month")}
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>

      <table className="w-full text-left border-collapse rounded-lg">
        {view === "week" ? renderWeekView() : renderMonthView()}
      </table>
    </div>
  );
};

export default AppointmentHistory;
