import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* <Navbar /> */}
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4 flex flex-col">
        {/* Profile Section */}
        <div className="bg-white p-4 mb-4 rounded shadow">
          <div className="h-20 w-20 bg-gray-300 rounded-full mb-4 mx-auto"></div>
          <div className="text-center">
            <p className="text-lg font-semibold">OM PANDEY</p>
            <p className="text-gray-600">CSE - 22BCS176</p>
            <p className="text-gray-600">B.Tech 2022</p>
            <p className="text-gray-600">Sem - 4</p>
            <p className="text-gray-600">Student</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full">
            View Professional Profile
          </button>
        </div>

        {/* Modules Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Modules</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Academics",
              "Programme and Curriculum",
              "Mess Management",
              "Visitor's Hostel",
              "Healthcare Center",
              "Scholarship Portal",
              "Complaint System",
              "Placement Cell",
              "Department",
              "Gymkhana",
            ].map((module) => (
              <button
                key={module}
                className="bg-gray-200 p-2 rounded text-center hover:bg-gray-300"
              >
                {module}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-50 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center">
            <span className="bg-red-500 text-white rounded-full px-3 py-1 mr-4">
              29
            </span>
            <div className="text-gray-600">OM PANDEY</div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            <FontAwesomeIcon icon={faBell} className="text-blue-500 mr-3" />
            Notifications
          </h2>
          {[
            {
              title: "Gymkhana Module",
              description:
                "Hackbyte event by BitByte Club will be organised in CR102 -by PRIYANSH MEHTA",
            },
            {
              title: "Gymkhana Module",
              description:
                "A session by BitByte Club will be organised in CR101 -by PRIYANSH MEHTA",
            },
          ].map((notification, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-4 mb-4 bg-gray-100 rounded"
            >
              <div>
                <h3 className="text-lg font-semibold">{notification.title}</h3>
                <p className="text-gray-600">{notification.description}</p>
                <p className="text-sm text-gray-500 mt-1">2 weeks, 1 day ago</p>
              </div>
              <button className="text-blue-500">Mark as Read</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
