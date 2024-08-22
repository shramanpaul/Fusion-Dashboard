import React, { useState } from "react";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../profile.png";

const Dashboard = () => {
  const [isModulesOpen, setIsModulesOpen] = useState(false);

  const modules = [
    { name: "Academics", icon: "graduation-cap" },
    { name: "Programme and Curriculum", icon: "book-open" },
    { name: "Mess Management", icon: "utensils" },
    { name: "Visitor's Hostel", icon: "home" },
    { name: "Healthcare Center", icon: "clinic-medical" },
    { name: "Scholarship Portal", icon: "money-bill" },
    { name: "Complaint System", icon: "comments" },
    { name: "Placement Cell", icon: "briefcase" },
    { name: "Department", icon: "building" },
    { name: "Gymkhana", icon: "user-graduate" },
    { name: "Hostel Management", icon: "building-user" },
    { name: "Other Academic Procedure", icon: "tasks" }
  ];

  const user = {
    profilePicture: profileImage,
    name: "Harshita",
    department: "CSE - 22BCS176",
    degree: "B.Tech 2022",
    semester: "Sem - 4",
    role: "Student"
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* User Card (Left Sidebar) */}
        <div className="w-full lg:w-1/5 bg-gray-100 p-4">
          <UserCard user={user} />
          <button className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center">
              <span className="bg-red-500 text-white rounded-full px-3 py-1 mr-4">
                29
              </span>
              <FontAwesomeIcon icon={faBell} className="text-gray-600 text-xl" />
            </div>
          </div>

          {/* Announcement Section */}
          <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded-lg">
            <h2 className="text-xl font-medium">Announcement</h2>
            <p>All students are required to submit their project reports by the end of the month.</p>
          </div>

          {/* Notifications Section */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">
              <FontAwesomeIcon icon={faBell} className="text-blue-500 mr-3" />
              Notifications
            </h2>
            {[
              {
                title: "Gymkhana Module",
                description: "Hackbyte event by BitByte Club will be organised in CR102 -by PRIYANSH MEHTA",
              },
              {
                title: "Gymkhana Module",
                description: "A session by BitByte Club will be organised in CR101 -by PRIYANSH MEHTA",
              },
              {
                title: "Gymkhana Module",
                description: "A session by BitByte Club will be organised in CR101 -by PRIYANSH MEHTA",
              },
            ].map((notification, index) => (
              <div key={index} className="flex justify-between items-start p-4 mb-4 bg-gray-100 rounded">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{notification.title}</h3>
                  <p className="text-gray-600">{notification.description}</p>
                  <p className="text-sm text-gray-500 mt-1">2 weeks, 1 day ago</p>
                </div>
                <button className="text-blue-500 text-sm">Mark as Read</button>
              </div>
            ))}
          </div>
          <span className="text-blue-500 cursor-pointer">Load More</span>
        </div>

        {/* Modules Section (Right Sidebar) */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsModulesOpen(!isModulesOpen)}>
              <h2 className="text-xl font-semibold">Modules</h2>
              <FontAwesomeIcon icon={isModulesOpen ? faChevronUp : faChevronDown} className="text-gray-600" />
            </div>
            {isModulesOpen && (
              <div className="grid grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded hover:shadow-lg transition-shadow duration-300">
                    <FontAwesomeIcon icon={module.icon} className="text-blue-500 mb-2" size="2x" />
                    <span>{module.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
