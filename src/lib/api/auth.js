import {api} from "./axios";

export const registerUser = async (data) => {
  return api.post("authentication/register-user", data);
};

export const loginUser = async (data) => {
  return api.post("authentication/user-login", data);
};

export const confirmEmail = async (token) => {
  return api.post("authentication/confirm-email", { token });
};

export const changePassword = async (data, token) => {
  return api.post("authentication/change-password", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};