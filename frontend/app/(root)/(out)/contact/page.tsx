import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-stretch justify-start items-center bg-gray-50 p-8">
      {/* Title Section */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-teal-600">Contact Us</h1>
        <p className="text-lg text-gray-500 mt-4">
          We're here to assist you. Feel free to reach out to us through any of the following:
        </p>
      </div>

      {/* Contact Information */}
      <div className="mt-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-teal-500 mb-6">Our Office</h2>
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-teal-400 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.682 0-6.75 2.904-6.75 6.75 0 4.676 6.75 12.75 6.75 12.75s6.75-8.074 6.75-12.75c0-3.846-3.068-6.75-6.75-6.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              />
            </svg>
            <p className="text-gray-600">
              Level 3, Room 309, Robinsons Cybergate, <br />
              Cebu City
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-teal-400 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 4.5l6.72 1.87a2.25 2.25 0 011.68 1.68l1.87 6.72c.18.65-.09 1.33-.65 1.78l-2.48 1.99a16.35 16.35 0 006.72 6.72l1.99-2.48c.45-.56 1.13-.83 1.78-.65l6.72 1.87a2.25 2.25 0 011.68 1.68L21 21.75a2.25 2.25 0 01-1.92 1.92 19.88 19.88 0 01-16.3-16.3 2.25 2.25 0 011.92-1.92z"
              />
            </svg>
            <p className="text-gray-600">(032) 233 9090</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-teal-400 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.5h16.5c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H3.75a1.125 1.125 0 01-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 5.25l8.625 6 8.625-6"
              />
            </svg>
            <p className="text-gray-600">office@medflowclinic.com</p>
          </div>

          {/* Operating Hours */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-teal-400 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4.5 2.25m6.75-4.5c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
              />
            </svg>
            <p className="text-gray-600">Sunday to Saturday, 9 AM - 5 PM</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} MedFlow Clinic. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
