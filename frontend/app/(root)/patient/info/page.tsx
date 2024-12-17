import React from 'react'

const Page = () => {
  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      <form className="grid grid-cols-6 gap-4 text-[#006D77]">
        {/* Upload Photo */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Basic Information</h1>
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

        {/* Patient Information */}
        <div className="col-span-6 sm:col-span-4 grid grid-cols-6 gap-4">
          {/* Row 1 */}
          <div className="col-span-2">
            <label>First Name *</label>
            <input type="text" placeholder="Firstname" className="input-field w-full" />
          </div>
          <div className="col-span-2">
            <label>Last Name *</label>
            <input type="text" placeholder="Lastname" className="input-field w-full" />
          </div>
          <div className="col-span-2">
            <label>Middle Initial</label>
            <input type="text" placeholder="M.I." className="input-field w-full" />
          </div>

          {/* Row 2 */}
          <div className="col-span-1">
            <label>Birth Day *</label>
            <input type="text" placeholder="01" className="input-field w-full" />
          </div>
          <div className="col-span-2">
            <label>Birth Month *</label>
            <select className="input-field w-full">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="col-span-1">
            <label>Birth Year *</label>
            <input type="text" placeholder="2000" className="input-field w-full" />
          </div>
          <div className="col-span-1">
            <label>Age *</label>
            <input type="text" placeholder="24" className="input-field w-full" />
          </div>
          <div className="col-span-1">
            <label>Sex *</label>
            <select className="input-field w-full">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>


        {/* Address Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Address Information</h1>
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
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Contact Information</h1>
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

        {/* Insurance Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Insurance Information</h1>
        <div className="col-span-6">
          <label className="flex items-center text-[#006D77]">
            <input 
              type="checkbox" 
              name="insurance" 
              className="mr-2" 
            />
            <span className="ml-2">I have insurance</span>
          </label>
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-4">
          <div>
            <label>Insurance Provider *</label>
            <input type="text" className="input-field w-full" />
          </div>
          <div>
            <label>Policy Number *</label>
            <input type="text" className="input-field w-full" />
          </div>
        </div>

        {/* Emergency Contact */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Emergency Contact</h1>
        <div className="col-span-6 grid grid-cols-3 gap-4">
          <div>
            <label>First Name *</label>
            <input type="text" placeholder="Firstname" className="input-field w-full" />
          </div>
          <div>
            <label>Last Name *</label>
            <input type="text" placeholder="Lastname" className="input-field w-full" />
          </div>
          <div>
            <label>Relationship to Person</label>
            <input type="text" placeholder="Partner" className="input-field w-full" />
          </div>
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

        {/* Submit Button */}
        <div className="col-span-6 flex justify-end">
          <button type="submit" className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-6 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
