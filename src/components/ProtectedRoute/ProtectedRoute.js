import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ children, loggedIn }) {

    if (loggedIn === undefined) {
      return <Preloader isLoading={true} />
    }
  
    return loggedIn
      ? children
      : <Navigate to="/sign-in" replace />;
  }

export default ProtectedRoute; 