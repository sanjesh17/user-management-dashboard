import React, { useState, useEffect } from "react";
import { addUser, updateUser, fetchUsers } from "../services/apiService";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "./Toast";
import { ChevronLeft } from "lucide-react";

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (id) {
      fetchUsers().then((users) => {
        const user = users.find((user) => user.id === parseInt(id));
        if (user) setFormData(user);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await updateUser(id, formData);
        showToast("User updated successfully");
      } else {
        await addUser(formData);
        showToast("User added successfully");
      }
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      showToast("Failed to save user", "error");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-[#0A0A0A] rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <h2 className="text-2xl font-bold text-white">
              {id ? "Edit User" : "Add User"}
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full cursor-pointer px-4 py-2 text-white font-medium rounded-lg ${
                loading ? "bg-black" : "bg-white/10 hover:bg-white/20"
              } transition-colors flex items-center justify-center`}
            >
              {loading ? "Saving..." : "Save User"}
            </button>
          </form>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default UserForm;
