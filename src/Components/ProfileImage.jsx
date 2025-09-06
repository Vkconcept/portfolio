import React from 'react';
import profilePic from '../assets/profile.jpg';

const ProfileImage = ({ isDark }) => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <div className={`absolute inset-0 ${isDark ? 'bg-blue-500' : 'bg-blue-600'} rounded-2xl transform rotate-3`}></div>
        <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-4 transform -rotate-1 shadow-xl`}>
          <img
            src={profilePic}
            alt="Williams Victor"
            className="w-80 h-96 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
