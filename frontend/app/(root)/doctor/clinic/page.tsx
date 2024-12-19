import React from 'react';

const Page = () => {
  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      {/* Clinic Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Clinic Information</h1>
        <div className="grid grid-cols-6 gap-4">
          {/* Upload Photo */}
          <div className="col-span-6 sm:col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4">
            <label className="text-center text-[#006D77]">Upload Photo</label>
            <input type="file" accept="image/*" className="hidden" id="upload-photo" />
            <label htmlFor="upload-photo" className="cursor-pointer mt-2 text-[#006D77]">
              Drag and drop a photo or select from files.
            </label>
          </div>

          {/* Clinic Details */}
          <div className="col-span-6 sm:col-span-4 grid grid-cols-6 gap-4">
            <div className="col-span-6 text-teal-600">
              <label>Clinic Name *</label>
              <input type="text" placeholder="Clinic Name" className="input-field w-full" />
            </div>
            <div className="col-span-2 text-teal-600">
              <label>Owner First Name</label>
              <input type="text" placeholder="Juan" className="input-field w-full" />
            </div>
            <div className="col-span-2 text-teal-600">
              <label>Owner Middle Initial</label>
              <input type="text" placeholder="J." className="input-field w-full" />
            </div>
            <div className="col-span-2 text-teal-600">
              <label>Owner Last Name</label>
              <input type="text" placeholder="Dela Cruz" className="input-field w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Address Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Address Information</h1>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 text-teal-600">
            <label>Address Line *</label>
            <input type="text" placeholder="Building Number, Street" className="input-field w-full" />
          </div>
          <div className="col-span-2 text-teal-600">
            <label>Barangay *</label>
            <input type="text" placeholder="Guadalupe" className="input-field w-full" />
          </div>
          <div className="col-span-2 text-teal-600">
            <label>City *</label>
            <input type="text" placeholder="Cebu City" className="input-field w-full" />
          </div>
          <div className="col-span-2 text-teal-600">
            <label>Province *</label>
            <input type="text" placeholder="Cebu" className="input-field w-full" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Contact Information</h1>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="text-teal-600">
            <label>Mobile Number *</label>
            <input type="text" placeholder="09171234568" className="input-field w-full" />
          </div>
          <div className="text-teal-600">
            <label>Landline Number *</label>
            <input type="text" placeholder="123-4567" className="input-field w-full" />
          </div>
          <div className="text-teal-600">
            <label>Email Address *</label>
            <input type="email" placeholder="emailaddress@yahoo.com" className="input-field w-full" />
          </div>
        </div>
      </section>

      {/* Other Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Other Information</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-teal-600">
            <label>Max Capacity (how many appointments it can handle at a single time)</label>
            <input type="number" placeholder="1" className="input-field w-full" />
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex justify-end">
        <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg shadow-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
