import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <p className="text-xl font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.department}</p>
        <p className="text-gray-600">{user.degree}</p>
        <p className="text-gray-600">{user.semester}</p>
        <p className="text-gray-600">{user.role}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full">
        View Professional Profile
      </button>
    </div>
  );
};

export default UserCard;
