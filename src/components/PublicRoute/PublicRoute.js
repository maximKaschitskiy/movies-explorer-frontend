import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function PublicRoute({ children, loggedIn }) {

  if (loggedIn === undefined) {
    return <Preloader isLoading={true} />
  }

  return loggedIn
    ? <Navigate to="/" replace />
    : children ;
}

export default PublicRoute; 