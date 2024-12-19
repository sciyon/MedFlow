"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/utilities/axios"; // Make sure this handles the JWT token
import { RootState } from "@/lib/store"; // Assuming this is the path to your store

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

const Page: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const userId = useSelector((state: RootState) => state.user.userId); // Access the logged-in user's ID

  useEffect(() => {
    if (!userId) return; // If no user ID, skip the API call

    const fetchAppointments = async () => {
      try {
        const response = await axiosInstance.get(`/appointments/patient/${userId}`, {
          headers: {
            Authorization: `Bearer ${document.cookie.split('=')[1]}`, // Extract the token from cookies
          },
        });

        // Filter appointments to only include pending ones with future dates
        const filteredAppointments = response.data.filter((appointment: Appointment) => {
          const currentDate = new Date();
          const appointmentDate = new Date(appointment.date_appointment);

          // Check if the status is 'Pending' and the appointment date is in the future
          return appointment.status === "Pending" && appointmentDate > currentDate;
        });

        setAppointments(filteredAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [userId]); // Run whenever the userId changes

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
                  Concern: {appointment.title}
                </div>
                <div className="text-sm text-gray-500">
                  Date: {appointment.date_appointment}
                </div>
                <div className="text-sm text-gray-500">
                  Status: {appointment.status}
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
