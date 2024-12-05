import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-orange-500 rounded-full animate-bounce p-4"></div>
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
