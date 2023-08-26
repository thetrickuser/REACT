import { redirect } from "react-router-dom";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const tokenLoader = () => {
  return getToken();
};

export const checkAuthLoader = () => {
  const token = getToken();
  if (!token) {
    return redirect("/");
  }
  return null;
};
