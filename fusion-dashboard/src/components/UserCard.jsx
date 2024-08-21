import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
