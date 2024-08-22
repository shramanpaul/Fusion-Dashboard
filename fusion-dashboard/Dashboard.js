import React from "react";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <aside className="dashboard-sidebar">
        <div className="user-info">
          <img src="your-image-url" alt="User Profile" className="user-image" />
          <h2>Harshitha</h2>
          <p>CSE - 22BCS220</p>
          <p>B.Tech 2022<br />Sem - 4</p>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#curriculum">Programme and Curriculum</a></li>
            <li><a href="#mess">Mess Management</a></li>
            <li><a href="#hostel">Visitor's Hostel</a></li>
            <li><a href="#healthcare">Healthcare Center</a></li>
            <li><a href="#scholarship">Scholarship Portal</a></li>
            <li><a href="#complaints">Complaint System</a></li>
            <li><a href="#placement">Placement Cell</a></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-main">
        <section className="notifications">
          <h3>Notifications</h3>
          <div className="notification">
            <p>Gymkhana Module</p>
            <span>A session by BitByte Club will be organised in CR101 - by PRIYANSH MEHTA</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
