import React from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../store/AuthStore";

export const withAuthCheck = (Component) => {
  const AututhCheck = (props) => {
    const { authData } = useAuthStore((state) => state)

    const UserData = authData()
    if (UserData?.token) {
      return <Component {...props} />;
    }
    else {
      return <Navigate to="/login" replace />
    }

  }
  return AututhCheck;
};