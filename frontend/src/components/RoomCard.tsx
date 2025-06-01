import React from 'react';

interface RoomCardProps {
  title: string;
  description: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Book Now
      </button>
    </div>
  );
};

export default RoomCard;

