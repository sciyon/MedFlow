"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/utilities/axios"; // Make sure this handles the JWT token
import { RootState } from "@/lib/store"; // Assuming this is the path to your store

const Page: React.FC = () => {
  // State for form fields
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("9:00 AM");
  const [image, setImage] = useState("https://www.sapnamed.com/wp-content/uploads/2021/03/difference-between-headaches-and-migraines-1024x683.jpg"); // Hardcoded image URL

  const userId = useSelector((state: RootState) => state.user.userId); // Get user ID from Redux

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!userId) {
      alert("User is not logged in.");
      return;
    }
  
    // Combine date and preferred time
    const [hours, minutes] = preferredTime.split(":");
    const [minute, period] = minutes.split(" "); // Split AM/PM
    const timeString = `${hours}:${minute} ${period}`;
  
    // Create a date string with the selected date and time
    const appointmentDate = new Date(`${selectedDate} ${timeString}`);
  
    // Check if the date was valid and properly created
    if (isNaN(appointmentDate.getTime())) {
      alert("Invalid date or time format.");
      return;
    }
  
    const payload = {
      title: shortDescription,
      description,
      images: image,
      date_appointment: appointmentDate.toISOString(), // Converts to "2024-06-22T10:00:00Z" format
      patient_id: userId,
    };
    console.log(payload)
  
    try {
      // Send the request to the backend
      const response = await axiosInstance.post("/appointments/create", payload, {
        headers: {
          Authorization: `Bearer ${document.cookie.split("=")[1]}`, // JWT token from cookies
        },
      });
  
      console.log("Appointment request submitted:", response.data);
      alert("Appointment requested successfully!");
    } catch (error) {
      console.error("Error requesting appointment:", error);
      alert("Failed to request appointment. Please try again.");
    }
  };
  

  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      <form className="grid grid-cols-6 gap-4 text-[#006D77]" onSubmit={handleSubmit}>
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">
          Request Appointment
        </h1>

        {/* Request Information */}
        <div className="col-span-6">
          <label>Short Description of Concern *</label>
          <input
            type="text"
            placeholder="Checkup / Medical Exam"
            className="w-full p-4 border border-gray-300 rounded-md"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </div>
        <div className="col-span-6">
          <label>Description of Concern*</label>
          <input
            type="text"
            placeholder="Fever for more than 3 days"
            className="w-full h-24 p-4 border border-gray-300 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Upload Image */}
        <div className="col-span-6 sm:col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4 ">
          <label className="text-center text-[#006D77]">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload-photo"
            // You can add image upload logic here later
          />
          <label htmlFor="upload-photo" className="cursor-pointer mt-2 text-[#006D77]">
            Drag and drop a photo or select from files.
          </label>
        </div>

        {/* Calendar */}
        <div className="col-span-6 sm:col-span-2">
          <label className="text-[#006D77]">Select Date</label>
          <input
            type="date"
            className="w-full p-4 border border-gray-300 rounded-md"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Preferred Start Time */}
        <div className="col-span-6 sm:col-span-2">
          <label className="text-[#006D77]">Preferred Start Time</label>
          <select
            className="w-full p-4 border border-gray-300 rounded-md"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 NN">12:00 NN</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
          </select>
        </div>

        {/* Button */}
        <div className="col-span-6 flex justify-end">
          <button type="submit" className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-6 rounded">
            Request Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
