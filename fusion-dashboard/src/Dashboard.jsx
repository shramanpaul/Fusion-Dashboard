import React from "react";
import profileImage from "./profile.png"; // Updated with the new file name

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* User Card (Left Sidebar) */}
      <aside className="w-64 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          {/* User Photo */}
          <img
            src={profileImage} // Ensure this points to the imported image
            alt="User Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-lg font-semibold mt-4">Harshitha</h2>
          <p className="text-sm text-gray-600">CSE - 22BCS220</p>
          <p className="text-sm text-gray-600">
            B.Tech 2022
            <br />
            Sem - 5
          </p>
        </div>
      </aside>

      {/* Notifications and Announcements (Middle Section) */}
      <main className="flex-1 p-6">
        <header className="bg-gray-800 text-white p-4 text-center mb-6">
          <h1>Dashboard</h1>
        </header>
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          <div className="mb-4">
            <h4 className="font-bold">Gymkhana Module</h4>
            <p>
              A session by BitByte Club will be organised in CR101 - by PRIYANSH
              MEHTA
            </p>
          </div>
          <div>
            <h4 className="font-bold">Announcement</h4>
            <p>Semester 5 exams will begin from 1st December 2024.</p>
          </div>
        </section>
      </main>

      {/* Modules (Right Sidebar) */}
      <aside className="w-64 p-4">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Modules</h3>
          <nav className="sidebar-menu">
            <ul className="list-none p-0">
              <li className="mb-2">
                <a
                  href="#academics"
                  className="block text-gray-800 bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                >
                  Academics
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#curriculum"
                  className="block text-gray-800 bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                >
                  Programme and Curriculum
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#mess"
                  className="block text-gray-800 bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                >
                  Mess Management
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </aside>
    </div>
  );
};

export default Dashboard;
