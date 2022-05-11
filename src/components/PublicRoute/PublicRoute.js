import React from "react";
import { Navigate } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';

function PublicRoute({ children }) {

  const [currentUser] = React.useContext(CurrentUserContext);

  if (!currentUser) {
    return ( children ); 
  } else { 
    return ( <Navigate to="/" /> );
  }
};

export default PublicRoute; 