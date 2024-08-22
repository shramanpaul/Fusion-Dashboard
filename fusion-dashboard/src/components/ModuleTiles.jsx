import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faBookOpen,
  faUtensils,
  faHome,
  faClinicMedical,
  faMoneyBill,
  faComments,
  faBriefcase,
  faBuilding,
  faUserGraduate,
  faBuildingUser,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

// Add all icons to the library
library.add(
  faGraduationCap,
  faBookOpen,
  faUtensils,
  faHome,
  faClinicMedical,
  faMoneyBill,
  faComments,
  faBriefcase,
  faBuilding,
  faUserGraduate,
  faBuildingUser,
  faTasks
);

const icons = {
  "Academics": faGraduationCap,
  "Programme and Curriculum": faBookOpen,
  "Mess Management": faUtensils,
  "Visitor's Hostel": faHome,
  "Healthcare Center": faClinicMedical,
  "Scholarship Portal": faMoneyBill,
  "Complaint System": faComments,
  "Placement Cell": faBriefcase,
  "Department": faBuilding,
  "Gymkhana": faUserGraduate,
  "Hostel Management": faBuildingUser,
  "Other Academic Procedure": faTasks
};

const ModuleTiles = ({ modules }) => {
  return (
    <div className="grid grid-cols-1 gap-2 h-[620px] overflow-y-auto">
      {modules.map((module) => (
        <div
          key={module.name}
          className="bg-gray-200 p-4 rounded text-center text-sm flex flex-col items-center justify-center min-w-[200px] min-h-[120px] max-w-[250px]"
        >
          <FontAwesomeIcon
            icon={icons[module.name]}
            className="text-2xl mb-2"
          />
          <span>{module.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ModuleTiles;
