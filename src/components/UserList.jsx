import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "../services/apiService";
import { UserCard } from "./UserCard";
import { Toast } from "./Toast";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, [page]);

  const loadUsers = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const data = await fetchUsers(page);
      if (data.length > 0) {
        setUsers((prev) => [...prev, ...data]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      showToast("Failed to load users", "error");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      showToast("User deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      showToast("Failed to delete user", "error");
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={(id) => navigate(`/edit/${id}`)}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {loading && <p className="text-center text-white mt-4">Loading...</p>}

        {hasMore && !loading && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="block mx-auto mt-6 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 cursor-pointer"
          >
            Load More
          </button>
        )}
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
