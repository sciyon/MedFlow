"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utilities/axios";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface Appointment {
    id: number;
    date_appointment: string;
    time_appointment: string;
    title: string;
    status: string; // Changed to string to match the backend
}

const CalendarView: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const userId = useSelector((state: RootState) => state.user.userId);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;
        const fetchAppointments = async () => {
            try {
                const response = await axiosInstance.get(`/appointments/all`, {
                    headers: {
                        Authorization: `Bearer ${document.cookie.split("=")[1]}`,
                    },
                });
                const formattedAppointments = response.data.map((appt: any) => {
                    const date = new Date(appt.date_appointment);
                    const formattedDate = date.toISOString().split("T")[0];
                    const formattedTime = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                    }).substring(0, 5);
                    return {
                        ...appt,
                        date_appointment: formattedDate,
                        time_appointment: formattedTime,
                        status: appt.status.toUpperCase()  // Ensure status is in uppercase
                    };
                });
                setAppointments(formattedAppointments);
                setError(null);
            } catch (error: any) {
                console.error("Error fetching appointments:", error);
                setError("Error fetching appointments. Please try again later.");
            }
        };
        fetchAppointments();
    }, [userId]);

    const getMonthDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
        const daysArray = Array.from({ length: totalCells }, (_, index) =>
            index >= firstDayOfMonth && index < firstDayOfMonth + daysInMonth
                ? index - firstDayOfMonth + 1
                : null
        );
        return daysArray;
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };


    const renderAppointmentsForDay = (day: number | null) => {
        if (!day) return null;

        const dateString = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
        )
            .toISOString()
            .split("T")[0];


        const dailyAppointments = appointments.filter(
            (appt) => appt.date_appointment === dateString
        );

        return dailyAppointments.map((appt) => (
            <div
                key={appt.id}
                className={`bg-teal-100 p-1 rounded text-xs font-semibold mb-1`}
            >
                {appt.time_appointment} -
                <span className={`font-semibold
                 ${appt.status === "APPROVED" ? "text-green-700" :
                     appt.status === "PENDING" ? "text-yellow-700" :
                         "text-red-700"
                    }`}
                >
                    {appt.title}
                </span>
            </div>
        ));
    };



    return (
        <div className="p-5">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrevMonth}
                    className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                    Previous
                </button>
                <h2 className="text-lg font-semibold">
                    {currentDate.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                    })}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                    Next
                </button>
            </div>

            <table className="w-full border-collapse border border-teal-600">
                <thead>
                <tr className="bg-teal-500 text-white">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                        <th key={i} className="py-2 px-4 border border-teal-600  text-center w-[14.285%]">
                            {day}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array.from({ length: getMonthDays().length / 7 }, (_, rowIndex) => (
                    <tr key={rowIndex}>
                        {getMonthDays()
                            .slice(rowIndex * 7, rowIndex * 7 + 7)
                            .map((day, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border border-teal-600 text-black align-top p-2 h-20 w-[14.285%]"
                                >
                                    {day && (
                                        <>
                                            <div className="font-bold text-sm mb-1">{day}</div>
                                            {renderAppointmentsForDay(day)}
                                        </>
                                    )}
                                </td>
                            ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalendarView;