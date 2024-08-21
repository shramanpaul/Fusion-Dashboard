import React from "react";

const ModuleTiles = ({ modules }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {modules.map((module, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{module.name}</h3>
          <p className="text-gray-600">{module.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModuleTiles;
