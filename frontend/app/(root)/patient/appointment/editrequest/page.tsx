import React from 'react'

const Page = () => {
  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      <form className="grid grid-cols-6 gap-4 text-[#006D77]">
                
        {/* Request Information */}
        <div className="col-span-6 flex space-x-6">
            {/* Appointment Status */}
            <div className="flex-1">
                <label>Appointment Status*</label>
                <div className="col-span-6 sm:col-span-2 flex items-center space-x-4 border border-gray-300 rounded-md p-4">
                <div className="flex items-center space-x-2">
                    <span className="text-[#006D77]">Pending</span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                </div>
                </div>
            </div>

            {/* Appointment ID */}
            <div className="flex-1">
                <label>Appointment ID</label>
                <h1 className="text-4xl font-semibold text-teal-600 mb-4">XXXX-XXXX</h1>
         </div>


        </div>
        <div className="col-span-6">
          <label>Short Description of Concern *</label>
          <input 
            type="text" 
            placeholder="Checkup / Medical Exam" 
            className="w-full p-4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-6">
          <label>Description of Concern*</label>
          <input 
            type="text" 
            placeholder="Fever for more than 3 days" 
            className="w-full h-24 p-4 border border-gray-300 rounded-md"
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
          />
          <label 
            htmlFor="upload-photo" 
            className="cursor-pointer mt-2 text-[#006D77]"
          >
            Drag and drop a photo or select from files.
          </label>
        </div>

        {/* Calendar */}
        <div className="col-span-6 sm:col-span-2">
          <label className="text-[#006D77]">Select Date</label>
          <input 
            type="date" 
            className="w-full p-4 border border-gray-300 rounded-md"
          />
        </div>

        {/* Preferred Start Time */}
        <div className="col-span-6 sm:col-span-2">
          <label className="text-[#006D77]">Preferred Start Time</label>
          <select 
            className="w-full p-4 border border-gray-300 rounded-md"
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
        <div className="col-span-6 flex justify-end space-x-4">
        <button 
            type="submit" 
            className="bg-yellow-400 hover:bg-teal-500 text-white py-2 px-6 rounded">
            Edit Appointment
        </button>
        <button 
            type="submit" 
            className="bg-red-400 hover:bg-teal-500 text-white py-2 px-6 rounded">
            Cancel Appointment
        </button>
        </div>
        
      </form>
    </div>
  )
}

export default Page
