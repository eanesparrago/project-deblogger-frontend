import fetch from "isomorphic-fetch";
import { handleResponse } from "actions/auth";
import { API } from "../config";

// Get profile
export const getProfile = (token) => {
  return fetch(`${API}/user/profile`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(token);

      return response.json();
    })
    .catch((err) => console.log(err));
};

// Update profile
export const updateUser = (token, user) => {
  return fetch(`${API}/user`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: user,
  })
    .then((response) => {
      handleResponse(token);

      return response.json();
    })
    .catch((err) => console.log(err));
};
