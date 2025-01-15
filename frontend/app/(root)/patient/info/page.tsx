import React from 'react'

const Page = () => {
  return (
    <div className="m-5 bg-white p-5 rounded-lg shadow-lg">
      <form className="grid grid-cols-6 gap-4 text-[#006D77]">
        {/* Upload Photo */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4 font-gabarito">Basic Information</h1>
        <div className="col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4">
          <label className="input-label">Upload Photo</label>
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
        <div className="col-span-4 grid gap-4 grid-cols-4">
          <div className="grid grid-cols-5 col-span-4 gap-4">
            <div className="col-span-2 gap-4">
              <label className='input-label'>First Name *</label>
              <input type="text" placeholder="Firstname" className="input-field w-full" />
            </div>
            <div className="col-span-2">
              <label className='input-label'>Last Name *</label>
              <input type="text" placeholder="Lastname" className="input-field w-full" />
            </div>
            <div className="col-span-1">
              <label className='input-label'>Middle Name</label>
              <input type="text" placeholder="Middle Name" className="input-field w-full" />
            </div>
          </div>
          <div className="grid grid-cols-5 col-span-4 gap-4">
            <div className="col-span-1">
              <label className='input-label'>Birth Day *</label>
              <input type="text" placeholder="01" className="input-field w-full" />
            </div>
            <div className="col-span-1">
              <label className='input-label'>Birth Month *</label>
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
              <label className='input-label'>Birth Year *</label>
              <input type="text" placeholder="2000" className="input-field w-full" />
            </div>
            <div className="col-span-1">
              <label className='input-label'>Age *</label>
              <input type="text" placeholder="24" className="input-field w-full" />
            </div>
            <div className="col-span-1">
              <label className='input-label'>Sex *</label>
              <select className="input-field w-full">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>


        {/* Address Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mt-4 font-gabarito">Address Information</h1>
        <div className="col-span-3 flex flex-col">
          <label>Address Line *</label>
          <input type="text" placeholder="Building Number, Street" className="input-field" />
        </div>
        <div className="col-span-1 flex flex-col">
          <label>Barangay *</label>
          <input type="text" placeholder="Guadalupe" className="input-field" />
        </div>
        <div className="col-span-1 flex flex-col">
          <label>City *</label>
          <input type="text" placeholder="Cebu City" className="input-field" />
        </div>
        <div className="col-span-1 flex flex-col">
          <label>Province *</label>
          <input type="text" placeholder="Cebu" className="input-field " />
        </div>

        {/* Contact Information */}
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mt-4 font-gabarito">Contact Information</h1>
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
        {/* <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Insurance Information</h1>
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
        </div> */}

        {/* Emergency Contact */}
        {/* <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Emergency Contact</h1>
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
        </div> */}

        {/* Submit Button */}
        <div className="col-span-6 flex justify-end">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
