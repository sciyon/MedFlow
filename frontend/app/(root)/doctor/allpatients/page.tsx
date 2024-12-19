import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col">
        <div className="flex justify-between items-center mb-6">
            <div className="relative">
            <input 
                type="text" 
                placeholder="Search" 
                className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <span className="absolute top-2/4 transform -translate-y-2/4 right-3 text-gray-400">
                🔍
            </span>
            </div>
            <button 
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-500">
            Filter
            </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full border-collapse">
            <thead className="bg-gray-100 border-b">
                <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Patient ID Number</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Age</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date of Birth</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                <tr className="even:bg-gray-50 hover:bg-teal-100">
                <td className="px-6 py-4 text-sm text-gray-800">2001010101</td>
                <td className="px-6 py-4 text-sm text-gray-800">Sam Nico F Antiporto</td>
                <td className="px-6 py-4 text-sm text-gray-800">38</td>
                <td className="px-6 py-4 text-sm text-gray-800">01/01/2001</td>
                <td className="px-6 py-4 text-sm text-gray-800">0912-345-6789</td>
                </tr>
                <tr className="bg-teal-100 hover:bg-teal-200">
                <td className="px-6 py-4 text-sm text-gray-800">2001010101</td>
                <td className="px-6 py-4 text-sm text-gray-800">Sam Nico F Antiporto</td>
                <td className="px-6 py-4 text-sm text-gray-800">38</td>
                <td className="px-6 py-4 text-sm text-gray-800">01/01/2001</td>
                <td className="px-6 py-4 text-sm text-gray-800">0912-345-6789</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-2">
            <button className="px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">1</button>
            <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-teal-500 hover:text-white">2</button>
            <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-teal-500 hover:text-white">...</button>
            <button className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-teal-500 hover:text-white">35</button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-2">Page 1 of 35</p>
</div>

  )
}

export default page