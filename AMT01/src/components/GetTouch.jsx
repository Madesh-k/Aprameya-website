import React from "react";

function GetTouch() {
  return (
    <div
      id="getTouch"
      className="w-full max-w-7xl bg-blue-100 p-8 rounded-lg mx-auto m-8"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Join Our Community
        </h1>
        <form className="space-y-6">
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="flex items-center">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
              <button
                type="button"
                className="ml-4 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send OTP
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="phone"
            >
              Contact Phone
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
              />
              <button
                type="button"
                className="ml-4 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send OTP
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-medium mb-2 text-gray-700"
              htmlFor="reason"
            >
              Reason for Joining
            </label>
            <textarea
              id="reason"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              placeholder="Enter your reason for joining"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetTouch;
