import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-xl">
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-700">
          MedFlow
        </h1>
        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-700">
          Change Password
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="currentPassword"
              className="block text-gray-700 text-lg mb-2"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Enter your current password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 text-lg mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-lg mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your new password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-white py-3 text-lg font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
