import React from 'react'

const Page = () => {
  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      <form className="grid grid-cols-6 gap-4 text-[#006D77]">
        {/* Upload Photo */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600">Clinic Information</h1>
        <div className="col-span-6 sm:col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4">
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

        {/* Clinic Information */}
        <div className="col-span-6 sm:col-span-4 grid grid-cols-6 gap-4">
          <div className="col-span-6">
            <label>Clinic Name *</label>
            <input type="text" placeholder="Clinic Name" className="input-field w-full" />
          </div>
          <div className="col-span-2">
            <label>Owner First name</label>
            <input type="text" placeholder="Juan" className="input-field w-full" />
          </div>
          <div className="col-span-2">
            <label>Owner Middle Initial</label>
            <input type="text" placeholder="J." className="input-field w-full" />
          </div>
          <div className="col-span-2">
            <label>Owner Last Name</label>
            <input type="text" placeholder="Dela Cruz" className="input-field w-full" />
          </div>
        </div>

        {/* Address Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mt-4">Address Information</h1>
        <div className="col-span-6">
          <label>Address Line *</label>
          <input type="text" placeholder="Building Number, Street" className="input-field w-full" />
        </div>
        <div className="col-span-2">
          <label>Barangay *</label>
          <input type="text" placeholder="Guadalupe" className="input-field w-full" />
        </div>
        <div className="col-span-2">
          <label>City *</label>
          <input type="text" placeholder="Cebu City" className="input-field w-full" />
        </div>
        <div className="col-span-2">
          <label>Province *</label>
          <input type="text" placeholder="Cebu" className="input-field w-full" />
        </div>

        {/* Contact Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mt-4">Contact Information</h1>
        <div className="col-span-6 grid grid-cols-3 gap-4">
          <div>
            <label>Mobile Number *</label>
            <input type="text" placeholder="09171234568" className="input-field w-full" />
          </div>
          <div>
            <label>Landline Number *</label>
            <input type="text" placeholder="123-4567" className="input-field w-full" />
          </div>
          <div>
            <label>Email Address *</label>
            <input type="email" placeholder="emailaddress@yahoo.com" className="input-field w-full" />
          </div>
        </div>

        {/* Other Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mt-4">Other Information</h1>
        <div className="col-span-6 grid grid-cols-3 gap-4">
          <div>
            <label>Max Capacity (how many appointments it can handle at a single time)</label>
            <input type="email" placeholder="1" className="input-field " />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-6 flex justify-end">
          <button type="submit" className="bg-violet-400 hover:bg-violet-500 text-white py-3 px-6 rounded">
            Edit Clinic
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
