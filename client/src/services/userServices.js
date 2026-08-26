import api from "./api";

export const getUsers = () => {
  return api("/users");
};

export const getUser = (id) => {
  return api(`/users/${id}`);
};

export const createUser = (user) => {
  return api("/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
};

export const updateUser = (id, user) => {
  // FIXED: Added missing slash `/users/${id}`
  return api(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
};

export const deleteUser = (id) => {
  
  return api(`/users/${id}`, {
    method: "DELETE",
  });
};