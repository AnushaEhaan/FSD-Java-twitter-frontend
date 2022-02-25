import React from 'react'
import {Outlet } from 'react-router-dom';
import {authLogout} from "../../store/actions/auth.action";
import {useSelector, useDispatch} from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  return (
		<div>
      <h1>
        Home

        <button onClick={() => {
          dispatch(authLogout());
        }}>
          Logout
        </button>
          

      </h1>
			<Outlet />
		</div>
	);
}

export default Home