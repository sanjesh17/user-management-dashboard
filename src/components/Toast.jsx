import React, { useEffect } from "react";

export const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "bg-white",
    error: "bg-red-500",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div
        className={`${colors[type]} text-black px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm`}
      >
        <div className="flex items-center space-x-3">
          <span className="font-medium">{message}</span>
        </div>
      </div>
    </div>
  );
};
