import React from 'react'

const Page = () => {
  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      {/* Clinic Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Clinic Information</h1>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 sm:col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4">
            <label className="label-input">Clinic Photo</label>
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-sm text-gray-500">Photo Placeholder</p>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <div className="mb-4 border border-gray-300 rounded-lg p-4">
              <label className="block text-sm font-medium text-teal-600">Clinic Name</label>
              <p className="text-lg font-semibold text-gray-800">ABC Clinic</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-gray-300 rounded-lg p-4">
                <label className="block text-sm font-medium text-teal-600">Owner First Name</label>
                <p className="text-lg text-gray-800">Juan</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <label className="block text-sm font-medium text-teal-600">Owner Middle Initial</label>
                <p className="text-lg text-gray-800">J.</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <label className="block text-sm font-medium text-teal-600">Owner Last Name</label>
                <p className="text-lg text-gray-800">Dela Cruz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Address Information</h1>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">Address Line</label>
            <p className="text-lg text-gray-800">Building Number, Street</p>
          </div>
          <div className="col-span-2 border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">Barangay</label>
            <p className="text-lg text-gray-800">Guadalupe</p>
          </div>
          <div className="col-span-2 border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">City</label>
            <p className="text-lg text-gray-800">Cebu City</p>
          </div>
          <div className="col-span-2 border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">Province</label>
            <p className="text-lg text-gray-800">Cebu</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Contact Information</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">Mobile Number</label>
            <p className="text-lg text-gray-800">09171234568</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">Landline Number</label>
            <p className="text-lg text-gray-800">123-4567</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <label className="block text-sm font-medium text-teal-600">Email Address</label>
            <p className="text-lg text-gray-800">emailaddress@yahoo.com</p>
          </div>
        </div>
      </section>

      {/* Other Information */}
      <section className="mb-8">
        <h1 className="text-4xl font-semibold text-teal-600 mb-4">Other Information</h1>
        <div className="border border-gray-300 rounded-lg p-4">
          <label className="block text-sm font-medium text-teal-600">Max Capacity</label>
          <p className="text-lg text-gray-800">1</p>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg shadow-md">
          Save
        </button>
      </div>
    </div>
  )
}

export default Page
