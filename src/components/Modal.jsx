import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-md shadow-lg"
        onClick={onClose}
      />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-[#0A0A0A] rounded-2xl shadow-xl max-w-md w-full mx-4 transform transition-all border border-white/10">
          {children}
        </div>
      </div>
    </div>
  );
};
