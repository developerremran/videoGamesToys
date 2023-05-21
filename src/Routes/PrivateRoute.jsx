import React, { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { AuthContext } from '../Authntication/Authntication';


const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext)
  //  console.log(users);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <><button type="button" class="bg-indigo-500 ..." disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        {/* <!-- ... --> */}
      </svg>
      Processing...
    </button></>
  }

  if (users) {
    return children;
  } return <Navigate state={{ from: location }} to="/login" replace={true} />

};

export default PrivateRoute;