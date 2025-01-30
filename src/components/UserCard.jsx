import React, { useState } from "react";
import { Modal } from "./Modal";
import { useEffect } from "react";

export const UserCard = ({ user, onEdit, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = window.innerWidth < 768;

  useEffect(() => {
    if (isSmallScreen) {
      setIsHovered(true);
    }
  }, [isSmallScreen]);

  return (
    <>
      <div
        className="relative bg-[#0A0A0A] cursor-pointer rounded-lg border border-white/20 shadow-sm hover:shadow-xl hover:border-white/40 transition-all duration-300 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full border border-black/30 bg-white flex items-center justify-center text-black text-xl font-semibold">
                {user.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white">
                ID {user.id} - {user.name}
              </h3>
              <div className="flex items-center text-white/50 mt-1">
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-end gap-3 mt-6 transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={() => onEdit(user.id)}
              className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Remove Team Member"
      >
        <div className="p-6">
          <p className="text-center text-gray-400 mb-6">
            Are you sure you want to remove{" "}
            <span className="font-semibold text-white">{user.name}</span>?
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-6 py-2 text-white font-medium rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(user.id);
                setShowDeleteModal(false);
              }}
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-sm hover:bg-red-700 transition-colors cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
