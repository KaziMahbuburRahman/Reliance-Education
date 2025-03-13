import React from "react";

const InfoCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 text-blue-900 mb-2">
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-gray-700">{value}</div>
    </div>
  );
};

export default InfoCard;
